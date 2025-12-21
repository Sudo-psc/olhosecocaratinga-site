import { StructuredData } from '@/components/StructuredData'
import { generateLocalBusinessSchema, generateMedicalWebPageSchema, generateBreadcrumbSchema, MEDICAL_DISCLAIMER } from '@/lib/structured-data'

export default function OlhoSecoPage() {
    // Conteúdo educativo sobre olho seco
    const content = `Olho seco, ou síndrome dos olhos secos, é uma condição comum que afeta milhões de pessoas. 
    Caracteriza-se pela falta de lubrificação adequada na superfície ocular, causando desconforto, 
    vermelhidão e sensação de areia nos olhos. 
    
    O tratamento moderno envolve uma abordagem multifatorial, incluindo lágrimas artificiais, 
    anti-inflamatórios, omega-3 e procedimentos como as placas de punctum. 
    
    O diagnóstico correto é fundamental para determinar o tipo de olho seco e o tratamento mais adequado.`

    // Schema para página médica
    const medicalWebPageSchema = generateMedicalWebPageSchema('Olho Seco', content)

    // Schema para informações do negócio
    const localBusinessSchema = generateLocalBusinessSchema()

    // Schema de navegação
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Olho Seco', url: '/olho-seco' }
    ])

    return (
        <>
            {/* Dados estruturados */}
            <StructuredData data={medicalWebPageSchema} />
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Tratamento de Olho Seco em Caratinga
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8">
                                Cuidado especializado para aliviar o desconforto e melhorar sua qualidade de vida
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://saraivavision.com.br/agendamento"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    Agendar Consulta
                                </a>
                                <a
                                    href="#sintomas"
                                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Conhecer Sintomas
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conteúdo Principal */}
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* O que é Olho Seco */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                O que é Olho Seco?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="mb-4">
                                    Olho seco, conhecido tecnicamente como síndrome dos olhos secos (SOS),
                                    é uma condição multifatorial que ocorre quando os olhos não produzem lágrimas
                                    suficientes ou quando as lágrimas evaporam muito rapidamente.
                                </p>
                                <p className="mb-4">
                                    Esta condição afeta a superfície ocular e pode causar desconforto significativo,
                                    impactando atividades diárias como leitura, uso de computador e direção noturna.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
                                    <p className="font-semibold text-blue-900">
                                        Importante: Olho seco é uma condição médica que requer diagnóstico
                                        e tratamento profissional para evitar complicações e melhorar a qualidade de vida.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Sintomas */}
                        <section id="sintomas" className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Principais Sintomas
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    'Sensação de areia nos olhos',
                                    'Vermelhidão ocular',
                                    'Visão embaçada temporária',
                                    'Sensibilidade à luz',
                                    'Fadiga ocular',
                                    'Dificuldade para usar lentes de contato',
                                    'Lacrimejamento excessivo',
                                    'Sensação de queimação'
                                ].map((sintoma, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">{sintoma}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Causas */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Principais Causas
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Fatores Ambientais
                                    </h3>
                                    <p className="text-gray-700">
                                        Ar condicionado, baixa umidade, vento, poluição e tempo seco podem
                                        piorar os sintomas de olho seco.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Fatores Ocupacionais
                                    </h3>
                                    <p className="text-gray-700">
                                        Uso prolongado de computadores, leitura extensiva e outras atividades que
                                        reduzem a frequência do piscar.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Mudanças Hormonais e Idade
                                    </h3>
                                    <p className="text-gray-700">
                                        Menopausa, gravidez e o envelhecimento natural podem afetar
                                        a produção lacrimal.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Tratamentos */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Opções de Tratamento
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Lágrimas Artificiais
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Colírios lubrificantes que aliviam os sintomas imediatamente.
                                        Disponíveis em diferentes viscosidades para cada tipo de olho seco.
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium">
                                        ✓ Alívio imediato ✓ Uso diário ✓ Seguros
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Anti-inflamatórios
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Medicamentos prescritos para reduzir a inflamação ocular e melhorar
                                        a produção lacrimal natural.
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium">
                                        ✓ Ação prolongada ✓ Prescrição médica ✓ Resultados comprovados
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Procedimentos
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Placas de punctum, luz pulsátil e outros procedimentos para casos
                                        mais severos ou resistentes.
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium">
                                        ✓ Solução definitiva ✓ Mínima invasão ✓ Alta eficácia
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Não conviva com o desconforto do olho seco
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Agende sua avaliação especializada e descubra o tratamento ideal para você
                            </p>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                            >
                                Agendar Consulta Agora
                            </a>
                        </section>

                        {/* Disclaimer */}
                        <section className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                            <p className="text-amber-800 font-medium">
                                {MEDICAL_DISCLAIMER}
                            </p>
                        </section>
                    </div>
                </main>

                {/* Informações de Contato */}
                <section className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-6">
                                Saraiva Vision Care LTDA
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-2">Endereço</h3>
                                    <p className="text-gray-300">
                                        Rua Catarina Maria Passos, 97<br />
                                        Santa Zita, Caratinga - MG<br />
                                        CEP: 35300-000
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Contato</h3>
                                    <p className="text-gray-300">
                                        Telefone: +55 33 99860-1427<br />
                                        Website: saraivavision.com.br
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Horários</h3>
                                    <p className="text-gray-300">
                                        Segunda a Sexta: 08:00 - 18:00<br />
                                        Sábado: 08:00 - 12:00<br />
                                        Domingo: Fechado
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-700">
                                <p className="text-sm text-gray-400">
                                    Responsável Técnico: Dr. Philipe Saraiva Cruz - CRM-MG 69.870
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
