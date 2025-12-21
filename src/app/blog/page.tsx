import type { Metadata } from 'next'
import Link from 'next/link'
import { draftMode } from 'next/headers'
import { getPosts } from '@/sanity/queries'
import PostCard from '@/components/post-card'

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Artigos sobre síndrome do olho seco, tratamentos, prevenção e dicas de cuidados com a saúde ocular.',
    openGraph: {
        title: 'Blog | Olhos Secos Caratinga',
        description:
            'Artigos sobre síndrome do olho seco, tratamentos, prevenção e dicas de cuidados com a saúde ocular.',
    },
}

export default async function BlogPage() {
    const { isEnabled: preview } = await draftMode()
    const posts = await getPosts(preview)

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Blog
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                    Artigos e informações sobre saúde ocular e síndrome do olho seco
                </p>
            </div>

            {/* Posts Grid */}
            {posts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
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
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                        Nenhum artigo publicado ainda
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                        Os artigos aparecerão aqui assim que forem publicados no CMS.
                    </p>
                    <Link
                        href="/studio"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700"
                    >
                        Criar primeiro artigo
                    </Link>
                </div>
            )}
        </div>
    )
}
