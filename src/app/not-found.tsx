import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
            <div className="text-center">
                <p className="text-6xl font-bold text-primary-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Página não encontrada
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                    Desculpe, não conseguimos encontrar a página que você está procurando.
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                        Voltar ao início
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                        Ver blog
                    </Link>
                </div>
            </div>
        </div>
    )
}
