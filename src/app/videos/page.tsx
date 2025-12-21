import type { Metadata } from 'next'
import Link from 'next/link'
import { draftMode } from 'next/headers'
import { getVideos } from '@/sanity/queries'
import VideoCard from '@/components/video-card'

export const metadata: Metadata = {
    title: 'Vídeos',
    description:
        'Vídeos educativos sobre síndrome do olho seco, tratamentos e cuidados com a saúde ocular.',
    openGraph: {
        title: 'Vídeos | Olhos Secos Caratinga',
        description:
            'Vídeos educativos sobre síndrome do olho seco, tratamentos e cuidados com a saúde ocular.',
    },
}

export default async function VideosPage() {
    const { isEnabled: preview } = await draftMode()
    const videos = await getVideos(preview)

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Vídeos
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                    Conteúdo em vídeo sobre saúde ocular e síndrome do olho seco
                </p>
            </div>

            {/* Videos Grid */}
            {videos.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-600 dark:bg-slate-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="mx-auto h-16 w-16 text-slate-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                    </svg>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                        Nenhum vídeo publicado ainda
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                        Os vídeos aparecerão aqui assim que forem publicados no CMS.
                    </p>
                    <Link
                        href="/studio"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700"
                    >
                        Adicionar primeiro vídeo
                    </Link>
                </div>
            )}
        </div>
    )
}
