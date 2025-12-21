import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { PostSummary } from '@/sanity/types'

interface PostCardProps {
    post: PostSummary
}

export default function PostCard({ post }: PostCardProps) {
    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
        : null

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <Link href={`/blog/${post.slug.current}`}>
                {/* Cover Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
                    {post.coverImage ? (
                        <Image
                            src={urlFor(post.coverImage).width(600).height(340).url()}
                            alt={post.coverImage.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="h-12 w-12 text-slate-300 dark:text-slate-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="mb-2 flex flex-wrap gap-1">
                            {post.categories.slice(0, 2).map((category) => (
                                <span
                                    key={category.slug.current}
                                    className="inline-flex items-center rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h2 className="line-clamp-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between">
                        {/* Author */}
                        {post.author && (
                            <div className="flex items-center gap-2">
                                {post.author.photo && (
                                    <Image
                                        src={urlFor(post.author.photo).width(32).height(32).url()}
                                        alt={post.author.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                )}
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {post.author.name}
                                </span>
                            </div>
                        )}

                        {/* Date */}
                        {formattedDate && (
                            <time className="text-xs text-slate-500 dark:text-slate-400">{formattedDate}</time>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    )
}
