import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <span className="font-heading text-xl font-bold text-slate-900">
                            Olhos Secos <span className="text-primary">Caratinga</span>
                        </span>
                        <p className="mt-4 max-w-xs text-sm text-slate-600">
                            Informação especializada e tratamentos avançados para Síndrome do Olho Seco em Caratinga e região.
                            Uma iniciativa Saraiva Vision.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold text-slate-900">Navegação</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="/sintomas" className="text-sm text-slate-600 hover:text-primary">Sintomas</Link></li>
                            <li><Link href="/tratamentos" className="text-sm text-slate-600 hover:text-primary">Tratamentos</Link></li>
                            <li><Link href="/blog" className="text-sm text-slate-600 hover:text-primary">Blog</Link></li>
                            <li><Link href="/videos" className="text-sm text-slate-600 hover:text-primary">Vídeos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold text-slate-900">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="/privacidade" className="text-sm text-slate-600 hover:text-primary">Privacidade</Link></li>
                            <li><Link href="/termos" className="text-sm text-slate-600 hover:text-primary">Termos de Uso</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Saraiva Vision. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
