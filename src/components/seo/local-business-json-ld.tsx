/**
 * Schema.org JSON-LD para Local Business SEO
 * 
 * Gera structured data para:
 * - LocalBusiness (Clínica)
 * - MedicalBusiness
 * - Physician
 * - WebSite
 * - Organization
 */

import { SiteSettings } from '@/sanity/types'

interface LocalBusinessSchemaProps {
  settings: SiteSettings
}

export function generateLocalBusinessSchema(settings: SiteSettings) {
  const clinic = settings.clinic
  const _director = settings.medicalDirector
  const contact = settings.contact

  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    '@id': 'https://olhosecocaratinga.com.br/#organization',
    name: clinic?.name || 'Saraiva Vision Care LTDA',
    legalName: clinic?.legalName || 'Saraiva Vision Care LTDA',
    description: settings.siteDescription,
    url: 'https://olhosecocaratinga.com.br',
    telephone: contact?.phone || '+55 33 99860-1427',
    email: contact?.email || 'contato@saraivavision.com.br',

    // Endereço
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic?.address
        ? `${clinic.address.street}, ${clinic.address.number}`
        : 'Rua Catarina Maria Passos, 97',
      addressLocality: clinic?.address?.city || 'Caratinga',
      addressRegion: clinic?.address?.state || 'MG',
      postalCode: clinic?.address?.postalCode || '35300-000',
      addressCountry: 'BR',
    },

    // Coordenadas
    geo: clinic?.geo ? {
      '@type': 'GeoCoordinates',
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    } : {
      '@type': 'GeoCoordinates',
      latitude: -19.7883,
      longitude: -42.1394,
    },

    // Horário de funcionamento
    openingHoursSpecification: settings.businessHours?.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.days,
      opens: hours.openTime,
      closes: hours.closeTime,
    })) || [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],

    // Área de atendimento
    areaServed: settings.localSeo?.serviceArea?.map((area) => ({
      '@type': 'City',
      name: area,
    })) || [
        { '@type': 'City', name: 'Caratinga' },
        { '@type': 'City', name: 'Manhuaçu' },
        { '@type': 'City', name: 'Inhapim' },
      ],

    // Especialidade médica
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Oftalmologia',
    },

    // Serviços oferecidos
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Oftalmológicos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Tratamento de Olho Seco',
            description: 'Diagnóstico e tratamento da síndrome do olho seco',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Consulta Oftalmológica',
            description: 'Consulta completa com oftalmologista especializado',
          },
        },
      ],
    },

    // Redes sociais
    sameAs: [
      settings.socialLinks?.instagram,
      settings.socialLinks?.facebook,
      settings.socialLinks?.youtube,
      settings.socialLinks?.linkedin,
    ].filter(Boolean),

    // Logo
    logo: settings.logo?.asset?._ref
      ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${settings.logo.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
      : undefined,

    // Contato para agendamento
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: contact?.appointmentUrl || 'https://saraivavision.com.br/agendamento',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Agendamento de Consulta',
      },
    },
  }
}

export function generatePhysicianSchema(settings: SiteSettings) {
  const director = settings.medicalDirector

  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': 'https://olhosecocaratinga.com.br/#physician',
    name: director?.name || 'Dr. Philipe Saraiva Cruz',
    description: 'Médico Oftalmologista especializado em tratamento de olho seco',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: director?.specialty || 'Oftalmologia',
    },
    // Identificadores médicos
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'CRM',
        value: director?.crm || 'CRM-MG 69.870',
      },
      director?.rqe ? {
        '@type': 'PropertyValue',
        name: 'RQE',
        value: director.rqe,
      } : null,
    ].filter(Boolean),
    // Trabalha na clínica
    worksFor: {
      '@id': 'https://olhosecocaratinga.com.br/#organization',
    },
  }
}

export function generateWebSiteSchema(settings: SiteSettings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://olhosecocaratinga.com.br/#website',
    url: 'https://olhosecocaratinga.com.br',
    name: settings.siteTitle || 'Olhos Secos Caratinga',
    description: settings.siteDescription,
    publisher: {
      '@id': 'https://olhosecocaratinga.com.br/#organization',
    },
    inLanguage: 'pt-BR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://olhosecocaratinga.com.br/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// Componente React para inserir no head
export default function LocalBusinessJsonLd({ settings }: LocalBusinessSchemaProps) {
  const schemas = [
    generateLocalBusinessSchema(settings),
    generatePhysicianSchema(settings),
    generateWebSiteSchema(settings),
  ]

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
