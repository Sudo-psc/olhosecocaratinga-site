import { defineType, defineField } from 'sanity'

/**
 * Item de FAQ reutilizável
 * Pode ser usado em posts, vídeos ou como documento standalone
 */
export default defineType({
    name: 'faqItem',
    title: 'Pergunta Frequente',
    type: 'object',
    fields: [
        defineField({
            name: 'question',
            title: 'Pergunta',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(200),
        }),
        defineField({
            name: 'answer',
            title: 'Resposta',
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
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'question',
        },
        prepare({ title }) {
            return {
                title: title || 'Pergunta sem título',
                subtitle: 'FAQ',
            }
        },
    },
})
