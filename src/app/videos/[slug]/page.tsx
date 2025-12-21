import { StructuredData } from '@/components/StructuredData'
import { generateVideoObjectSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, MEDICAL_DISCLAIMER } from '@/lib/structured-data'
import Link from 'next/link'
import Image from 'next/image'

interface VideoPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function VideoPage({ params }: VideoPageProps) {
    const { slug } = await params
    // Dados mock do vídeo (em produção viria do Sanity)
    const videoData = {
        title: 'Como Aplicar Lágrimas Artificiais Corretamente',
        description: 'Aprenda a técnica correta para aplicação de lágrimas artificiais e maximize o alívio dos sintomas de olho seco. Vídeo educativo com dicas práticas do Dr. Philipe Saraiva Cruz.',
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        uploadDate: '2024-01-15T10:00:00Z',
        duration: 'PT5M30S',
        contentUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        youtubeId: 'dQw4w9WgXcQ'
    }

    // Schema para vídeo
    const videoSchema = generateVideoObjectSchema(
        videoData.title,
        videoData.description,
        videoData.thumbnailUrl,
        videoData.uploadDate,
        videoData.duration,
        videoData.contentUrl
    )

    // Schema para informações do negócio
    const localBusinessSchema = generateLocalBusinessSchema()

    // Schema de navegação
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Vídeos', url: '/videos' },
        { name: videoData.title, url: `/videos/${slug}` }
    ])

    return (
        <>
            {/* Dados estruturados */}
            <StructuredData data={videoSchema} />
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                        {videoData.title}
                                    </h1>
                                    <p className="text-lg text-blue-100 mb-6">
                                        Vídeo educativo sobre cuidados com olho seco
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://saraivavision.com.br/agendamento"
                                            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                        >
                                            Agendar Consulta
                                        </a>
                                        <Link
                                            href="/videos"
                                            className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                        >
                                            Mais Vídeos
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={videoData.thumbnailUrl}
                                        alt={videoData.title}
                                        width={640}
                                        height={360}
                                        className="rounded-lg shadow-2xl w-full"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Player */}
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Video Embed */}
                        <section className="mb-12">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
                                    title={videoData.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full aspect-video"
                                />
                            </div>
                        </section>

                        {/* Video Information */}
                        <section className="mb-12">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Sobre este Vídeo
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {videoData.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Duração
                                        </h3>
                                        <p className="text-gray-600">
                                            {videoData.duration.replace('PT', '').replace('M', 'min ').replace('S', 's')}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Publicado em
                                        </h3>
                                        <p className="text-gray-600">
                                            {new Date(videoData.uploadDate).toLocaleDateString('pt-BR')}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-3">
                                        Tópicos Abordados
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {[
                                            'Técnica correta de aplicação',
                                            'Tipos de lágrimas artificiais',
                                            'Frequência ideal de uso',
                                            'Armazenamento do produto',
                                            'Dicas para maximizar efeito',
                                            'Cuidados com higiene',
                                            'Quando procurar especialista'
                                        ].map((topico, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span className="text-gray-700">{topico}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Related Videos */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Vídeos Relacionados
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: 'Causas do Olho Seco',
                                        thumbnail: 'https://img.youtube.com/vi/example1/maxresdefault.jpg',
                                        slug: 'causas-olho-seco'
                                    },
                                    {
                                        title: 'Tratamentos Avançados',
                                        thumbnail: 'https://img.youtube.com/vi/example2/maxresdefault.jpg',
                                        slug: 'tratamentos-avancados'
                                    },
                                    {
                                        title: 'Prevenção Diária',
                                        thumbnail: 'https://img.youtube.com/vi/example3/maxresdefault.jpg',
                                        slug: 'prevencao-diaria'
                                    }
                                ].map((video, index) => (
                                    <Link
                                        key={index}
                                        href={`/videos/${video.slug}`}
                                        className="group block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-video bg-gray-200 relative">
                                            <Image
                                                src={video.thumbnail}
                                                alt={video.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {video.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Precisa de avaliação especializada?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Agende uma consulta com o Dr. Philipe Saraiva Cruz para diagnóstico completo
                            </p>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                            >
                                Agendar Consulta
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
