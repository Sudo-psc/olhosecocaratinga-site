/**
 * Schema.org JSON-LD para Vídeos
 * 
 * Gera structured data para:
 * - VideoObject
 */

import { Video, SiteSettings } from '@/sanity/types'
import { toPlainText } from '@portabletext/react'
import { getYouTubeVideoId } from '@/sanity/types'

interface VideoSchemaProps {
  video: Video
  settings?: SiteSettings
}

export function generateVideoSchema(video: Video, settings?: SiteSettings) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'
  const videoPageUrl = `${siteUrl}/videos/${video.slug.current}`
  const youtubeId = getYouTubeVideoId(video.youtubeUrl)

  // Converte duração para formato ISO 8601 (PT#M#S)
  const formatDuration = (duration?: string) => {
    if (!duration) return undefined
    const parts = duration.split(':')
    if (parts.length === 2) {
      return `PT${parts[0]}M${parts[1]}S`
    } else if (parts.length === 3) {
      return `PT${parts[0]}H${parts[1]}M${parts[2]}S`
    }
    return undefined
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${videoPageUrl}#video`,
    name: video.title,
    description: video.seo?.seoDescription || (video.description ? toPlainText(video.description) : ''),
    url: videoPageUrl,
    embedUrl: youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : undefined,
    
    // Thumbnail
    thumbnailUrl: video.thumbnail?.asset?._ref
      ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${video.thumbnail.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
      : youtubeId
        ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
        : undefined,

    // Datas
    uploadDate: video.publishedAt,
    datePublished: video.publishedAt,
    dateModified: video.updatedAt || video._updatedAt,

    // Duração
    duration: formatDuration(video.duration),

    // Autor/Apresentador
    author: video.author ? {
      '@type': video.author.isMedicalProfessional ? 'Physician' : 'Person',
      name: video.author.name,
      url: `${siteUrl}/autor/${video.author.slug.current}`,
    } : undefined,

    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: settings?.clinic?.name || 'Saraiva Vision Care',
    },

    // Transcrição
    transcript: video.transcript ? toPlainText(video.transcript) : undefined,

    // Capítulos/Timestamps
    ...(video.timestamps && video.timestamps.length > 0 && {
      hasPart: video.timestamps.map((timestamp, index) => ({
        '@type': 'Clip',
        name: timestamp.label,
        startOffset: timestamp.time,
        position: index + 1,
        url: `${video.youtubeUrl}&t=${timestamp.time.replace(':', 'm')}s`,
      })),
    }),

    // Plataforma
    playerType: 'YouTube',
    
    // Idioma
    inLanguage: 'pt-BR',

    // Categorias
    genre: video.categories?.map((cat) => cat.title).join(', '),

    // Status de upload
    uploadStatus: 'processed',

    // Tipo de interação
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
    },
  }
}

// Componente React para inserir no head do vídeo
export default function VideoJsonLd({ video, settings }: VideoSchemaProps) {
  const schema = generateVideoSchema(video, settings)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
