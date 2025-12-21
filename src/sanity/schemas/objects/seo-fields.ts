import { defineType, defineField } from 'sanity'

/**
 * Campos SEO reutilizáveis
 * Usado em posts, vídeos e páginas
 */
export default defineType({
  name: 'seoFields',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Título SEO',
      type: 'string',
      description:
        'Título para mecanismos de busca (50-60 caracteres ideal). Deixe vazio para usar o título do conteúdo.',
      validation: (Rule) =>
        Rule.max(70).warning('Títulos acima de 60 caracteres podem ser truncados no Google'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Descrição para mecanismos de busca (150-160 caracteres ideal)',
      validation: (Rule) =>
        Rule.max(170).warning('Descrições acima de 160 caracteres podem ser truncadas'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagem Open Graph',
      type: 'image',
      description: 'Imagem para compartilhamento em redes sociais (1200x630px recomendado)',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL Canônica',
      type: 'url',
      description:
        'URL canônica se o conteúdo foi publicado originalmente em outro lugar. Deixe vazio para usar a URL padrão.',
    }),
    defineField({
      name: 'noindex',
      title: 'Não indexar (noindex)',
      type: 'boolean',
      description: 'Marque para impedir que este conteúdo apareça nos mecanismos de busca',
      initialValue: false,
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})
