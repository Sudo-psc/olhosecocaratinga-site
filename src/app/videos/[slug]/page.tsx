import { StructuredData } from '@/components/StructuredData'
import { generateVideoObjectSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, MEDICAL_DISCLAIMER } from '@/lib/structured-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { localVideos } from '@/lib/local-videos'
import { ArrowLeft } from 'lucide-react'

interface VideoPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function VideoPage({ params }: VideoPageProps) {
    const { slug } = await params
    const video = localVideos.find((v) => v.slug === slug)

    if (!video) {
        notFound()
    }

    const videoUrl = `/videos/${video.fileName}`

    // Schema para vídeo
    const videoSchema = generateVideoObjectSchema(
        video.title,
        video.description,
        '', // Thumbnail URL (optional or placeholder)
        video.uploadDate,
        video.duration,
        `https://olhosecocaratinga.com.br${videoUrl}`
    )

    // Schema para informações do negócio
    const localBusinessSchema = generateLocalBusinessSchema()

    // Schema de navegação
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Vídeos', url: '/videos' },
        { name: video.title, url: `/videos/${slug}` }
    ])

    return (
        <>
            {/* Dados estruturados */}
            <StructuredData data={videoSchema} />
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />

            <div className="min-h-screen bg-slate-50">
                {/* Header / Breadcrumb */}
                <div className="bg-white border-b border-slate-200">
                    <div className="container mx-auto px-4 py-4">
                        <Link href="/videos" className="inline-flex items-center text-sm text-slate-600 hover:text-primary-600 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Voltar para Vídeos
                        </Link>
                    </div>
                </div>

                <main className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Video Player */}
                        <section className="mb-8">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
                                <video
                                    controls
                                    className="w-full h-full"
                                    src={videoUrl}
                                    poster="/images/video-placeholder.jpg" // You might want to add a generic poster
                                >
                                    Seu navegador não suporta a reprodução de vídeos.
                                </video>
                            </div>
                        </section>

                        {/* Video Information */}
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                {video.title}
                            </h1>

                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                                <time dateTime={video.uploadDate}>
                                    {new Date(video.uploadDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </time>
                                <span>•</span>
                                <span>{video.duration.replace('PT', '').replace('M', ' min')}</span>
                            </div>

                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {video.description}
                                </p>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-primary-600 rounded-2xl p-8 text-white text-center shadow-lg shadow-primary-900/20">
                            <h2 className="text-2xl font-bold mb-4">
                                Gostou do conteúdo?
                            </h2>
                            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                                Se você se identificou com os sintomas ou quer saber mais sobre o tratamento, agende uma avaliação especializada.
                            </p>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 font-bold text-primary-700 transition-all hover:bg-slate-50 hover:scale-105"
                            >
                                Agendar Avaliação
                            </a>
                        </section>

                        {/* Disclaimer */}
                        <section className="mt-8 p-6 bg-amber-50 border border-amber-100 rounded-xl">
                            <p className="text-sm text-amber-800">
                                <strong>Aviso Legal:</strong> {MEDICAL_DISCLAIMER}
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}
