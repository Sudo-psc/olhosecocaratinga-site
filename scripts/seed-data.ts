/**
 * Dados de Seed - Conteúdo sobre Olho Seco
 *
 * Conteúdo otimizado para SEO local (Caratinga/MG) e compliance médico.
 * Todos os artigos seguem as diretrizes E-E-A-T do Google para conteúdo médico.
 */

export const seedData = {
    // ===== AUTOR =====
    author: {
        name: 'Dr. Philipe Saraiva Cruz',
        slug: {
            _type: 'slug',
            current: 'dr-philipe-saraiva-cruz',
        },
        role: 'Médico Oftalmologista',
        credentials: {
            crm: 'CRM-MG 69.870',
            specialty: 'Oftalmologia',
            rqe: '',
        },
        bio: [
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        text: 'Médico oftalmologista especializado em doenças da superfície ocular e olho seco. Formado pela Universidade Federal de Minas Gerais (UFMG), com especialização em córnea e doenças externas oculares.',
                    },
                ],
            },
        ],
        social: {
            instagram: '@saraivavisioncare',
            linkedin: 'dr-philipe-saraiva-cruz',
        },
    },

    // ===== CATEGORIAS =====
    categories: [
        {
            title: 'Sintomas e Diagnóstico',
            slug: {
                _type: 'slug',
                current: 'sintomas-e-diagnostico',
            },
            description:
                'Sintomas do olho seco, como identificar e diagnóstico profissional',
            icon: '🔍',
            color: '#3B82F6',
        },
        {
            title: 'Tratamentos',
            slug: {
                _type: 'slug',
                current: 'tratamentos',
            },
            description: 'Opções de tratamento para síndrome do olho seco',
            icon: '💊',
            color: '#10B981',
        },
        {
            title: 'Causas e Fatores de Risco',
            slug: {
                _type: 'slug',
                current: 'causas-e-fatores-de-risco',
            },
            description: 'O que causa olho seco e quem está em risco',
            icon: '⚠️',
            color: '#F59E0B',
        },
        {
            title: 'Prevenção e Cuidados',
            slug: {
                _type: 'slug',
                current: 'prevencao-e-cuidados',
            },
            description: 'Como prevenir e cuidar do olho seco no dia a dia',
            icon: '🛡️',
            color: '#8B5CF6',
        },
        {
            title: 'Olho Seco em Caratinga',
            slug: {
                _type: 'slug',
                current: 'olho-seco-caratinga',
            },
            description: 'Informações específicas sobre tratamento de olho seco em Caratinga, MG',
            icon: '📍',
            color: '#EF4444',
        },
    ],

    // ===== POSTS =====
    posts: [
        {
            title: 'O Que é Olho Seco? Entenda a Síndrome do Olho Seco',
            slug: {
                _type: 'slug',
                current: 'o-que-e-olho-seco',
            },
            excerpt:
                'Descubra o que é a síndrome do olho seco, seus principais sintomas, causas e como identificar se você tem essa condição comum que afeta milhões de brasileiros.',
            categoryRefs: [0], // Sintomas e Diagnóstico
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'O Que é a Síndrome do Olho Seco?' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'A síndrome do olho seco, também conhecida como ceratoconjuntivite seca, é uma condição crônica que ocorre quando os olhos não produzem lágrimas suficientes ou quando a qualidade das lágrimas é inadequada para manter a superfície ocular saudável.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'As lágrimas são essenciais para a saúde ocular, pois lubrificam os olhos, removem partículas estranhas, fornecem nutrientes para a córnea e protegem contra infecções. Quando há um desequilíbrio na produção ou qualidade das lágrimas, diversos sintomas podem surgir.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Principais Sintomas do Olho Seco' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        { _type: 'span', text: 'Os sintomas mais comuns incluem:' },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        { _type: 'span', text: 'Sensação de areia ou corpo estranho nos olhos' },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Ardência ou queimação ocular' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Vermelhidão persistente' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Lacrimejamento excessivo (resposta paradoxal do olho)',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Visão embaçada ou flutuante' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Fadiga ocular' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        { _type: 'span', text: 'Dificuldade para usar lentes de contato' },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Quando Procurar um Oftalmologista?' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Se você experimenta sintomas persistentes de olho seco por mais de uma semana, é importante consultar um oftalmologista em Caratinga para um diagnóstico preciso e tratamento adequado.',
                        },
                    ],
                },
            ],
            seo: {
                metaTitle: 'O Que é Olho Seco? Sintomas e Causas | Caratinga MG',
                metaDescription:
                    'Entenda o que é olho seco, sintomas, causas e tratamentos. Clínica especializada em olho seco em Caratinga, MG. Agende sua consulta.',
                focusKeyword: 'olho seco',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional.',
            },
        },
        {
            title: 'Ar-Condicionado e Olho Seco: Como o Clima de Caratinga Afeta Seus Olhos',
            slug: {
                _type: 'slug',
                current: 'ar-condicionado-olho-seco-caratinga',
            },
            excerpt:
                'Descubra como o ar-condicionado e o clima seco de Caratinga podem causar ou agravar a síndrome do olho seco. Dicas práticas para proteger seus olhos.',
            categoryRefs: [2, 4], // Causas e Fatores de Risco, Olho Seco em Caratinga
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [
                        { _type: 'span', text: 'Por Que o Ar-Condicionado Causa Olho Seco?' },
                    ],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'O ar-condicionado reduz significativamente a umidade do ambiente, o que aumenta a evaporação das lágrimas e resseca a superfície ocular. Em Caratinga, onde o clima já é naturalmente seco em certas épocas do ano, o uso intensivo de ar-condicionado pode agravar ainda mais os sintomas do olho seco.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'O Clima de Caratinga e Seus Olhos' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Caratinga, localizada na Zona da Mata mineira, apresenta períodos de baixa umidade, especialmente entre maio e setembro. Durante esses meses, é comum observar um aumento nos casos de olho seco na população local.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Fatores Climáticos que Afetam a Saúde Ocular:' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Baixa umidade relativa do ar (abaixo de 40%)' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Vento seco característico da região' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Poeira e poluição urbana' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Exposição solar intensa' }],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Como Se Proteger' }],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [
                        {
                            _type: 'span',
                            text: 'Use umidificadores de ar em ambientes climatizados',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [
                        { _type: 'span', text: 'Evite direcionar o ar-condicionado diretamente no rosto' },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [
                        { _type: 'span', text: 'Use colírios lubrificantes prescritos por oftalmologista' },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [
                        { _type: 'span', text: 'Faça pausas regulares durante o trabalho em telas' },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [{ _type: 'span', text: 'Use óculos de sol com proteção UV' }],
                },
            ],
            seo: {
                metaTitle: 'Ar-Condicionado e Olho Seco em Caratinga | Causas e Prevenção',
                metaDescription:
                    'Como o ar-condicionado e clima seco de Caratinga afetam seus olhos. Tratamento especializado para olho seco. Agende consulta.',
                focusKeyword: 'ar-condicionado olho seco',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional.',
            },
        },
        {
            title: 'Colírio para Olho Seco: Qual é o Melhor Tratamento?',
            slug: {
                _type: 'slug',
                current: 'colirio-olho-seco-melhor-tratamento',
            },
            excerpt:
                'Conheça os tipos de colírios para olho seco, diferenças entre lágrimas artificiais e quando procurar tratamento médico em Caratinga.',
            categoryRefs: [1], // Tratamentos
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Tipos de Colírios para Olho Seco' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Existem diversos tipos de colírios para tratamento do olho seco, cada um com indicações específicas:',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '1. Lágrimas Artificiais Sem Conservantes' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Recomendadas para uso frequente (mais de 4x ao dia), pois não contêm conservantes que podem irritar os olhos. São ideais para casos moderados a graves de olho seco.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '2. Lágrimas Artificiais Com Conservantes' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Adequadas para uso ocasional (até 4x ao dia). São mais econômicas, mas podem causar irritação em casos de uso frequente.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '3. Géis e Pomadas Oftálmicas' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Têm maior viscosidade e permanecem mais tempo nos olhos. Geralmente usados antes de dormir para proteção noturna.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [
                        { _type: 'span', text: '4. Colírios Anti-inflamatórios e Imunomoduladores' },
                    ],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Prescritos para casos mais graves, tratam a inflamação crônica associada ao olho seco. Requerem prescrição médica.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Quando Procurar um Oftalmologista' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'A automedicação pode mascarar sintomas e atrasar o diagnóstico correto. Procure um oftalmologista em Caratinga se:',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Os sintomas persistirem mesmo com uso de lágrimas artificiais',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Houver piora dos sintomas' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Ocorrer dor ocular intensa' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Houver alteração na visão' }],
                },
            ],
            seo: {
                metaTitle: 'Melhor Colírio para Olho Seco | Tratamento em Caratinga MG',
                metaDescription:
                    'Qual o melhor colírio para olho seco? Conheça tipos de tratamento e quando procurar oftalmologista em Caratinga. Agende sua consulta.',
                focusKeyword: 'colírio olho seco',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional. Nunca se automedique.',
            },
        },
        {
            title: 'Telas de Computador e Celular Causam Olho Seco? Entenda a Relação',
            slug: {
                _type: 'slug',
                current: 'telas-computador-celular-olho-seco',
            },
            excerpt:
                'Descubra como o uso prolongado de telas afeta a saúde dos seus olhos e aprenda a regra 20-20-20 para prevenir o olho seco digital.',
            categoryRefs: [2, 3], // Causas e Fatores de Risco, Prevenção e Cuidados
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Síndrome Visual do Computador' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'O uso prolongado de dispositivos eletrônicos está diretamente relacionado ao aumento de casos de olho seco. Quando olhamos para telas, a frequência de piscadas diminui de 15-20 vezes por minuto para apenas 5-7 vezes, reduzindo drasticamente a lubrificação ocular.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Por Que as Telas Causam Olho Seco?' }],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [
                        {
                            _type: 'span',
                            text: 'Redução da frequência de piscadas (até 66% menos)',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [{ _type: 'span', text: 'Piscadas incompletas (não cobrem toda a superfície ocular)' }],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [{ _type: 'span', text: 'Exposição à luz azul de alta energia' }],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [{ _type: 'span', text: 'Postura inadequada causando maior abertura palpebral' }],
                },
                {
                    _type: 'block',
                    listItem: 'number',
                    children: [{ _type: 'span', text: 'Ambientes climatizados com baixa umidade' }],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'A Regra 20-20-20' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Uma técnica simples e eficaz para prevenir o olho seco digital:',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'A cada 20 minutos de uso de tela' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Olhe para algo a 20 pés de distância (6 metros)' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Por pelo menos 20 segundos' }],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Outras Dicas de Prevenção' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Ajuste o brilho da tela para níveis confortáveis' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Posicione o monitor 50-60cm dos olhos' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Use filtros de luz azul ou óculos com proteção' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Aumente o tamanho da fonte para reduzir esforço visual' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Pisque conscientemente com mais frequência' }],
                },
            ],
            seo: {
                metaTitle: 'Telas Causam Olho Seco? Regra 20-20-20 e Prevenção | Caratinga',
                metaDescription:
                    'Uso de computador e celular causa olho seco? Aprenda a regra 20-20-20 e como prevenir. Oftalmologista em Caratinga. Agende consulta.',
                focusKeyword: 'telas olho seco',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional.',
            },
        },
        {
            title: 'Olho Seco em Mulheres: Menopausa e Alterações Hormonais',
            slug: {
                _type: 'slug',
                current: 'olho-seco-mulheres-menopausa-hormonal',
            },
            excerpt:
                'Entenda por que mulheres são mais afetadas pelo olho seco, especialmente durante a menopausa. Causas hormonais e opções de tratamento.',
            categoryRefs: [2, 1], // Causas e Fatores de Risco, Tratamentos
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Por Que Mulheres Têm Mais Olho Seco?' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Estudos mostram que mulheres têm 50-100% mais chances de desenvolver olho seco do que homens, principalmente devido a fatores hormonais. Os hormônios femininos (estrogênio e progesterona) desempenham papel importante na saúde da superfície ocular e na produção de lágrimas.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Olho Seco e Menopausa' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Durante a menopausa, a queda nos níveis de estrogênio afeta diretamente:',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Produção e qualidade das lágrimas' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Função das glândulas de Meibômio (produtoras de óleo nas lágrimas)' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Inflamação crônica da superfície ocular' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Espessura e elasticidade das pálpebras' }],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Outros Fatores Hormonais' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Gravidez e pós-parto' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Uso de contraceptivos orais' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Terapia de reposição hormonal (TRH)' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Síndrome dos ovários policísticos (SOP)' }],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Tratamentos Específicos para Mulheres' }],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '1. Lágrimas Artificiais' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Uso regular conforme prescrição médica, preferencialmente sem conservantes.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '2. Ômega-3' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Suplementação com ômega-3 tem mostrado benefícios na redução da inflamação e melhora da qualidade das lágrimas.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '3. Terapia Hormonal' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Em alguns casos, ajustes na terapia de reposição hormonal podem melhorar os sintomas. Sempre discuta com seu ginecologista e oftalmologista.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '4. Tratamentos Avançados' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Para casos mais graves, existem opções como colírios anti-inflamatórios, plugs de ponto lacrimal e luz pulsada intensa (IPL).',
                        },
                    ],
                },
            ],
            seo: {
                metaTitle: 'Olho Seco na Menopausa: Causas Hormonais e Tratamento | Caratinga',
                metaDescription:
                    'Por que mulheres têm mais olho seco? Relação entre menopausa, hormônios e saúde ocular. Tratamento especializado em Caratinga. Agende consulta.',
                focusKeyword: 'olho seco menopausa',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional.',
            },
        },
        // Continua nos próximos posts...
        {
            title: 'Lentes de Contato e Olho Seco: Como Usar com Segurança',
            slug: {
                _type: 'slug',
                current: 'lentes-contato-olho-seco-seguranca',
            },
            excerpt:
                'Usar lentes de contato piora o olho seco? Descubra como usar lentes com segurança, quando evitar e quais cuidados tomar para proteger seus olhos.',
            categoryRefs: [2, 3], // Causas e Fatores de Risco, Prevenção e Cuidados
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Lentes de Contato Causam Olho Seco?' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'O uso de lentes de contato é um dos principais fatores de risco para desenvolvimento ou piora do olho seco. Aproximadamente 50% dos usuários de lentes relatam sintomas de desconforto relacionados ao ressecamento ocular.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Por Que as Lentes Agravam o Olho Seco?' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Reduzem a oxigenação da córnea',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Interferem na distribuição do filme lacrimal',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Acumulam depósitos proteicos que causam irritação',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Podem causar microtraumas na superfície ocular',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Como Usar Lentes com Segurança' }],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '1. Escolha o Tipo Adequado' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Lentes descartáveis diárias são as mais recomendadas para quem tem olho seco, pois eliminam o acúmulo de depósitos.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '2. Respeite os Horários de Uso' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Nunca durma com lentes não aprovadas para uso noturno. Limite o uso a 8-10 horas diárias.',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '3. Higienização Adequada' }],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Lave as mãos antes de manusear as lentes',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Use sempre solução nova para limpeza e armazenamento',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Substitua o estojo a cada 3 meses',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '4. Use Colírios Específicos' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Utilize apenas colírios próprios para uso com lentes de contato (sem conservantes).',
                        },
                    ],
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: 'Sinais de Alerta' }],
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [
                        {
                            _type: 'span',
                            text: 'Pare de usar as lentes imediatamente e procure um oftalmologista se apresentar:',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Dor ocular intensa',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Vermelhidão severa',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Secreção purulenta',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Visão embaçada persistente',
                        },
                    ],
                },
                {
                    _type: 'block',
                    listItem: 'bullet',
                    children: [
                        {
                            _type: 'span',
                            text: 'Sensibilidade à luz',
                        },
                    ],
                },
            ],
            seo: {
                metaTitle: 'Lentes de Contato e Olho Seco: Uso Seguro | Oftalmologista Caratinga',
                metaDescription:
                    'Como usar lentes de contato com olho seco? Cuidados, sinais de alerta e quando procurar oftalmologista em Caratinga. Agende consulta.',
                focusKeyword: 'lentes contato olho seco',
            },
            medicalCompliance: {
                lastReviewedDate: new Date().toISOString(),
                reviewedBy: 'Dr. Philipe Saraiva Cruz - CRM-MG 69.870',
                disclaimer:
                    'Este conteúdo é apenas informativo e não substitui a consulta médica profissional.',
            },
        },
    ],
}
