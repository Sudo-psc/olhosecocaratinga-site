/**
 * Site configuration and constants
 */

export const SITE_CONFIG = {
    name: 'Olho Seco Caratinga',
    description: 'Referência em tratamento de olho seco em Caratinga. Tecnologia avançada e atendimento humanizado na Clínica Saraiva Vision.',
    url: 'https://olhosecocaratinga.com.br',
    locale: 'pt_BR',
    language: 'pt-BR',

    // Business Info
    business: {
        name: 'Saraiva Vision',
        cnpj: '53.864.119/0001-79',
        address: {
            street: 'Rua Catarina Maria Passos, 97',
            neighborhood: 'Bairro Santa Zita (Amor e Saúde)',
            city: 'Caratinga',
            state: 'MG',
            zip: '35300-299',
            country: 'Brasil',
        },
        phone: '(33) 99860-1427',
        whatsapp: '5533998601427',
        email: 'contato@saraivavision.com.br',
        hours: {
            weekdays: '08:00 - 18:00',
            saturday: '08:00 - 12:00',
            sunday: 'Fechado',
        },
        coordinates: {
            lat: -19.7925,
            lng: -42.1447,
        },
    },

    // Doctor Info
    doctor: {
        name: 'Dr. Philipe Saraiva Cruz',
        title: 'Médico pós-graduado em oftalmologia área de atuação oftalmologia clínica, procedimentos cirúrgicos minimamente invasivos e olho seco',
        crm: 'CRM-MG 69.870',
        specialties: ['médico pós-graduado em oftalmologia área de atuação oftalmologia clínica, procedimentos cirúrgicos minimamente invasivos e olho seco', 'Olho Seco', 'Cirurgia Ocular'],
    },

    // Social Media
    social: {
        instagram: 'https://instagram.com/saraiva_vision',
        facebook: 'https://facebook.com/saraivavision',
        youtube: 'https://youtube.com/@saraivavision',
        linkedin: 'https://linkedin.com/company/saraivavision',
    },

    // SEO Defaults
    seo: {
        titleTemplate: '%s | Saraiva Vision - Olho Seco Caratinga',
        defaultTitle: 'Tratamento Especializado de Olho Seco | Saraiva Vision Caratinga',
        defaultDescription: 'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - médico pós-graduado em oftalmologia área de atuação oftalmologia clínica, procedimentos cirúrgicos minimamente invasivos e olho seco - CRM-MG 69.870. Diagnóstico preciso e tratamentos modernos.',
        defaultImage: '/og-image.jpg',
    },

    // Navigation
    navigation: [
        { name: 'Início', href: '/' },
        { name: 'Olho Seco', href: '/olho-seco' },
        { name: 'Tratamentos', href: '/tratamentos' },
        { name: 'Vídeos', href: '/videos' },
        { name: 'Blog', href: '/blog' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Contato', href: '/contato' },
    ],

    // Footer Links
    footerLinks: {
        quick: [
            { name: 'Início', href: '/' },
            { name: 'Olho Seco', href: '/olho-seco' },
            { name: 'Tratamentos', href: '/tratamentos' },
            { name: 'Blog', href: '/blog' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Contato', href: '/contato' },
        ],
        services: [
            { name: 'Diagnóstico de Olho Seco', href: '/tratamentos#diagnostico' },
            { name: 'Plugs Lacrimais', href: '/tratamentos#plugs' },
            { name: 'Jato de Plasma', href: '/tratamentos#plasma' },
            { name: 'Meibografia', href: '/tratamentos#meibografia' },
            { name: 'Consulta Oftalmológica', href: '/contato' },
        ],
        legal: [
            { name: 'Política de Privacidade', href: '/privacidade' },
            { name: 'Termos de Uso', href: '/termos' },
        ],
    },
};

// Structured Data for the clinic
export function getClinicStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': `${SITE_CONFIG.url}/#clinic`,
        name: SITE_CONFIG.business.name,
        alternateName: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.business.phone,
        email: SITE_CONFIG.business.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.business.address.street,
            addressLocality: SITE_CONFIG.business.address.city,
            addressRegion: SITE_CONFIG.business.address.state,
            postalCode: SITE_CONFIG.business.address.zip,
            addressCountry: 'BR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: SITE_CONFIG.business.coordinates.lat,
            longitude: SITE_CONFIG.business.coordinates.lng,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '12:00',
            },
        ],
        priceRange: '$$',
        currenciesAccepted: 'BRL',
        paymentAccepted: 'Cash, Credit Card, Debit Card, PIX',
        medicalSpecialty: 'Ophthalmology',
        sameAs: Object.values(SITE_CONFIG.social),
    };
}

// Structured Data for the doctor
export function getDoctorStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        '@id': `${SITE_CONFIG.url}/#doctor`,
        name: SITE_CONFIG.doctor.name,
        jobTitle: SITE_CONFIG.doctor.title,
        medicalSpecialty: 'Ophthalmology',
        description: `${SITE_CONFIG.doctor.title} especializado em tratamento de olho seco`,
        identifier: {
            '@type': 'PropertyValue',
            name: 'CRM',
            value: SITE_CONFIG.doctor.crm,
        },
        worksFor: {
            '@id': `${SITE_CONFIG.url}/#clinic`,
        },
        url: SITE_CONFIG.url,
    };
}

// Breadcrumb structured data helper
export function getBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
        })),
    };
}

// FAQ structured data helper
export function getFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// Article structured data helper
export function getArticleStructuredData(article: {
    title: string;
    description: string;
    url: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: article.url.startsWith('http') ? article.url : `${SITE_CONFIG.url}${article.url}`,
        image: article.image || SITE_CONFIG.seo.defaultImage,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Person',
            name: article.author || SITE_CONFIG.doctor.name,
        },
        publisher: {
            '@id': `${SITE_CONFIG.url}/#clinic`,
        },
    };
}
