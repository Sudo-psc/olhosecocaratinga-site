/**
 * Utilitários para geração de dados estruturados Schema.org
 * Saraiva Vision Care LTDA - Olho Seco Caratinga
 */

// Dados fixos do negócio
export const BUSINESS_DATA = {
    name: 'Saraiva Vision Care LTDA',
    category: 'Oftalmologia',
    alternateName: 'Olho Seco Caratinga',
    description: 'Clínica oftalmológica especializada em diagnóstico e tratamento de olho seco e outras doenças oculares',
    address: {
        streetAddress: 'Rua Catarina Maria Passos, 97',
        addressLocality: 'Santa Zita',
        addressRegion: 'Caratinga',
        postalCode: '35300-000',
        addressCountry: 'BR',
        addressRegionCode: 'MG'
    },
    telephone: '+55 33 99860-1427',
    website: 'https://saraivavision.com.br',
    bookingPage: 'https://saraivavision.com.br/agendamento',
    responsible: {
        name: 'Dr. Philipe Saraiva Cruz',
        title: 'Médico Oftalmologista',
        credential: 'CRM-MG 69.870'
    },
    geo: {
        latitude: -20.1124, // Coordenadas aproximadas de Caratinga/MG
        longitude: -42.1453
    },
    openingHours: [
        'Mo-Fr 08:00-18:00',
        'Sa 08:00-12:00'
    ]
}

// Base URL do site
const SITE_URL = 'https://olhosecocaratinga.com.br'

/**
 * Gera LocalBusiness Schema para páginas institucionais
 */
export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['Physician', 'LocalBusiness'],
        name: BUSINESS_DATA.name,
        alternateName: BUSINESS_DATA.alternateName,
        description: BUSINESS_DATA.description,
        category: BUSINESS_DATA.category,
        url: SITE_URL,
        telephone: BUSINESS_DATA.telephone,
        address: {
            '@type': 'PostalAddress',
            ...BUSINESS_DATA.address
        },
        geo: {
            '@type': 'GeoCoordinates',
            ...BUSINESS_DATA.geo
        },
        openingHoursSpecification: BUSINESS_DATA.openingHours.map(hours => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: hours.split(' ')[0],
            opens: hours.split(' ')[1].split('-')[0],
            closes: hours.split(' ')[1].split('-')[1]
        })),
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_DATA.telephone,
            contactType: 'customer service',
            availableLanguage: ['pt-BR']
        },
        sameAs: [
            BUSINESS_DATA.website,
            `${SITE_URL}`
        ],
        makesOffer: {
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: 'Consulta Oftalmológica',
                description: 'Avaliação e tratamento de doenças oculares'
            }
        }
    }
}

/**
 * Gera MedicalWebPage Schema para página principal do olho seco
 */
export function generateMedicalWebPageSchema(condition: string, content: string) {
    return {
        '@context': 'https://schema.org',
        '@type': ['MedicalWebPage', 'WebPage'],
        name: `Tratamento de ${condition} - Olho Seco Caratinga`,
        description: content.substring(0, 160) + '...',
        url: `${SITE_URL}/olho-seco`,
        mainContentOfPage: {
            '@type': 'WebPageElement',
            cssSelector: 'main',
            text: content
        },
        about: {
            '@type': 'MedicalCondition',
            name: condition,
            alternateName: 'Síndrome dos Olhos Secos',
            description: `Informações sobre ${condition} e opções de tratamento`,
            medicalSpecialty: {
                '@type': 'MedicalSpecialty',
                name: 'Oftalmologia'
            }
        },
        medicalAudience: {
            '@type': 'MedicalAudience',
            audienceType: 'Pacientes com sintomas de olho seco'
        },
        lastReviewed: new Date().toISOString(),
        reviewedBy: {
            '@type': 'Person',
            name: BUSINESS_DATA.responsible.name,
            title: BUSINESS_DATA.responsible.title,
            credential: BUSINESS_DATA.responsible.credential
        },
        disclaimer: 'As informações deste site não substituem uma consulta médica. Sempre procure um profissional qualificado.'
    }
}

