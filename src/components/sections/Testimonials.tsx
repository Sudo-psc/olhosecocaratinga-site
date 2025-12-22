import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Maria S.",
        text: "Sofria com olhos vermelhos e sensação de areia há anos. Achava que era normal. Após a avaliação com o Dr. Philipe, descobri a causa e iniciei o tratamento correto. O conforto visual mudou minha vida.",
        location: "Caratinga, MG"
    },
    {
        name: "João P.",
        text: "Trabalho o dia todo no computador e não conseguia ficar 2 horas sem pingar colírio. O tratamento personalizado e as orientações de hábitos fizeram toda a diferença.",
        location: "Santa Rita de Minas, MG"
    },
    {
        name: "Ana L.",
        text: "Atendimento excelente. O Dr. Philipe explica tudo com muita clareza e paciência. Recomendo para quem busca um oftalmologista de confiança.",
        location: "Caratinga, MG"
    }
]

export function Testimonials() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">O que dizem nossos pacientes</h2>
                    <p className="text-lg text-slate-600">
                        Histórias reais de quem recuperou o conforto visual.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                            <div className="flex gap-1 mb-4 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed">
                                &quot;{item.text}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-slate-900">{item.name}</p>
                                <p className="text-xs text-slate-500">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400">
                        * Depoimentos ilustrativos baseados em casos clínicos reais. A identidade dos pacientes foi preservada.
                    </p>
                </div>
            </div>
        </section>
    )
}
