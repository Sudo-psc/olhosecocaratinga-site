import Link from 'next/link'
import { LocalVideo } from '@/lib/local-videos'
import { Play } from 'lucide-react'

interface LocalVideoCardProps {
    video: LocalVideo
}

export default function LocalVideoCard({ video }: LocalVideoCardProps) {
    const formattedDate = new Date(video.uploadDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <Link href={`/videos/${video.slug}`}>
                {/* Thumbnail Placeholder */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 ml-1" />
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                        {video.duration.replace('PT', '').replace('M', ':00').replace('S', '')}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Title */}
                    <h2 className="line-clamp-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {video.title}
                    </h2>

                    {/* Footer */}
                    <div className="mt-3 flex items-center justify-between">
                        {/* Date */}
                        <time className="text-xs text-slate-500 dark:text-slate-400">{formattedDate}</time>

                        {/* Watch label */}
                        <span className="flex items-center text-xs font-medium text-primary-600 dark:text-primary-400">
                            Assistir
                            <Play className="ml-1 h-3 w-3" />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}
