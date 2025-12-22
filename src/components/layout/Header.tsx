'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            SV
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold leading-none">Saraiva Vision</span>
                            <span className="text-slate-500 text-xs font-medium">Olho Seco Caratinga</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
                            Início
                        </Link>
                        <Link href="/olho-seco" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
                            Olho Seco
                        </Link>
                        <Link href="/blog" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
                            Blog
                        </Link>
                        <Link href="/sobre-a-clinica" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
                            Sobre
                        </Link>
                        <Link href="/contato" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">
                            Contato
                        </Link>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/+553399898026"
                            className="text-slate-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-2"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="text-sm">(33) 99898-026</span>
                        </a>
                        <a
                            href="https://saraivavision.com.br/agendamento"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
                        >
                            Agendar
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <Link
                            href="/"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Início
                        </Link>
                        <Link
                            href="/blog"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/videos"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Vídeos
                        </Link>
                        <Link
                            href="/faq"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/sobre-a-clinica"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sobre a Clínica
                        </Link>
                        <Link
                            href="/contato"
                            className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contato
                        </Link>
                        <div className="pt-4 border-t border-slate-100 space-y-4">
                            <a
                                href="https://wa.me/+553399898026"
                                className="flex items-center gap-2 text-slate-600 font-medium"
                            >
                                <Phone className="h-4 w-4" />
                                WhatsApp
                            </a>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-semibold"
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
