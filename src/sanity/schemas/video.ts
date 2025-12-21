import { defineType, defineField } from 'sanity'

/**
 * Schema: Video
 *
 * Vídeos do YouTube com suporte a transcrição para SEO.
 * Inclui campos de compliance médico e organização.
 */
export default defineType({
    name: 'video',
    title: 'Vídeo',
    type: 'document',
    icon: () => '🎬',
    groups: [
        { name: 'content', title: 'Conteúdo', default: true },
        { name: 'seo', title: 'SEO' },
        { name: 'organization', title: 'Organização' },
        { name: 'compliance', title: 'Compliance Médico' },
        { name: 'relations', title: 'Relações' },
    ],
    fields: [
        // ===== GRUPO: CONTEÚDO =====
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            group: 'content',
            description: 'Título do vídeo',
            validation: (Rule) =>
                Rule.required()
                    .min(10)
                    .max(100)
                    .error('O título deve ter entre 10 e 100 caracteres'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .slice(0, 96),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'URL do YouTube',
            type: 'url',
            group: 'content',
            description:
                'URL completa do vídeo no YouTube (ex: https://www.youtube.com/watch?v=xxxxx ou https://youtu.be/xxxxx)',
            validation: (Rule) =>
                Rule.required()
                    .uri({ scheme: ['http', 'https'] })
                    .custom((url) => {
                        if (!url) return true
                        const youtubeRegex =
                            /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[\w-]+/
                        if (!youtubeRegex.test(url)) {
                            return 'Por favor, insira uma URL válida do YouTube'
                        }
                        return true
                    }),
        }),
        defineField({
            name: 'duration',
            title: 'Duração',
            type: 'string',
            group: 'content',
            description: 'Duração do vídeo no formato MM:SS ou HH:MM:SS',
            validation: (Rule) =>
                Rule.regex(/^(\d{1,2}:)?\d{1,2}:\d{2}$/).error(
                    'Use o formato MM:SS ou HH:MM:SS (ex: 10:30 ou 1:25:00)'
                ),
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Personalizada',
            type: 'image',
            group: 'content',
            options: { hotspot: true },
            description:
                'Thumbnail personalizada. Se não fornecida, será usada a thumbnail do YouTube.',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'array',
            group: 'content',
            description: 'Descrição detalhada do vídeo',
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
                                    {
                                        name: 'blank',
                                        type: 'boolean',
                                        title: 'Abrir em nova aba',
                                        initialValue: true,
                                    },
                                ],
                            },
                        ],
                    },
                    lists: [
                        { title: 'Lista com Marcadores', value: 'bullet' },
                        { title: 'Lista Numerada', value: 'number' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'transcript',
            title: 'Transcrição',
            type: 'array',
            group: 'content',
            description:
                'Transcrição completa do vídeo (IMPORTANTE para SEO e acessibilidade)',
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
        }),
        defineField({
            name: 'timestamps',
            title: 'Timestamps / Capítulos',
            type: 'array',
            group: 'content',
            description: 'Marcações de tempo para navegação no vídeo',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'time',
                            title: 'Tempo',
                            type: 'string',
                            description: 'Formato: MM:SS ou HH:MM:SS',
                            validation: (Rule) =>
                                Rule.required().regex(/^(\d{1,2}:)?\d{1,2}:\d{2}$/),
                        },
                        {
                            name: 'label',
                            title: 'Descrição',
                            type: 'string',
                            validation: (Rule) => Rule.required().max(100),
                        },
                    ],
                    preview: {
                        select: { time: 'time', label: 'label' },
                        prepare({ time, label }) {
                            return { title: `${time} - ${label}` }
                        },
                    },
                },
            ],
        }),

        // ===== GRUPO: SEO =====
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            group: 'seo',
            fields: [
                defineField({
                    name: 'seoTitle',
                    title: 'Título SEO',
                    type: 'string',
                    description: 'Título para mecanismos de busca (50-60 caracteres)',
                    validation: (Rule) =>
                        Rule.max(70).warning('Títulos acima de 60 caracteres podem ser truncados'),
                }),
                defineField({
                    name: 'seoDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    description: 'Descrição para mecanismos de busca (150-160 caracteres)',
                    validation: (Rule) =>
                        Rule.max(170).warning(
                            'Descrições acima de 160 caracteres podem ser truncadas'
                        ),
                }),
                defineField({
                    name: 'ogImage',
                    title: 'Imagem Open Graph',
                    type: 'image',
                    description:
                        'Imagem para compartilhamento. Se não fornecida, será usada a thumbnail.',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'canonicalUrl',
                    title: 'URL Canônica',
                    type: 'url',
                }),
                defineField({
                    name: 'noindex',
                    title: 'Não indexar (noindex)',
                    type: 'boolean',
                    initialValue: false,
                }),
                defineField({
                    name: 'focusKeyword',
                    title: 'Palavra-chave Foco',
                    type: 'string',
                }),
            ],
            options: {
                collapsible: true,
                collapsed: false,
            },
        }),

        // ===== GRUPO: ORGANIZAÇÃO =====
        defineField({
            name: 'author',
            title: 'Apresentador/Autor',
            type: 'reference',
            group: 'organization',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'categories',
            title: 'Categorias',
            type: 'array',
            group: 'organization',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: (Rule) => Rule.max(3),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            group: 'organization',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'datetime',
            group: 'organization',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'updatedAt',
            title: 'Última Atualização',
            type: 'datetime',
            group: 'organization',
        }),
        defineField({
            name: 'videoType',
            title: 'Tipo de Vídeo',
            type: 'string',
            group: 'organization',
            options: {
                list: [
                    { title: '📹 Vídeo Padrão', value: 'standard' },
                    { title: '📚 Tutorial/Educativo', value: 'tutorial' },
                    { title: '🎤 Entrevista', value: 'interview' },
                    { title: '❓ Perguntas e Respostas', value: 'qa' },
                    { title: '📱 Short/Reels', value: 'short' },
                    { title: '🔴 Live/Gravação', value: 'live' },
                ],
                layout: 'radio',
            },
            initialValue: 'standard',
        }),
        defineField({
            name: 'featured',
            title: 'Destaque',
            type: 'boolean',
            group: 'organization',
            description: 'Exibir em destaque',
            initialValue: false,
        }),

        // ===== GRUPO: COMPLIANCE =====
        defineField({
            name: 'medicalCompliance',
            title: 'Compliance Médico',
            type: 'object',
            group: 'compliance',
            fields: [
                defineField({
                    name: 'reviewedByMedical',
                    title: 'Revisado por Médico',
                    type: 'boolean',
                    initialValue: false,
                }),
                defineField({
                    name: 'medicalReviewer',
                    title: 'Revisor Médico',
                    type: 'reference',
                    to: [{ type: 'author' }],
                    hidden: ({ parent }) => !parent?.reviewedByMedical,
                }),
                defineField({
                    name: 'medicalReviewDate',
                    title: 'Data da Revisão Médica',
                    type: 'date',
                    hidden: ({ parent }) => !parent?.reviewedByMedical,
                    options: { dateFormat: 'DD/MM/YYYY' },
                }),
                defineField({
                    name: 'disclaimerType',
                    title: 'Tipo de Disclaimer',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Padrão - Informativo', value: 'standard' },
                            { title: 'Educacional', value: 'educational' },
                            { title: 'Consulta Médica Necessária', value: 'consultation' },
                            { title: 'Sem Disclaimer', value: 'none' },
                        ],
                        layout: 'radio',
                    },
                    initialValue: 'standard',
                }),
            ],
            options: {
                collapsible: true,
                collapsed: true,
            },
        }),

        // ===== GRUPO: RELAÇÕES =====
        defineField({
            name: 'relatedPosts',
            title: 'Posts Relacionados',
            type: 'array',
            group: 'relations',
            of: [{ type: 'reference', to: [{ type: 'post' }] }],
            validation: (Rule) => Rule.max(5),
        }),
        defineField({
            name: 'relatedVideos',
            title: 'Vídeos Relacionados',
            type: 'array',
            group: 'relations',
            of: [{ type: 'reference', to: [{ type: 'video' }] }],
            validation: (Rule) => Rule.max(5),
        }),
    ],

    // Preview no Studio
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'thumbnail',
            duration: 'duration',
            date: 'publishedAt',
            videoType: 'videoType',
            featured: 'featured',
        },
        prepare({ title, author, media, duration, date, videoType, featured }) {
            const typeIcons: Record<string, string> = {
                standard: '📹',
                tutorial: '📚',
                interview: '🎤',
                qa: '❓',
                short: '📱',
                live: '🔴',
            }
            const icon = typeIcons[videoType || 'standard']
            const featuredStar = featured ? '⭐ ' : ''
            const formattedDate = date
                ? new Date(date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                })
                : 'Sem data'

            return {
                title: `${featuredStar}${icon} ${title}`,
                subtitle: `${duration || '??:??'} • ${author || 'Sem autor'} • ${formattedDate}`,
                media,
            }
        },
    },

    // Ordenações
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
        {
            title: 'Destaques Primeiro',
            name: 'featuredDesc',
            by: [
                { field: 'featured', direction: 'desc' },
                { field: 'publishedAt', direction: 'desc' },
            ],
        },
    ],
})
