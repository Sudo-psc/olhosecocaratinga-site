import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white sm:py-32">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Olhos Secos Caratinga
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-primary-100 sm:text-xl">
                            Informações confiáveis e recursos educativos sobre síndrome do olho seco. Cuide da sua
                            saúde ocular com conhecimento.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-all hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                            >
                                Ler o Blog
                            </Link>
                            <Link
                                href="/videos"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                            >
                                Assistir Vídeos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Recursos Disponíveis
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                            Explore nosso conteúdo educativo sobre saúde ocular
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Blog Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Blog</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                Artigos detalhados sobre olho seco, tratamentos, prevenção e dicas de cuidados.
                            </p>
                            <Link
                                href="/blog"
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                            >
                                Ver artigos
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="ml-1 h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>

                        {/* Videos Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
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
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Vídeos</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                Conteúdo em vídeo com explicações, tutoriais e entrevistas com especialistas.
                            </p>
                            <Link
                                href="/videos"
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                            >
                                Assistir vídeos
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="ml-1 h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>

                        {/* CMS Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:col-span-2 lg:col-span-1">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                Gerenciar Conteúdo
                            </h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                Acesso ao painel de administração para criar e editar conteúdos.
                            </p>
                            <Link
                                href="/studio"
                                className="mt-4 inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                Acessar Studio
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="ml-1 h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-50 py-16 dark:bg-slate-800 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Mantenha-se Informado
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                            Acompanhe nosso conteúdo e cuide da saúde dos seus olhos com informações
                            especializadas.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                Explorar Conteúdos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
