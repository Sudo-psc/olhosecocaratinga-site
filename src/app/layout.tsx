import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { draftMode } from 'next/headers'
import './globals.css'
import DraftModeBanner from '@/components/draft-mode-banner'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: {
        default: 'Tratamento de Olho Seco em Caratinga | Dr. Philipe Saraiva',
        template: '%s | Olhos Secos Caratinga',
    },
    description:
        'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870. Diagnóstico preciso e tratamentos modernos.',
    keywords: [
        'olho seco',
        'síndrome do olho seco',
        'oftalmologista caratinga',
        'tratamento olho seco',
        'dr philipe saraiva',
        'saraiva vision',
        'olhos secos tratamento',
        'caratinga mg',
    ],
    authors: [{ name: 'Dr. Philipe Saraiva Cruz', url: 'https://olhosecocaratinga.com.br' }],
    creator: 'Saraiva Vision Care',
    publisher: 'Saraiva Vision Care LTDA',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://olhosecocaratinga.com.br'),
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://olhosecocaratinga.com.br',
        siteName: 'Olhos Secos Caratinga | Dr. Philipe Saraiva',
        title: 'Tratamento de Olho Seco em Caratinga | Dr. Philipe Saraiva',
        description:
            'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870. Diagnóstico preciso e tratamentos modernos.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tratamento de Olho Seco em Caratinga | Dr. Philipe Saraiva',
        description:
            'Especialista em tratamento de olho seco em Caratinga/MG. Dr. Philipe Saraiva Cruz - Oftalmologista CRM-MG 69.870.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    width: 'device-width',
    initialScale: 1,
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { isEnabled: isDraftMode } = await draftMode()

    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className="min-h-screen bg-white font-sans antialiased dark:bg-slate-900">
                {isDraftMode && <DraftModeBanner />}
                <div className="flex min-h-screen flex-col">
                    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
                        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                                Olhos Secos Caratinga
                            </Link>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/blog"
                                    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/videos"
                                    className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                                >
                                    Vídeos
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <main className="flex-1">{children}</main>
                    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                                © {new Date().getFullYear()} Olhos Secos Caratinga. Todos os direitos reservados.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}
