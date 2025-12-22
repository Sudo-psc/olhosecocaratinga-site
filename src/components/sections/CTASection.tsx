import { ArrowRight, Phone } from 'lucide-react'

export function CTASection() {
    return (
        <section className="py-20 bg-primary-600 text-white text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Não deixe o desconforto virar rotina
                    </h2>
                    <p className="text-primary-100 text-lg mb-10 leading-relaxed">
                        Agende sua avaliação especializada na Saraiva Vision e descubra o tratamento ideal para o seu caso. Cuide da saúde dos seus olhos com quem entende do assunto.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://saraivavision.com.br/agendamento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-lg font-bold text-primary-700 shadow-lg transition-all hover:bg-slate-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                        >
                            Agendar Avaliação Agora
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="https://wa.me/+553399898026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl border-2 border-primary-400 bg-primary-700/50 px-8 text-lg font-semibold text-white transition-all hover:bg-primary-700 hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            (33) 99898-026
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
