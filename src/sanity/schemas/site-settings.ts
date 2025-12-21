import { defineType, defineField } from 'sanity'

/**
 * Schema: Site Settings (Singleton)
 *
 * Configurações globais do site incluindo:
 * - Informações básicas do site
 * - Dados da clínica para Local SEO (NAP)
 * - Redes sociais
 * - SEO padrão
 * - Disclaimers médicos
 *
 * Clínica: Saraiva Vision Care LTDA
 * CNPJ: 53.864.119/0001-79
 * Endereço: Rua Catarina Maria Passos, 97 – Santa Zita, Caratinga/MG
 * Responsável: Dr. Philipe Saraiva Cruz – CRM-MG 69.870
 */
export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  icon: () => '⚙️',
  groups: [
    { name: 'general', title: 'Geral', default: true },
    { name: 'clinic', title: 'Clínica (Local SEO)' },
    { name: 'contact', title: 'Contato' },
    { name: 'social', title: 'Redes Sociais' },
    { name: 'seo', title: 'SEO' },
    { name: 'compliance', title: 'Compliance' },
  ],
  fields: [
    // ===== GRUPO: GERAL =====
    defineField({
      name: 'siteTitle',
      title: 'Título do Site',
      type: 'string',
      group: 'general',
      initialValue: 'Olhos Secos Caratinga | Dr. Philipe Saraiva',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição do Site',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'Descrição padrão para SEO e compartilhamentos',
      initialValue:
        'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870. Diagnóstico preciso, tratamentos modernos e cuidado personalizado.',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          initialValue: 'Saraiva Vision Care - Clínica Oftalmológica',
        },
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'general',
      description: 'Ícone do site (32x32 ou 64x64 pixels)',
    }),

    // ===== GRUPO: CLÍNICA (LOCAL SEO) =====
    defineField({
      name: 'clinic',
      title: 'Informações da Clínica',
      type: 'object',
      group: 'clinic',
      description: 'Dados NAP (Name, Address, Phone) para Local SEO',
      fields: [
        defineField({
          name: 'name',
          title: 'Nome da Clínica',
          type: 'string',
          initialValue: 'Saraiva Vision Care LTDA',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cnpj',
          title: 'CNPJ',
          type: 'string',
          initialValue: '53.864.119/0001-79',
        }),
        defineField({
          name: 'legalName',
          title: 'Razão Social',
          type: 'string',
          initialValue: 'Saraiva Vision Care LTDA',
        }),
        defineField({
          name: 'address',
          title: 'Endereço',
          type: 'object',
          fields: [
            {
              name: 'street',
              title: 'Rua/Logradouro',
              type: 'string',
              initialValue: 'Rua Catarina Maria Passos',
            },
            {
              name: 'number',
              title: 'Número',
              type: 'string',
              initialValue: '97',
            },
            {
              name: 'complement',
              title: 'Complemento',
              type: 'string',
            },
            {
              name: 'neighborhood',
              title: 'Bairro',
              type: 'string',
              initialValue: 'Santa Zita',
            },
            {
              name: 'city',
              title: 'Cidade',
              type: 'string',
              initialValue: 'Caratinga',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'state',
              title: 'Estado (UF)',
              type: 'string',
              initialValue: 'MG',
              validation: (Rule) => Rule.required().length(2),
            },
            {
              name: 'postalCode',
              title: 'CEP',
              type: 'string',
              initialValue: '35300-000',
            },
            {
              name: 'country',
              title: 'País',
              type: 'string',
              initialValue: 'Brasil',
            },
          ],
        }),
        defineField({
          name: 'geo',
          title: 'Coordenadas Geográficas',
          type: 'object',
          description: 'Para Google Maps e Schema LocalBusiness',
          fields: [
            {
              name: 'latitude',
              title: 'Latitude',
              type: 'number',
              // Caratinga-MG aproximado
              initialValue: -19.7883,
            },
            {
              name: 'longitude',
              title: 'Longitude',
              type: 'number',
              initialValue: -42.1394,
            },
          ],
        }),
        defineField({
          name: 'googleMapsUrl',
          title: 'URL do Google Maps',
          type: 'url',
          description: 'Link para a localização no Google Maps',
        }),
        defineField({
          name: 'googlePlaceId',
          title: 'Google Place ID',
          type: 'string',
          description: 'ID do local no Google (para reviews e widgets)',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: 'medicalDirector',
      title: 'Responsável Técnico',
      type: 'object',
      group: 'clinic',
      fields: [
        {
          name: 'name',
          title: 'Nome Completo',
          type: 'string',
          initialValue: 'Dr. Philipe Saraiva Cruz',
        },
        {
          name: 'crm',
          title: 'CRM',
          type: 'string',
          initialValue: 'CRM-MG 69.870',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'specialty',
          title: 'Especialidade',
          type: 'string',
          initialValue: 'Oftalmologia',
        },
        {
          name: 'rqe',
          title: 'RQE',
          type: 'string',
          description: 'Registro de Qualificação de Especialista',
        },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Horário de Funcionamento',
      type: 'array',
      group: 'clinic',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Dias',
              type: 'string',
              options: {
                list: [
                  { title: 'Segunda a Sexta', value: 'Mo-Fr' },
                  { title: 'Segunda a Sábado', value: 'Mo-Sa' },
                  { title: 'Segunda', value: 'Mo' },
                  { title: 'Terça', value: 'Tu' },
                  { title: 'Quarta', value: 'We' },
                  { title: 'Quinta', value: 'Th' },
                  { title: 'Sexta', value: 'Fr' },
                  { title: 'Sábado', value: 'Sa' },
                  { title: 'Domingo', value: 'Su' },
                ],
              },
            },
            {
              name: 'openTime',
              title: 'Abertura',
              type: 'string',
              description: 'Formato: HH:MM (ex: 08:00)',
            },
            {
              name: 'closeTime',
              title: 'Fechamento',
              type: 'string',
              description: 'Formato: HH:MM (ex: 18:00)',
            },
          ],
          preview: {
            select: { days: 'days', open: 'openTime', close: 'closeTime' },
            prepare({ days, open, close }) {
              return { title: `${days}: ${open} - ${close}` }
            },
          },
        },
      ],
    }),

    // ===== GRUPO: CONTATO =====
    defineField({
      name: 'contact',
      title: 'Informações de Contato',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'email',
          title: 'E-mail Principal',
          type: 'string',
          initialValue: 'contato@saraivavision.com.br',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'phone',
          title: 'Telefone Principal',
          type: 'string',
          initialValue: '+55 33 99860-1427',
          description: 'Formato: +55 XX XXXXX-XXXX',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Número',
              type: 'string',
              initialValue: '+553399898026',
              description: 'Somente números com código do país',
            },
            {
              name: 'url',
              title: 'Link WhatsApp',
              type: 'url',
              initialValue: 'https://wa.me/+553399898026',
            },
            {
              name: 'defaultMessage',
              title: 'Mensagem Padrão',
              type: 'string',
              initialValue: 'Olá! Gostaria de agendar uma consulta.',
            },
          ],
        }),
        defineField({
          name: 'appointmentUrl',
          title: 'URL de Agendamento',
          type: 'url',
          initialValue: 'https://saraivavision.com.br/agendamento',
          description: 'Link direto para agendamento online',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ===== GRUPO: REDES SOCIAIS =====
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'object',
      group: 'social',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
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
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'tiktok',
          title: 'TikTok',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),

    // ===== GRUPO: SEO =====
    defineField({
      name: 'defaultSeo',
      title: 'SEO Padrão',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'titleTemplate',
          title: 'Template de Título',
          type: 'string',
          initialValue: '%s | Olhos Secos Caratinga',
          description: 'Use %s para o título da página',
        }),
        defineField({
          name: 'defaultTitle',
          title: 'Título Padrão',
          type: 'string',
          initialValue:
            'Tratamento de Olho Seco em Caratinga/MG | Dr. Philipe Saraiva',
        }),
        defineField({
          name: 'defaultDescription',
          title: 'Descrição Padrão',
          type: 'text',
          rows: 3,
          initialValue:
            'Clínica especializada em diagnóstico e tratamento de síndrome do olho seco em Caratinga, Minas Gerais. Agende sua consulta com Dr. Philipe Saraiva Cruz - CRM-MG 69.870.',
        }),
        defineField({
          name: 'defaultOgImage',
          title: 'Imagem Open Graph Padrão',
          type: 'image',
          description: 'Imagem padrão para compartilhamentos (1200x630px)',
          options: { hotspot: true },
        }),
        defineField({
          name: 'keywords',
          title: 'Palavras-chave Globais',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
          initialValue: [
            'olho seco',
            'síndrome do olho seco',
            'oftalmologista caratinga',
            'tratamento olho seco',
            'olhos secos tratamento',
            'caratinga mg',
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: 'localSeo',
      title: 'SEO Local',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'primaryCity',
          title: 'Cidade Principal',
          type: 'string',
          initialValue: 'Caratinga',
        }),
        defineField({
          name: 'primaryRegion',
          title: 'Região/Estado',
          type: 'string',
          initialValue: 'Minas Gerais',
        }),
        defineField({
          name: 'serviceArea',
          title: 'Área de Atendimento',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
          description: 'Cidades e regiões atendidas',
          initialValue: [
            'Caratinga',
            'Manhuaçu',
            'Inhapim',
            'Ubaporanga',
            'Piedade de Caratinga',
            'Vargem Alegre',
            'Vale do Rio Doce',
          ],
        }),
        defineField({
          name: 'businessType',
          title: 'Tipo de Negócio (Schema)',
          type: 'string',
          initialValue: 'MedicalClinic',
          options: {
            list: [
              { title: 'Clínica Médica', value: 'MedicalClinic' },
              { title: 'Médico', value: 'Physician' },
              { title: 'Hospital', value: 'Hospital' },
              { title: 'Serviço de Saúde', value: 'HealthAndBeautyBusiness' },
            ],
          },
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),

    // ===== GRUPO: COMPLIANCE =====
    defineField({
      name: 'medicalDisclaimers',
      title: 'Disclaimers Médicos',
      type: 'object',
      group: 'compliance',
      fields: [
        defineField({
          name: 'standardDisclaimer',
          title: 'Disclaimer Padrão',
          type: 'text',
          rows: 3,
          initialValue:
            'As informações contidas neste site têm caráter informativo e educacional. Não substituem a consulta e avaliação médica presencial. Cada paciente é único e requer avaliação individualizada. Em caso de dúvidas ou sintomas, consulte um oftalmologista.',
        }),
        defineField({
          name: 'educationalDisclaimer',
          title: 'Disclaimer Educacional',
          type: 'text',
          rows: 3,
          initialValue:
            'Este conteúdo tem finalidade exclusivamente educativa. As informações apresentadas são baseadas em evidências científicas, mas não devem ser utilizadas para autodiagnóstico ou automedicação.',
        }),
        defineField({
          name: 'consultationDisclaimer',
          title: 'Disclaimer de Consulta',
          type: 'text',
          rows: 3,
          initialValue:
            'Para diagnóstico preciso e tratamento adequado, é imprescindível a consulta com um médico oftalmologista. Agende sua avaliação na Saraiva Vision Care.',
        }),
        defineField({
          name: 'showDisclaimerOnAllPosts',
          title: 'Exibir Disclaimer em Todos os Posts',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'privacyPolicyUrl',
      title: 'URL da Política de Privacidade',
      type: 'url',
      group: 'compliance',
    }),
    defineField({
      name: 'termsOfUseUrl',
      title: 'URL dos Termos de Uso',
      type: 'url',
      group: 'compliance',
    }),
  ],

  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Configurações do Site',
        subtitle: '⚙️ Configurações Globais',
        media,
      }
    },
  },
})
