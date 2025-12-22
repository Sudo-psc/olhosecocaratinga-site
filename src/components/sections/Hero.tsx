import { ArrowRight, MessageCircle, MapPin } from 'lucide-react'
import { DisclaimerCard } from '@/components/ui/DisclaimerCard'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-12 lg:pt-24 lg:pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
                        <MapPin className="h-4 w-4" />
                        <span>Referência em Caratinga e Região</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-tight">
                        Tratamento Especializado para <br className="hidden sm:block" />
                        <span className="text-primary-600">Olho Seco</span> e <span className="text-secondary-600">Superfície Ocular</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
                        Recupere o conforto visual e a qualidade de vida. Diagnóstico preciso e tratamento personalizado com o <strong>Dr. Philipe Saraiva Cruz</strong>.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <a
                            href="https://saraivavision.com.br/agendamento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-primary-600 px-8 text-lg font-bold text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 hover:scale-105 hover:shadow-primary-600/30 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                        >
                            Agendar Avaliação de Olho Seco
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="https://wa.me/+553399898026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 text-lg font-semibold text-slate-700 transition-all hover:border-primary-200 hover:bg-slate-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Falar no WhatsApp
                        </a>
                    </div>

                    <div className="mt-12">
                        <DisclaimerCard className="mx-auto max-w-2xl text-left" />
                    </div>
                </div>
            </div>
        </section>
    )
}
