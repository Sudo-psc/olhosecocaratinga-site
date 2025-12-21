import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  // Singleton - apenas um documento deste tipo
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Título do Site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição do Site',
      type: 'text',
      rows: 2,
      description: 'Descrição padrão para SEO',
    }),
    defineField({
      name: 'defaultSeo',
      title: 'SEO Padrão',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Padrão',
          type: 'string',
          description: 'Usado quando páginas não têm título SEO próprio',
        }),
        defineField({
          name: 'description',
          title: 'Descrição Padrão',
          type: 'text',
          rows: 2,
          description: 'Meta description padrão',
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Ícone do site (recomendado: 32x32 ou 64x64 pixels)',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Configurações do Site',
        media: selection.media,
      }
    },
  },
})
