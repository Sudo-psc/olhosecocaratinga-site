import Link from 'next/link'
import Image from 'next/image'
import { urlFor, getYouTubeThumbnail } from '@/sanity/client'
import type { VideoSummary } from '@/sanity/types'

interface VideoCardProps {
    video: VideoSummary
}

export default function VideoCard({ video }: VideoCardProps) {
    const formattedDate = video.publishedAt
        ? new Date(video.publishedAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
        : null

    // Thumbnail: usa customizada ou do YouTube
    const thumbnailUrl = video.thumbnail
        ? urlFor(video.thumbnail).width(600).height(340).url()
        : getYouTubeThumbnail(video.youtubeUrl, 'hq')

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <Link href={`/videos/${video.slug.current}`}>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                    {thumbnailUrl ? (
                        <>
                            <Image
                                src={thumbnailUrl}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Play overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="ml-1 h-8 w-8"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="h-12 w-12 text-slate-600"
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
                        </div>
                    )}

                    {/* Duration badge */}
                    {video.duration && (
                        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                            {video.duration}
                        </div>
                    )}
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
                        {formattedDate && (
                            <time className="text-xs text-slate-500 dark:text-slate-400">{formattedDate}</time>
                        )}

                        {/* Watch label */}
                        <span className="flex items-center text-xs font-medium text-primary-600 dark:text-primary-400">
                            Assistir
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="ml-1 h-3 w-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}
