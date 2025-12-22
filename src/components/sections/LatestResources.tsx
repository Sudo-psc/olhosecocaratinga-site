import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Mock data - replace with Sanity fetch later
const articles = [
    {
        title: 'Guia Completo: Tratamento de Olho Seco',
        excerpt: 'Aprenda sobre tipos de lágrimas artificiais e técnicas corretas de aplicação.',
        slug: 'guia-tratamento-olho-seco',
        date: '2024-01-10',
        category: 'Tratamento'
    },
    {
        title: 'Causas do Olho Seco',
        excerpt: 'Conheça as principais causas e fatores de risco que afetam sua visão.',
        slug: 'causas-olho-seco',
        date: '2024-01-15',
        category: 'Educação'
    },
    {
        title: 'Diagnóstico Diferencial',
        excerpt: 'Como diferenciar olho seco de outras condições oculares comuns.',
        slug: 'diagnostico-diferencial',
        date: '2024-01-20',
        category: 'Diagnóstico'
    }
]

const videos = [
    {
        title: 'Como Aplicar Colírios',
        duration: '5:30',
        slug: 'como-aplicar-colirios',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        title: 'Higiene Palpebral',
        duration: '4:15',
        slug: 'higiene-palpebral',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
        title: 'Mitos sobre Olho Seco',
        duration: '3:45',
        slug: 'mitos-olho-seco',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    }
]

export function LatestResources() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Recursos Educativos</h2>
                    <p className="text-lg text-slate-600">
                        Informação de qualidade para ajudar você a cuidar melhor dos seus olhos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Artigos */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Últimos Artigos</h3>
                            <Link href="/blog" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="space-y-6">
                            {articles.map((article, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${article.slug}`}
                                    className="block group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-100 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {new Date(article.date).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {article.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Vídeos */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Vídeos Recentes</h3>
                            <Link href="/videos" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="space-y-6">
                            {videos.map((video, index) => (
                                <Link
                                    key={index}
                                    href={`/videos/${video.slug}`}
                                    className="flex gap-4 group bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-primary-100 hover:shadow-md transition-all"
                                >
                                    <div className="flex-shrink-0 w-32 h-20 bg-slate-200 rounded-lg overflow-hidden relative">
                                        {/* Placeholder image */}
                                        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                                            <span className="text-xs text-slate-500">Thumbnail</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {video.title}
                                        </h4>
                                        <span className="text-xs text-slate-500 flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                            Duração: {video.duration}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
