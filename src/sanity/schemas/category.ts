import { defineType, defineField } from 'sanity'

/**
 * Schema: Category
 *
 * Categorias principais para organização de conteúdo.
 * Usadas para agrupar posts e vídeos por tema.
 */
export default defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  icon: () => '📁',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome da Categoria',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
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
      rows: 3,
      description: 'Descrição da categoria para SEO e exibição',
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'string',
      description: 'Emoji ou nome de ícone para representar a categoria',
    }),
    defineField({
      name: 'color',
      title: 'Cor',
      type: 'string',
      description: 'Cor de destaque da categoria (hex)',
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Use formato hex válido, ex: #3B82F6'),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      description: 'Imagem de capa da categoria',
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
      name: 'parent',
      title: 'Categoria Pai',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Categoria pai para criar hierarquia (opcional)',
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Ordem de exibição nas listagens (menor = primeiro)',
      initialValue: 0,
    }),
    // SEO específico da categoria
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'seoTitle',
          title: 'Título SEO',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'seoDescription',
          title: 'Descrição SEO',
          type: 'text',
          rows: 2,
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
      icon: 'icon',
      media: 'image',
    },
    prepare({ title, icon, media }) {
      return {
        title: `${icon || '📁'} ${title}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Ordem de Exibição',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Nome (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
