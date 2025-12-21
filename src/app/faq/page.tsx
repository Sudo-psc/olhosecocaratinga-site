'use client'

import { StructuredData } from '@/components/StructuredData'
import { generateFAQPageSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, MEDICAL_DISCLAIMER } from '@/lib/structured-data'

export default function FAQPage() {
    // FAQs educativos sobre olho seco
    const faqs = [
        {
            question: 'O que é olho seco?',
            answer: 'Olho seco é uma condição multifatorial que ocorre quando os olhos não produzem lágrimas suficientes ou quando as lágrimas evaporam muito rapidamente, afetando a superfície ocular.'
        },
        {
            question: 'Quais são os principais sintomas?',
            answer: 'Os principais sintomas incluem sensação de areia nos olhos, vermelhidão, visão embaçada temporária, sensibilidade à luz, fadiga ocular e dificuldade para usar lentes de contato.'
        },
        {
            question: 'Olho seco tem cura?',
            answer: 'Na maioria dos casos, olho seco é uma condição crônica que pode ser controlada eficazmente com tratamento adequado, proporcionando alívio significativo dos sintomas.'
        },
        {
            question: 'Quais tratamentos estão disponíveis?',
            answer: 'Os tratamentos incluem lágrimas artificiais, anti-inflamatórios, omega-3, compressas mornas e procedimentos como placas de punctum ou luz pulsátil.'
        },
        {
            question: 'Quando devo procurar um oftalmologista?',
            answer: 'Você deve procurar um oftalmologista se os sintomas persistirem por mais de uma semana, afetarem sua visão ou qualidade de vida, ou se surgir dor intensa.'
        },
        {
            question: 'O uso contínuo de computador pode piorar o olho seco?',
            answer: 'Sim. O uso prolongado de telas reduz a frequência do piscar, piorando os sintomas. Recomenda-se fazer pausas regulares e usar lágrimas artificiais.'
        },
        {
            question: 'Lágrimas artificiais viciam?',
            answer: 'Não. Lágrimas artificiais não causam vício ou dependência. São produtos seguros para uso contínuo e essenciais para o controle dos sintomas.'
        },
        {
            question: 'Como prevenir o olho seco?',
            answer: 'Algumas medidas preventivas incluem: piscar frequentemente ao usar telas, manter hidratação adequada, usar umidificador de ar, proteger os olhos do vento e fazer pausas durante leitura.'
        }
    ]

    // Schema para FAQ
    const faqSchema = generateFAQPageSchema(faqs)

    // Schema para informações do negócio
    const localBusinessSchema = generateLocalBusinessSchema()

    // Schema de navegação
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'FAQ', url: '/faq' }
    ])

    return (
        <>
            {/* Dados estruturados */}
            <StructuredData data={faqSchema} />
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Perguntas Frequentes sobre Olho Seco
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8">
                                Respostas para suas dúvidas sobre diagnóstico e tratamento
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://saraivavision.com.br/agendamento"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    Agendar Consulta
                                </a>
                                <a
                                    href="#faq-list"
                                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Ver Perguntas
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ List */}
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div id="faq-list" className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                                >
                                    <button
                                        className="w-full text-left px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                                        onClick={() => {
                                            const content = document.getElementById(`faq-content-${index}`)
                                            const button = document.getElementById(`faq-button-${index}`)
                                            const icon = document.getElementById(`faq-icon-${index}`)

                                            if (content && button && icon) {
                                                if (content.classList.contains('hidden')) {
                                                    content.classList.remove('hidden')
                                                    button.classList.add('border-b-2', 'border-blue-600')
                                                    icon.textContent = '−'
                                                } else {
                                                    content.classList.add('hidden')
                                                    button.classList.remove('border-b-2', 'border-blue-600')
                                                    icon.textContent = '+'
                                                }
                                            }
                                        }}
                                        id={`faq-button-${index}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg">{faq.question}</span>
                                            <span
                                                id={`faq-icon-${index}`}
                                                className="text-2xl font-light text-blue-600 w-8 h-8 flex items-center justify-center"
                                            >
                                                +
                                            </span>
                                        </div>
                                    </button>
                                    <div
                                        id={`faq-content-${index}`}
                                        className="hidden px-6 py-4 bg-gray-50 border-t border-gray-200"
                                    >
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Help Section */}
                        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Ainda tem dúvidas?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Nossa equipe está pronta para avaliar seu caso e recomendar o melhor tratamento
                            </p>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                            >
                                Agendar Avaliação
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

                {/* Contact Information */}
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
