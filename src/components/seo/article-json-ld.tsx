/**
 * Schema.org JSON-LD para Artigos e Blog Posts
 * 
 * Gera structured data para:
 * - Article
 * - BlogPosting
 * - MedicalWebPage
 * - FAQPage
 */

import { Post, SiteSettings } from '@/sanity/types'
import { toPlainText } from '@portabletext/react'

interface ArticleSchemaProps {
  post: Post
  settings?: SiteSettings
}

export function generateArticleSchema(post: Post, settings?: SiteSettings) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'
  const articleUrl = `${siteUrl}/blog/${post.slug.current}`

  return {
    '@context': 'https://schema.org',
    '@type': post.postType === 'pillar' ? 'Article' : 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: post.title,
    description: post.seo?.seoDescription || post.excerpt,
    url: articleUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post._updatedAt,

    // Autor
    author: post.author ? {
      '@type': post.author.isMedicalProfessional ? 'Physician' : 'Person',
      name: post.author.name,
      url: `${siteUrl}/autor/${post.author.slug.current}`,
      ...(post.author.credentials?.crm && {
        identifier: {
          '@type': 'PropertyValue',
          name: 'CRM',
          value: post.author.credentials.crm,
        },
      }),
    } : undefined,

    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: settings?.clinic?.name || 'Saraiva Vision Care',
      logo: settings?.logo?.asset?._ref ? {
        '@type': 'ImageObject',
        url: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${settings.logo.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`,
      } : undefined,
    },

    // Imagem principal
    image: post.coverImage?.asset?._ref
      ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${post.coverImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
      : undefined,

    // Categorias e tags
    articleSection: post.categories?.map((cat) => cat.title).join(', '),
    keywords: post.tags?.map((tag) => tag.title).join(', '),

    // Tempo de leitura
    ...(post.readingTime?.minutes && {
      timeRequired: `PT${post.readingTime.minutes}M`,
    }),

    // Revisão médica
    ...(post.medicalCompliance?.reviewedByMedical && post.medicalCompliance.medicalReviewer && {
      reviewedBy: {
        '@type': 'Physician',
        name: post.medicalCompliance.medicalReviewer.name,
        ...(post.medicalCompliance.medicalReviewer.credentials?.crm && {
          identifier: {
            '@type': 'PropertyValue',
            name: 'CRM',
            value: post.medicalCompliance.medicalReviewer.credentials.crm,
          },
        }),
      },
      lastReviewed: post.medicalCompliance.medicalReviewDate,
    }),

    // Main entity
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    // Idioma
    inLanguage: 'pt-BR',
  }
}

export function generateFAQSchema(post: Post) {
  if (!post.faq || post.faq.length === 0) return null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'
  const articleUrl = `${siteUrl}/blog/${post.slug.current}`

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${articleUrl}#faq`,
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer ? toPlainText(item.answer) : '',
      },
    })),
  }
}

export function generateMedicalWebPageSchema(post: Post, _settings?: SiteSettings) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'
  const articleUrl = `${siteUrl}/blog/${post.slug.current}`

  // Só gera MedicalWebPage se o conteúdo foi revisado por médico
  if (!post.medicalCompliance?.reviewedByMedical) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${articleUrl}#medicalwebpage`,
    name: post.title,
    description: post.seo?.seoDescription || post.excerpt,
    url: articleUrl,

    // Público-alvo
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Patients',
    },

    // Especialidade médica
    specialty: {
      '@type': 'MedicalSpecialty',
      name: 'Oftalmologia',
    },

    // Revisão médica
    lastReviewed: post.medicalCompliance.medicalReviewDate,
    reviewedBy: post.medicalCompliance.medicalReviewer ? {
      '@type': 'Physician',
      name: post.medicalCompliance.medicalReviewer.name,
    } : undefined,

    // Disclaimer
    ...(post.medicalCompliance.disclaimerType !== 'none' && {
      about: {
        '@type': 'MedicalCondition',
        name: 'Síndrome do Olho Seco',
      },
    }),
  }
}

// Componente React para inserir no head do artigo
export default function ArticleJsonLd({ post, settings }: ArticleSchemaProps) {
  const schemas = [
    generateArticleSchema(post, settings),
    generateFAQSchema(post),
    generateMedicalWebPageSchema(post, settings),
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
