export interface LocalVideo {
    id: string
    title: string
    slug: string
    description: string
    fileName: string
    duration: string
    uploadDate: string
}

export const localVideos: LocalVideo[] = [
    {
        id: '1',
        title: "Causas e Tratamento do Olho Seco",
        slug: "causas-e-tratamento-olho-seco",
        description: "Uma visão geral sobre as causas da síndrome do olho seco e as opções de tratamento disponíveis.",
        fileName: "Dry Eye Causes and Treatment.mp4",
        duration: "PT5M",
        uploadDate: "2024-01-01"
    },
    {
        id: '2',
        title: "Tratamento E-EYE IRPL para DGM",
        slug: "tratamento-e-eye-irpl-mgd",
        description: "Conheça a tecnologia de Luz Pulsada Intensa Regulada (IRPL) para tratamento da Disfunção das Glândulas de Meibomius.",
        fileName: "E-EYE IRPL® - For the Treatment of Dry Eyes due to Meibomian Gland Dysfunction (MGD).mp4",
        duration: "PT3M",
        uploadDate: "2024-01-02"
    },
    {
        id: '3',
        title: "Como funciona o tratamento E-EYE",
        slug: "como-funciona-tratamento-e-eye",
        description: "Demonstração do procedimento E-EYE para tratamento de olho seco evaporativo.",
        fileName: "E-EYE treatment.mp4",
        duration: "PT2M",
        uploadDate: "2024-01-03"
    },
    {
        id: '4',
        title: "E-Eye para Tratamento de DGM",
        slug: "e-eye-tratamento-dgm",
        description: "Detalhes sobre a aplicação do E-Eye em casos de Disfunção das Glândulas de Meibomius.",
        fileName: "E-Eye tratamento DGM.mp4",
        duration: "PT4M",
        uploadDate: "2024-01-04"
    },
    {
        id: '5',
        title: "Disfunção das Glândulas de Meibomius",
        slug: "disfuncao-glandulas-meibomius",
        description: "Entenda o que é a DGM e como ela afeta a qualidade da sua lágrima.",
        fileName: "Meibomian Gland Dysfunction - Dry Eye Treatment.mp4",
        duration: "PT3M30S",
        uploadDate: "2024-01-05"
    },
    {
        id: '6',
        title: "Relação entre DGM e Olho Seco",
        slug: "relacao-dgm-olho-seco",
        description: "Explicação aprofundada sobre como a disfunção glandular leva ao olho seco.",
        fileName: "Meibomian Gland Dysfunction And Dry Eye (imr8ZOpU_a8).mp4",
        duration: "PT6M",
        uploadDate: "2024-01-06"
    },
    {
        id: '7',
        title: "Expressão das Glândulas de Meibomius",
        slug: "expressao-glandulas-meibomius",
        description: "Procedimento clínico de expressão glandular para desobstrução e alívio de sintomas.",
        fileName: "Meibomian Gland Expression for MGD | The Dry Eye Clinic at Peter Ivins Eye Care.mp4",
        duration: "PT2M45S",
        uploadDate: "2024-01-07"
    },
    {
        id: '8',
        title: "Sondagem de Canais Lacrimais",
        slug: "sondagem-canais-lacrimais",
        description: "Procedimento para abertura de canais lacrimais bloqueados.",
        fileName: "Probing to Open Blocked Tear Ducts (lCj0RrBbzts).mp4",
        duration: "PT4M15S",
        uploadDate: "2024-01-08"
    },
    {
        id: '9',
        title: "Plugs Lacrimais (Punctal Plugs)",
        slug: "plugs-lacrimais",
        description: "Como funcionam os plugs lacrimais para reter a lágrima nos olhos.",
        fileName: "Punctal Plugs (878yyEfBVaM).mp4",
        duration: "PT3M",
        uploadDate: "2024-01-09"
    }
]
