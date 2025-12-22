import { Metadata } from 'next'
import Link from 'next/link'
import { StructuredData } from '@/components/StructuredData'
import { generateLocalBusinessSchema, generateBreadcrumbSchema, BUSINESS_DATA, MEDICAL_DISCLAIMER } from '@/lib/structured-data'

export const metadata: Metadata = {
    title: 'Sobre a Clínica | Saraiva Vision Care',
    description: 'Conheça a Saraiva Vision Care, clínica especializada em olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870. Tecnologia inovadora com atendimento humanizado.',
    openGraph: {
        title: 'Sobre a Clínica | Saraiva Vision Care',
        description: 'Referência em diagnóstico e tratamento de síndrome do olho seco em Caratinga e região.',
        type: 'website',
    },
}

export default function SobreAClinicaPage() {
    const localBusinessSchema = generateLocalBusinessSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Sobre a Clínica', url: '/sobre-a-clinica' }
    ])

    // Schema específico para médico
    const physicianSchema = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: BUSINESS_DATA.responsible.name,
        description: 'Médico Oftalmologista especializado em tratamento de olho seco e doenças da superfície ocular',
        medicalSpecialty: 'Ophthalmology',
        telephone: BUSINESS_DATA.telephone,
        address: {
            '@type': 'PostalAddress',
            ...BUSINESS_DATA.address
        },
        memberOf: {
            '@type': 'MedicalOrganization',
            name: 'Conselho Regional de Medicina de Minas Gerais',
            identifier: BUSINESS_DATA.responsible.credential
        }
    }

    const diferenciais = [
        {
            icon: '🔬',
            titulo: 'Tecnologias Inovadoras',
            descricao: 'Única clínica em Caratinga com equipamentos de ponta: plasma jato, plugs lacrimais, meibografia avançada.'
        },
        {
            icon: '👁️',
            titulo: 'Diagnóstico Preciso',
            descricao: 'Testes lacrimais especializados (TBUT, Schirmer, meibografia) para identificar o subtipo exato de olho seco.'
        },
        {
            icon: '💊',
            titulo: 'Tratamento Personalizado',
            descricao: 'Desde lágrimas artificiais até procedimentos avançados como jato de plasma para blefaroplastia.'
        },
        {
            icon: '📚',
            titulo: 'Educação do Paciente',
            descricao: 'Esclarecimento completo sobre causas, prevenção e cuidados para maior adesão ao tratamento.'
        },
        {
            icon: '📅',
            titulo: 'Acompanhamento Contínuo',
            descricao: 'Protocolos de follow-up estruturados para monitorar evolução e ajustar tratamento.'
        },
        {
            icon: '🤝',
            titulo: 'Atendimento Humanizado',
            descricao: 'Abordagem acolhedora que combina expertise médica com empatia e respeito ao paciente.'
        }
    ]

    const equipamentos = [
        { nome: 'Meibografia', descricao: 'Imagem das glândulas de Meibomius para diagnóstico de disfunção' },
        { nome: 'Plasmax KLD', descricao: 'Jato de plasma para blefaroplastia sem cortes' },
        { nome: 'Plugs Lacrimais', descricao: 'Dispositivos para retenção de lágrimas' },
        { nome: 'Lâmpada de Fenda', descricao: 'Exame detalhado da superfície ocular' },
        { nome: 'Topógrafo Corneano', descricao: 'Mapeamento completo da córnea' },
        { nome: 'Paquímetro', descricao: 'Medição da espessura corneana' }
    ]

    return (
        <>
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />
            <StructuredData data={physicianSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                    <div className="container mx-auto px-4 py-16 md:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Saraiva Vision Care
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-4">
                                Referência em tratamento de olho seco em Caratinga e região
                            </p>
                            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                                Tecnologia inovadora com abordagem humanizada e educativa para cuidar da sua visão
                            </p>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent" />
                </section>

                <main className="container mx-auto px-4 py-16">
                    {/* Sobre o Médico */}
                    <section className="max-w-6xl mx-auto mb-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                    Médico Responsável
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {BUSINESS_DATA.responsible.name}
                                </h2>
                                <p className="text-lg text-blue-600 font-medium mb-6">
                                    {BUSINESS_DATA.responsible.title} • {BUSINESS_DATA.responsible.credential}
                                </p>
                                <div className="prose prose-lg text-gray-700">
                                    <p className="mb-4">
                                        Médico oftalmologista apaixonado por cuidar da visão dos pacientes em Caratinga e região.
                                        Especialista em diagnóstico e tratamento de doenças da superfície ocular,
                                        com foco especial na síndrome do olho seco.
                                    </p>
                                    <p className="mb-4">
                                        A missão do Dr. Philipe é unir <strong>tecnologia de ponta</strong> com{' '}
                                        <strong>atendimento humanizado</strong>, garantindo que cada paciente receba
                                        o tratamento mais adequado para sua condição específica.
                                    </p>
                                    <p>
                                        Com formação continuada e atualização constante nas mais modernas técnicas
                                        oftalmológicas, oferece aos pacientes acesso a procedimentos inovadores
                                        que antes só estavam disponíveis em grandes centros.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-8xl mb-4">👨‍⚕️</div>
                                        <p className="text-blue-800 font-medium">Dr. Philipe Saraiva Cruz</p>
                                        <p className="text-blue-600 text-sm">CRM-MG 69.870</p>
                                    </div>
                                </div>
                                {/* Badge de credencial */}
                                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">CRM Verificado</p>
                                            <p className="text-sm text-gray-500">Minas Gerais</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Posicionamento */}
                    <section className="max-w-4xl mx-auto mb-20 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Nossa Proposta de Valor
                            </h2>
                            <blockquote className="text-xl md:text-2xl font-light italic mb-6">
                                &ldquo;A Saraiva Vision é a referência de diagnóstico e tratamento de síndrome
                                do olho seco em Caratinga, oferecendo tecnologia inovadora com abordagem
                                humanizada e educativa.&rdquo;
                            </blockquote>
                            <p className="text-blue-200">
                                Consolidar a Saraiva Vision como primeira escolha para diagnóstico e
                                tratamento de olho seco em Caratinga e região.
                            </p>
                        </div>
                    </section>

                    {/* Diferenciais */}
                    <section className="max-w-6xl mx-auto mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Por que escolher a Saraiva Vision?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Diferenciais que fazem da nossa clínica a referência regional em tratamento de olho seco
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {diferenciais.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.descricao}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Equipamentos e Tecnologias */}
                    <section className="max-w-6xl mx-auto mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Tecnologia de Ponta
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Equipamentos modernos para diagnóstico preciso e tratamentos inovadores
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {equipamentos.map((equip, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100"
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-white text-xl">🔬</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {equip.nome}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {equip.descricao}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Dados de Mercado */}
                    <section className="max-w-4xl mx-auto mb-20">
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                                Olho Seco em Números
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                        12-34%
                                    </div>
                                    <p className="text-gray-600">
                                        da população brasileira sofre com olho seco
                                    </p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                        90.890
                                    </div>
                                    <p className="text-gray-600">
                                        habitantes em Caratinga potencialmente afetados
                                    </p>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                        6,7%
                                    </div>
                                    <p className="text-gray-600">
                                        crescimento anual do mercado de oftalmologia no Brasil
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Agende sua Consulta
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Cuide da sua visão com quem entende. Nossa equipe está pronta para atendê-lo
                                com a atenção e o cuidado que você merece.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={BUSINESS_DATA.bookingPage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    Agendar Online
                                </a>
                                <Link
                                    href="/contato"
                                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Ver Contatos
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <p className="text-xs text-gray-500 text-center">
                            {MEDICAL_DISCLAIMER}
                        </p>
                    </div>
                </main>
            </div>
        </>
    )
}
