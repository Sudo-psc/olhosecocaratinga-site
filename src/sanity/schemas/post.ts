import { defineType, defineField, defineArrayMember } from 'sanity'

/**
 * Schema: Post
 *
 * Artigos do blog otimizados para SEO e compliance médico.
 * Inclui suporte a FAQ, referências internas e campos de revisão médica.
 */
export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: () => '📝',
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
      description: 'Título do artigo (será usado como H1)',
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
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      group: 'content',
      rows: 3,
      description:
        'Breve descrição do post para listagens e SEO (150-200 caracteres ideal)',
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .max(300)
          .warning('O resumo ideal tem entre 150 e 200 caracteres'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Descreva a imagem para acessibilidade e SEO',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Legenda',
          type: 'string',
        }),
        defineField({
          name: 'credit',
          title: 'Crédito/Fonte',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      group: 'content',
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
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link Externo',
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
                    initialValue: true,
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda',
            },
            {
              name: 'credit',
              type: 'string',
              title: 'Crédito/Fonte',
            },
          ],
        }),
        // Vídeo YouTube incorporado
        defineArrayMember({
          name: 'youtubeEmbed',
          type: 'object',
          title: 'Vídeo YouTube',
          icon: () => '▶️',
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
            select: { url: 'url', caption: 'caption' },
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
          icon: () => '💡',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Tipo',
              options: {
                list: [
                  { title: 'ℹ️ Informação', value: 'info' },
                  { title: '💡 Dica', value: 'tip' },
                  { title: '⚠️ Aviso', value: 'warning' },
                  { title: '❗ Importante', value: 'important' },
                  { title: '🏥 Consulte um Médico', value: 'medical' },
                ],
                layout: 'radio',
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
            select: { type: 'type' },
            prepare({ type }) {
              const labels: Record<string, string> = {
                info: 'ℹ️ Informação',
                tip: '💡 Dica',
                warning: '⚠️ Aviso',
                important: '❗ Importante',
                medical: '🏥 Consulte um Médico',
              }
              return { title: labels[type] || 'Destaque' }
            },
          },
        }),
        // CTA Button
        defineArrayMember({
          name: 'ctaButton',
          type: 'object',
          title: 'Botão CTA',
          icon: () => '🔘',
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
            select: { title: 'text', style: 'style' },
            prepare({ title, style }) {
              return { title: title || 'Botão', subtitle: `Estilo: ${style}` }
            },
          },
        }),
      ],
    }),
    // Tempo de leitura
    defineField({
      name: 'readingTime',
      title: 'Tempo de Leitura',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'minutes',
          title: 'Minutos',
          type: 'number',
          description: 'Tempo estimado de leitura em minutos',
          validation: (Rule) => Rule.min(1).max(60),
        }),
        defineField({
          name: 'autoCalculate',
          title: 'Calcular Automaticamente',
          type: 'boolean',
          description: 'Se marcado, o tempo será calculado automaticamente (~200 palavras/min)',
          initialValue: true,
        }),
      ],
    }),
    // FAQ
    defineField({
      name: 'faq',
      title: 'Perguntas Frequentes (FAQ)',
      type: 'array',
      group: 'content',
      description: 'Perguntas frequentes relacionadas a este artigo (gera Schema FAQ para SEO)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Pergunta',
              type: 'string',
              validation: (Rule) => Rule.required().min(10).max(200),
            },
            {
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
                        fields: [{ name: 'href', type: 'url', title: 'URL' }],
                      },
                    ],
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'question' },
            prepare({ title }) {
              return { title: title || 'Pergunta sem título', subtitle: 'FAQ' }
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
          description:
            'Título para mecanismos de busca (50-60 caracteres). Deixe vazio para usar o título do post.',
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
            Rule.max(170).warning('Descrições acima de 160 caracteres podem ser truncadas'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Imagem Open Graph',
          type: 'image',
          description: 'Imagem para compartilhamento em redes sociais (1200x630px recomendado)',
          options: { hotspot: true },
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'URL Canônica',
          type: 'url',
          description: 'URL canônica se publicado originalmente em outro lugar',
        }),
        defineField({
          name: 'noindex',
          title: 'Não indexar (noindex)',
          type: 'boolean',
          description: 'Impedir que apareça nos mecanismos de busca',
          initialValue: false,
        }),
        defineField({
          name: 'focusKeyword',
          title: 'Palavra-chave Foco',
          type: 'string',
          description: 'Palavra-chave principal do artigo para otimização',
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
      title: 'Autor',
      type: 'reference',
      group: 'organization',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      group: 'organization',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'organization',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      description: 'Tags para categorização mais específica',
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
      description: 'Data da última atualização significativa do conteúdo',
    }),
    defineField({
      name: 'postType',
      title: 'Tipo de Post',
      type: 'string',
      group: 'organization',
      options: {
        list: [
          { title: '📄 Artigo Padrão', value: 'standard' },
          { title: '📚 Artigo Pilar (Guia Completo)', value: 'pillar' },
          { title: '📰 Notícia', value: 'news' },
          { title: '📋 Lista', value: 'listicle' },
          { title: '❓ FAQ Compilado', value: 'faq' },
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
      description: 'Exibir em destaque na home ou topo das listagens',
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
          description: 'Este conteúdo foi revisado por um profissional médico?',
          initialValue: false,
        }),
        defineField({
          name: 'medicalReviewer',
          title: 'Revisor Médico',
          type: 'reference',
          to: [{ type: 'author' }],
          description: 'Médico responsável pela revisão',
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
        defineField({
          name: 'customDisclaimer',
          title: 'Disclaimer Personalizado',
          type: 'text',
          rows: 2,
          description: 'Aviso específico para este conteúdo (opcional)',
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
      description: 'Artigos relacionados para exibição no final do post',
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'relatedVideos',
      title: 'Vídeos Relacionados',
      type: 'array',
      group: 'relations',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      description: 'Vídeos relacionados para exibição',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'references',
      title: 'Referências Bibliográficas',
      type: 'array',
      group: 'relations',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Título/Descrição' },
            { name: 'url', type: 'url', title: 'URL (opcional)' },
            { name: 'source', type: 'string', title: 'Fonte/Publicação' },
            { name: 'year', type: 'number', title: 'Ano' },
          ],
          preview: {
            select: { title: 'title', source: 'source', year: 'year' },
            prepare({ title, source, year }) {
              return {
                title: title || 'Referência sem título',
                subtitle: [source, year].filter(Boolean).join(', '),
              }
            },
          },
        },
      ],
      description: 'Referências científicas e fontes citadas',
    }),
  ],

  // Preview no Studio
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      date: 'publishedAt',
      postType: 'postType',
      featured: 'featured',
    },
    prepare({ title, author, media, date, postType, featured }) {
      const typeIcons: Record<string, string> = {
        standard: '📄',
        pillar: '📚',
        news: '📰',
        listicle: '📋',
        faq: '❓',
      }
      const icon = typeIcons[postType || 'standard']
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
        subtitle: `${author || 'Sem autor'} • ${formattedDate}`,
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
