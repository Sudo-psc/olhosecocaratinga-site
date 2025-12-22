import { Metadata } from 'next'
import Link from 'next/link'
import { StructuredData } from '@/components/StructuredData'
import { generateLocalBusinessSchema, generateBreadcrumbSchema, BUSINESS_DATA, MEDICAL_DISCLAIMER } from '@/lib/structured-data'

export const metadata: Metadata = {
    title: 'Contato | Saraiva Vision Care',
    description: 'Entre em contato com a Saraiva Vision Care em Caratinga/MG. Agende sua consulta oftalmológica. Rua Catarina Maria Passos, 97, Santa Zita. WhatsApp: (33) 99860-1427.',
    openGraph: {
        title: 'Contato | Saraiva Vision Care',
        description: 'Agende sua consulta oftalmológica com Dr. Philipe Saraiva em Caratinga/MG.',
        type: 'website',
    },
}

export default function ContatoPage() {
    const localBusinessSchema = generateLocalBusinessSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Contato', url: '/contato' }
    ])

    // Schema de contato adicional
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato - Saraiva Vision Care',
        description: 'Página de contato da Saraiva Vision Care',
        mainEntity: {
            '@type': 'LocalBusiness',
            name: BUSINESS_DATA.name,
            telephone: BUSINESS_DATA.telephone,
            address: {
                '@type': 'PostalAddress',
                ...BUSINESS_DATA.address
            }
        }
    }

    const horarios = [
        { dia: 'Segunda a Sexta', horario: '08:00 - 18:00' },
        { dia: 'Sábado', horario: '08:00 - 12:00' },
        { dia: 'Domingo e Feriados', horario: 'Fechado' }
    ]

    const formasContato = [
        {
            icon: '📞',
            titulo: 'Telefone',
            info: '(33) 99860-1427',
            link: `tel:${BUSINESS_DATA.telephone}`,
            descricao: 'Ligação direta',
            cta: 'Ligar Agora'
        },
        {
            icon: '💬',
            titulo: 'WhatsApp',
            info: '(33) 99860-1427',
            link: `https://wa.me/5533998601427?text=Olá! Gostaria de agendar uma consulta.`,
            descricao: 'Atendimento rápido',
            cta: 'Enviar Mensagem'
        },
        {
            icon: '🌐',
            titulo: 'Agendamento Online',
            info: 'saraivavision.com.br',
            link: BUSINESS_DATA.bookingPage,
            descricao: 'Escolha o melhor horário',
            cta: 'Agendar Online'
        }
    ]

    // Coordenadas para o mapa (Caratinga, MG)
    const _mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.123456789!2d${BUSINESS_DATA.geo.longitude}!3d${BUSINESS_DATA.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA2JzQ0LjYiUyA0MsKwMDgnNDMuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890`
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${BUSINESS_DATA.address.streetAddress}, ${BUSINESS_DATA.address.addressLocality}, ${BUSINESS_DATA.address.addressRegion}`
    )}`

    return (
        <>
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />
            <StructuredData data={contactPageSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Entre em Contato
                            </h1>
                            <p className="text-xl text-blue-100 mb-4">
                                Estamos prontos para cuidar da sua visão
                            </p>
                            <p className="text-lg text-blue-200">
                                Agende sua consulta ou tire suas dúvidas conosco
                            </p>
                        </div>
                    </div>
                </section>

                <main className="container mx-auto px-4 py-16">
                    {/* Cards de Contato */}
                    <section className="max-w-6xl mx-auto mb-16">
                        <div className="grid md:grid-cols-3 gap-6">
                            {formasContato.map((contato, index) => (
                                <a
                                    key={index}
                                    href={contato.link}
                                    target={contato.link.startsWith('http') ? '_blank' : undefined}
                                    rel={contato.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
                                >
                                    <div className="text-5xl mb-4">{contato.icon}</div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                                        {contato.titulo}
                                    </h2>
                                    <p className="text-2xl font-semibold text-blue-600 mb-2">
                                        {contato.info}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {contato.descricao}
                                    </p>
                                    <span className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                                        {contato.cta}
                                        <svg
                                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Endereço e Mapa */}
                    <section className="max-w-6xl mx-auto mb-16">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Informações */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    📍 Localização
                                </h2>

                                <div className="space-y-6">
                                    {/* Endereço */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Endereço
                                        </h3>
                                        <address className="not-italic text-gray-600 leading-relaxed">
                                            <p className="font-medium text-gray-900">
                                                {BUSINESS_DATA.name}
                                            </p>
                                            <p>{BUSINESS_DATA.address.streetAddress}</p>
                                            <p>
                                                {BUSINESS_DATA.address.addressLocality},{' '}
                                                {BUSINESS_DATA.address.addressRegion}/{BUSINESS_DATA.address.addressRegionCode}
                                            </p>
                                            <p>CEP: {BUSINESS_DATA.address.postalCode}</p>
                                        </address>
                                        <a
                                            href={googleMapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            Abrir no Google Maps
                                        </a>
                                    </div>

                                    {/* Horários */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            🕐 Horário de Funcionamento
                                        </h3>
                                        <div className="space-y-2">
                                            {horarios.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                                                >
                                                    <span className="text-gray-600">{item.dia}</span>
                                                    <span className={`font-medium ${item.horario === 'Fechado' ? 'text-red-500' : 'text-gray-900'}`}>
                                                        {item.horario}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Médico Responsável */}
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            👨‍⚕️ Médico Responsável
                                        </h3>
                                        <p className="text-gray-900 font-medium">
                                            {BUSINESS_DATA.responsible.name}
                                        </p>
                                        <p className="text-gray-600">
                                            {BUSINESS_DATA.responsible.title}
                                        </p>
                                        <p className="text-blue-600 font-medium">
                                            {BUSINESS_DATA.responsible.credential}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mapa */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-gray-100 relative">
                                    {/* Placeholder do mapa - Em produção, usar Google Maps embed */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                        <div className="text-6xl mb-4">🗺️</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Caratinga, MG
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Rua Catarina Maria Passos, 97<br />
                                            Santa Zita
                                        </p>
                                        <a
                                            href={googleMapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                        >
                                            Ver no Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ de Contato */}
                    <section className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Dúvidas Frequentes
                        </h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">
                                        Como agendar uma consulta?
                                    </span>
                                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    Você pode agendar sua consulta de três formas: pelo WhatsApp (33) 99860-1427,
                                    pelo telefone ou através do nosso sistema de agendamento online em{' '}
                                    <a href={BUSINESS_DATA.bookingPage} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        saraivavision.com.br/agendamento
                                    </a>.
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">
                                        Quais convênios são aceitos?
                                    </span>
                                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    Para informações sobre convênios aceitos, entre em contato conosco pelo
                                    WhatsApp ou telefone. Atendemos também pacientes particulares com diversas
                                    formas de pagamento.
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">
                                        A primeira consulta precisa de encaminhamento?
                                    </span>
                                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    Não é necessário encaminhamento para agendar uma consulta oftalmológica.
                                    Você pode marcar diretamente conosco.
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">
                                        O que levar na primeira consulta?
                                    </span>
                                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    Recomendamos trazer documento de identidade, carteirinha do convênio (se aplicável),
                                    óculos ou lentes de contato atuais, e exames oftalmológicos anteriores (se tiver).
                                    Se usar colírios, traga também a lista de medicamentos.
                                </div>
                            </details>
                        </div>
                    </section>

                    {/* CTA Final */}
                    <section className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
                            <div className="text-5xl mb-4">💬</div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Fale Conosco pelo WhatsApp
                            </h2>
                            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                                Tire suas dúvidas ou agende sua consulta de forma rápida e prática
                            </p>
                            <a
                                href="https://wa.me/5533998601427?text=Olá! Gostaria de agendar uma consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Iniciar Conversa
                            </a>
                        </div>
                    </section>

                    {/* Links úteis */}
                    <section className="max-w-4xl mx-auto mt-12 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/sobre-a-clinica"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Sobre a Clínica →
                            </Link>
                            <Link
                                href="/olho-seco"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Olho Seco →
                            </Link>
                            <Link
                                href="/blog"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Blog →
                            </Link>
                            <Link
                                href="/faq"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Perguntas Frequentes →
                            </Link>
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
