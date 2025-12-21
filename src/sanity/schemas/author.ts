import { defineType, defineField } from 'sanity'

/**
 * Schema: Author
 *
 * Autores de conteúdo do site.
 * Para conteúdo médico, é importante ter informações de credenciais.
 */
export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome Completo',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
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
      name: 'role',
      title: 'Cargo/Função',
      type: 'string',
      description: 'Ex: Oftalmologista, Médico, Editor',
    }),
    defineField({
      name: 'credentials',
      title: 'Credenciais',
      type: 'object',
      description: 'Informações profissionais (para profissionais de saúde)',
      fields: [
        defineField({
          name: 'crm',
          title: 'CRM',
          type: 'string',
          description: 'Número do CRM (ex: CRM-MG 69.870)',
        }),
        defineField({
          name: 'specialty',
          title: 'Especialidade',
          type: 'string',
          description: 'Especialidade médica',
        }),
        defineField({
          name: 'rqe',
          title: 'RQE',
          type: 'string',
          description: 'Registro de Qualificação de Especialista',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
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
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
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
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'isMedicalProfessional',
      title: 'Profissional de Saúde',
      type: 'boolean',
      description: 'Este autor é um profissional de saúde registrado?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      crm: 'credentials.crm',
      media: 'photo',
    },
    prepare({ title, role, crm, media }) {
      const subtitle = [role, crm].filter(Boolean).join(' • ')
      return {
        title: title || 'Autor sem nome',
        subtitle: subtitle || 'Sem cargo definido',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Nome (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
