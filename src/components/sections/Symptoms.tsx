import { CheckCircle2, AlertTriangle } from 'lucide-react'

const symptomsList = [
    "Sensação de areia ou cisco nos olhos",
    "Ardência ou queimação constante",
    "Visão embaçada que melhora ao piscar",
    "Olhos vermelhos (especialmente ao fim do dia)",
    "Sensibilidade à luz (fotofobia)",
    "Cansaço visual ao usar computador ou celular",
    "Dificuldade para usar lentes de contato",
    "Lacrimejamento excessivo (sim, é um sinal de irritação!)"
]

export function Symptoms() {
    return (
        <section id="sintomas" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sintomas e Sinais de Alerta</h2>
                        <p className="text-lg text-slate-600">
                            Faça uma autoavaliação rápida. Você sente algum destes sintomas com frequência?
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-primary-600 h-6 w-6" />
                            Checklist de Sintomas
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {symptomsList.map((symptom, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="h-5 w-5 rounded border-2 border-slate-300 mt-0.5 flex-shrink-0"></div>
                                    <span className="text-slate-700 font-medium">{symptom}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <div className="bg-amber-50 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 border border-amber-100">
                                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-amber-900 mb-2">Identificou-se com vários sinais?</h4>
                                    <p className="text-amber-800 text-sm mb-4">
                                        O uso indiscriminado de colírios sem prescrição pode mascarar o problema.
                                        O ideal é investigar a causa raiz.
                                    </p>
                                    <a
                                        href="https://saraivavision.com.br/agendamento"
                                        className="inline-flex items-center text-sm font-bold text-amber-700 hover:text-amber-800 underline"
                                    >
                                        Agendar uma avaliação especializada &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
