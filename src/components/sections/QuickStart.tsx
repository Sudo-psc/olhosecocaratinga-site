import Link from 'next/link'
import { HelpCircle, Activity, Stethoscope } from 'lucide-react'

const cards = [
    {
        title: 'Sintomas Comuns',
        description: 'Sensação de areia, vermelhidão ou visão embaçada? Entenda os sinais.',
        icon: Activity,
        href: '#sintomas',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        title: 'Causas Possíveis',
        description: 'Telas, ar-condicionado ou idade? Descubra o que pode estar afetando você.',
        icon: HelpCircle,
        href: '#causas',
        color: 'bg-amber-50 text-amber-600',
    },
    {
        title: 'Quando Avaliar',
        description: 'Saiba o momento certo de procurar um especialista para diagnóstico.',
        icon: Stethoscope,
        href: '#avaliacao',
        color: 'bg-emerald-50 text-emerald-600',
    },
]

export function QuickStart() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">Por onde começar?</h2>
                    <p className="text-slate-600 mt-2">Navegue pelos tópicos principais para entender melhor sua condição</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                    {cards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.color} mb-4`}>
                                <card.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
