import { defineType, defineArrayMember } from 'sanity'

/**
 * Corpo de texto rico com todos os blocos necessários
 */
export default defineType({
    name: 'portableTextBody',
    title: 'Conteúdo',
    type: 'array',
    of: [
        // Blocos de texto padrão
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Citação', value: 'blockquote' },
            ],
            marks: {
                decorators: [
                    { title: 'Negrito', value: 'strong' },
                    { title: 'Itálico', value: 'em' },
                    { title: 'Sublinhado', value: 'underline' },
                    { title: 'Código', value: 'code' },
                    { title: 'Destacado', value: 'highlight' },
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
                                validation: (Rule) =>
                                    Rule.uri({
                                        scheme: ['http', 'https', 'mailto', 'tel'],
                                    }),
                            },
                            {
                                name: 'blank',
                                type: 'boolean',
                                title: 'Abrir em nova aba',
                                initialValue: false,
                            },
                        ],
                    },
                    {
                        name: 'internalLink',
                        type: 'object',
                        title: 'Link Interno',
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                title: 'Referência',
                                to: [{ type: 'post' }, { type: 'video' }, { type: 'category' }],
                            },
                        ],
                    },
                ],
            },
            lists: [
                { title: 'Lista com Marcadores', value: 'bullet' },
                { title: 'Lista Numerada', value: 'number' },
                { title: 'Lista de Verificação', value: 'check' },
            ],
        }),
        // Imagem
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                    description: 'Importante para acessibilidade e SEO',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Legenda',
                },
                {
                    name: 'source',
                    type: 'string',
                    title: 'Fonte/Crédito',
                },
            ],
        }),
        // Vídeo YouTube incorporado
        defineArrayMember({
            name: 'youtubeEmbed',
            type: 'object',
            title: 'Vídeo YouTube',
            fields: [
                {
                    name: 'url',
                    type: 'url',
                    title: 'URL do YouTube',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Legenda',
                },
            ],
            preview: {
                select: {
                    url: 'url',
                    caption: 'caption',
                },
                prepare({ url, caption }) {
                    return {
                        title: caption || 'Vídeo YouTube',
                        subtitle: url,
                    }
                },
            },
        }),
        // Callout / Destaque
        defineArrayMember({
            name: 'callout',
            type: 'object',
            title: 'Destaque',
            fields: [
                {
                    name: 'type',
                    type: 'string',
                    title: 'Tipo',
                    options: {
                        list: [
                            { title: 'Informação', value: 'info' },
                            { title: 'Dica', value: 'tip' },
                            { title: 'Aviso', value: 'warning' },
                            { title: 'Importante', value: 'important' },
                            { title: 'Médico', value: 'medical' },
                        ],
                    },
                    initialValue: 'info',
                },
                {
                    name: 'content',
                    type: 'array',
                    title: 'Conteúdo',
                    of: [{ type: 'block' }],
                },
            ],
            preview: {
                select: {
                    type: 'type',
                },
                prepare({ type }) {
                    const icons = {
                        info: 'ℹ️',
                        tip: '💡',
                        warning: '⚠️',
                        important: '❗',
                        medical: '🏥',
                    }
                    return {
                        title: `Destaque: ${type}`,
                        media: () => icons[type as keyof typeof icons] || 'ℹ️',
                    }
                },
            },
        }),
        // Tabela
        defineArrayMember({
            name: 'table',
            type: 'object',
            title: 'Tabela',
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Título da Tabela',
                },
                {
                    name: 'rows',
                    type: 'array',
                    title: 'Linhas',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'cells',
                                    type: 'array',
                                    title: 'Células',
                                    of: [{ type: 'string' }],
                                },
                                {
                                    name: 'isHeader',
                                    type: 'boolean',
                                    title: 'Linha de Cabeçalho',
                                    initialValue: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        // CTA Button
        defineArrayMember({
            name: 'ctaButton',
            type: 'object',
            title: 'Botão CTA',
            fields: [
                {
                    name: 'text',
                    type: 'string',
                    title: 'Texto do Botão',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'url',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'style',
                    type: 'string',
                    title: 'Estilo',
                    options: {
                        list: [
                            { title: 'Primário', value: 'primary' },
                            { title: 'Secundário', value: 'secondary' },
                            { title: 'WhatsApp', value: 'whatsapp' },
                        ],
                    },
                    initialValue: 'primary',
                },
            ],
            preview: {
                select: {
                    title: 'text',
                    style: 'style',
                },
                prepare({ title, style }) {
                    return {
                        title: title || 'Botão',
                        subtitle: `Estilo: ${style}`,
                    }
                },
            },
        }),
    ],
})
