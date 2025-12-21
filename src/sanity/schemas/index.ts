import post from './post'
import video from './video'
import author from './author'
import category from './category'
import tag from './tag'
import siteSettings from './site-settings'

// Object types (para uso em outros schemas)
import seoFields from './objects/seo-fields'
import medicalCompliance from './objects/medical-compliance'
import faqItem from './objects/faq-item'
import portableTextBody from './objects/portable-text-body'

export const schemaTypes = [
    // Documentos de conteúdo
    post,
    video,

    // Documentos de suporte/taxonomia
    author,
    category,
    tag,

    // Configurações (singleton)
    siteSettings,

    // Object types (reutilizáveis)
    seoFields,
    medicalCompliance,
    faqItem,
    portableTextBody,
]
