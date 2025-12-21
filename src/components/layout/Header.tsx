import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="container-custom flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo - Replace with Image when available */}
                    <span className="font-heading text-xl font-bold text-slate-900">
                        Olhos Secos <span className="text-primary">Caratinga</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/sintomas" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Sintomas
                    </Link>
                    <Link href="/tratamentos" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Tratamentos
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Blog
                    </Link>
                    <Link href="/sobre" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Sobre
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" className="hidden sm:inline-flex">
                        Agendar Avaliação
                    </Button>
                    {/* Mobile Menu Trigger could go here */}
                </div>
            </div>
        </header>
    )
}
