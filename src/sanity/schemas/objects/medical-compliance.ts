import { defineType, defineField } from 'sanity'

/**
 * Campos de Compliance Médico
 * Obrigatórios para conteúdo de saúde
 */
export default defineType({
    name: 'medicalCompliance',
    title: 'Compliance Médico',
    type: 'object',
    fields: [
        defineField({
            name: 'reviewedByMedical',
            title: 'Revisado por Médico',
            type: 'boolean',
            description: 'Este conteúdo foi revisado por um profissional médico?',
            initialValue: false,
            validation: (Rule) =>
                Rule.custom((_value, _context) => {
                    // Em produção, pode exigir que seja true antes de publicar
                    return true
                }),
        }),
        defineField({
            name: 'medicalReviewer',
            title: 'Revisor Médico',
            type: 'reference',
            to: [{ type: 'author' }],
            description: 'Médico responsável pela revisão do conteúdo',
            hidden: ({ parent }) => !parent?.reviewedByMedical,
        }),
        defineField({
            name: 'medicalReviewDate',
            title: 'Data da Revisão Médica',
            type: 'date',
            description: 'Quando o conteúdo foi revisado pela última vez',
            hidden: ({ parent }) => !parent?.reviewedByMedical,
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
        }),
        defineField({
            name: 'disclaimerType',
            title: 'Tipo de Disclaimer',
            type: 'string',
            description: 'Selecione o tipo de aviso legal a ser exibido',
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
            description: 'Se necessário, adicione um aviso específico para este conteúdo',
        }),
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
