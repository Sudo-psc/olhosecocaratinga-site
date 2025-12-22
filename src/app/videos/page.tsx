import type { Metadata } from 'next'
import { localVideos } from '@/lib/local-videos'
import LocalVideoCard from '@/components/local-video-card'

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

export default function VideosPage() {
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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {localVideos.map((video) => (
                    <LocalVideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    )
}