/**
 * Gera FAQPage Schema para FAQs
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Perguntas Frequentes - Olho Seco Caratinga',
        description: 'Respostas para as dúvidas mais comuns sobre olho seco e tratamentos oftalmológicos',
        url: `${SITE_URL}/faq`,
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        })),
        about: {
            '@type': 'MedicalCondition',
            name: 'Olho Seco',
            medicalSpecialty: {
                '@type': 'MedicalSpecialty',
                name: 'Oftalmologia'
            }
        },
        lastReviewed: new Date().toISOString(),
        reviewedBy: {
            '@type': 'Person',
            name: BUSINESS_DATA.responsible.name,
            credential: BUSINESS_DATA.responsible.credential
        }
    }
}

/**
 * Gera VideoObject Schema para vídeos
 */
export function generateVideoObjectSchema(
    title: string,
    description: string,
    thumbnailUrl: string,
    uploadDate: string,
    duration: string,
    contentUrl: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: title,
        description: description,
        thumbnailUrl,
        uploadDate,
        duration,
        contentUrl,
        embedUrl: `${SITE_URL}/videos/${contentUrl.split('/').pop()}`,
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_DATA.name,
            url: BUSINESS_DATA.website
        },
        creator: {
            '@type': 'Person',
            name: BUSINESS_DATA.responsible.name,
            credential: BUSINESS_DATA.responsible.credential
        },
        about: {
            '@type': 'MedicalCondition',
            name: 'Olho Seco',
            medicalSpecialty: {
                '@type': 'MedicalSpecialty',
                name: 'Oftalmologia'
            }
        },
        educationalUse: 'instruction',
        learningResourceType: 'video',
        audience: {
            '@type': 'EducationalAudience',
            educationalRole: 'patient'
        },
        inLanguage: 'pt-BR',
        isFamilyFriendly: true
    }
}

/**
 * Gera BreadcrumbList Schema para navegação
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${SITE_URL}${crumb.url}`
        }))
    }
}

/**
 * Gera Article Schema para posts do blog
 */
export function generateArticleSchema(
    title: string,
    description: string,
    author: string,
    publishDate: string,
    modifyDate: string,
    content: string,
    imageUrl?: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': ['Article', 'MedicalArticle'],
        headline: title,
        description: description.substring(0, 160) + '...',
        image: imageUrl || `${SITE_URL}/images/og-default.jpg`,
        datePublished: publishDate,
        dateModified: modifyDate,
        author: {
            '@type': 'Person',
            name: author
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_DATA.name,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${title.toLowerCase().replace(/\s+/g, '-')}`
        },
        articleBody: content,
        articleSection: 'Oftalmologia',
        about: {
            '@type': 'MedicalCondition',
            name: 'Olho Seco',
            medicalSpecialty: {
                '@type': 'MedicalSpecialty',
                name: 'Oftalmologia'
            }
        },
        medicalAudience: {
            '@type': 'MedicalAudience',
            audienceType: 'Pacientes e interessados em saúde ocular'
        },
        disclaimer: 'Conteúdo educativo. Não substitui consulta médica.'
    }
}

/**
 * Gera WebSite Schema para o site geral
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: BUSINESS_DATA.alternateName,
        alternateName: BUSINESS_DATA.name,
        url: SITE_URL,
        description: BUSINESS_DATA.description,
        inLanguage: 'pt-BR',
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_DATA.name,
            url: BUSINESS_DATA.website,
            address: {
                '@type': 'PostalAddress',
                ...BUSINESS_DATA.address
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_DATA.telephone,
                contactType: 'customer service'
            }
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    }
}

/**
 * Disclaimer padrão para conteúdo médico
 */
export const MEDICAL_DISCLAIMER = 'As informações fornecidas neste site têm caráter educativo e informativo, não devendo ser utilizadas como substituto de consulta, diagnóstico ou tratamento médico. Sempre procure um profissional qualificado para avaliação adequada de sua condição de saúde.'
