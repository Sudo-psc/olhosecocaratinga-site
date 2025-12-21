import post from './post'
import video from './video'
import author from './author'
import category from './category'
import siteSettings from './site-settings'

export const schemaTypes = [
  // Documentos de conteúdo
  post,
  video,

  // Documentos de suporte
  author,
  category,

  // Configurações (singleton)
  siteSettings,
]
