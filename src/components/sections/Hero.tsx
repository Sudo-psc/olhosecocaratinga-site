import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { DisclaimerCard } from '@/components/ui/DisclaimerCard'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-12 lg:pt-24 lg:pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Olho Seco em Caratinga: <br className="hidden sm:block" />
                        <span className="text-primary-600">Informação Confiável</span> e <span className="text-secondary-600">Cuidado Baseado em Evidências</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
                        Entenda os sintomas, conheça as causas e saiba quando buscar avaliação especializada para o conforto dos seus olhos.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <a
                            href="https://saraivavision.com.br/agendamento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary-600 px-8 text-base font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 hover:shadow-primary-600/30 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                        >
                            Agendar Avaliação
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="https://wa.me/+553399898026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 transition-all hover:border-primary-200 hover:bg-slate-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Falar no WhatsApp
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
                        <Link href="/videos" className="hover:text-primary-600 transition-colors">
                            Ver vídeos educativos
                        </Link>
                        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                        <Link href="/blog" className="hover:text-primary-600 transition-colors">
                            Ler artigos do blog
                        </Link>
                    </div>

                    <div className="mx-auto mt-12 max-w-2xl">
                        <DisclaimerCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
