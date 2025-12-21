import { defineType, defineField } from 'sanity'

/**
 * Schema: Tag
 *
 * Tags para organização de conteúdo.
 * Diferente de categorias, tags são mais específicas e granulares.
 */
export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome da Tag',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
      description: 'Breve descrição da tag (opcional)',
    }),
    defineField({
      name: 'color',
      title: 'Cor',
      type: 'string',
      description: 'Cor de destaque para a tag (hex)',
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Use formato hex válido, ex: #3B82F6'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare({ title, color }) {
      return {
        title: title || 'Tag sem nome',
        subtitle: color || 'Sem cor definida',
      }
    },
  },
  orderings: [
    {
      title: 'Nome (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
