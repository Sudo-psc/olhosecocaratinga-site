import { Eye, Sun, Wind, Monitor, AlertTriangle } from 'lucide-react'

const symptoms = [
    { icon: Eye, text: 'Sensação de areia ou corpo estranho nos olhos' },
    { icon: Sun, text: 'Sensibilidade excessiva à luz (fotofobia)' },
    { icon: Wind, text: 'Vermelhidão e ardor constante' },
    { icon: Monitor, text: 'Cansaço visual ao usar telas ou ler' },
    { icon: Eye, text: 'Visão embaçada que melhora ao piscar' },
    { icon: Wind, text: 'Lacrimejamento excessivo (reflexo)' },
]

export function Symptoms() {
    return (
        <section id="sintomas" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sintomas e Sinais Comuns</h2>
                        <p className="text-lg text-slate-600">
                            O olho seco pode se manifestar de diversas formas. Identificar os sinais é o primeiro passo.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {symptoms.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                            >
                                <div className="flex-shrink-0">
                                    <item.icon className="h-6 w-6 text-primary-600" />
                                </div>
                                <span className="text-slate-700 font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-xl bg-amber-50 border border-amber-200 p-6 flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-1">Atenção aos sinais de alerta</h3>
                            <p className="text-amber-800 text-sm leading-relaxed">
                                Se você apresenta dor intensa, perda súbita de visão ou secreção purulenta, procure atendimento oftalmológico imediato. Estes não são sintomas típicos apenas de olho seco e exigem avaliação urgente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
