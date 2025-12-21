import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Vídeo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'URL do YouTube',
      type: 'url',
      description: 'URL completa do vídeo no YouTube (ex: https://www.youtube.com/watch?v=xxxxx)',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'duration',
      title: 'Duração',
      type: 'string',
      description: 'Duração do vídeo (ex: "10:30" ou "1h 25min")',
    }),
    defineField({
      name: 'transcript',
      title: 'Transcrição',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
            ],
          },
        },
      ],
      description: 'Transcrição completa do vídeo (opcional, bom para SEO e acessibilidade)',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Personalizada',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'Thumbnail personalizada. Se não fornecida, será usada a thumbnail do YouTube.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título SEO',
          type: 'string',
          description: 'Título para mecanismos de busca',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'Descrição SEO',
          type: 'text',
          rows: 2,
          description: 'Meta description',
          validation: (Rule) => Rule.max(160),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      media: 'thumbnail',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, duration, media, date } = selection
      const formattedDate = date
        ? new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        : 'Sem data'
      return {
        title,
        subtitle: `${duration || 'Duração não definida'} • ${formattedDate}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Data de Publicação (Mais Recente)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Data de Publicação (Mais Antigo)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Título (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
