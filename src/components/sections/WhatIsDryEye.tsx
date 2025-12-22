import { Droplet } from 'lucide-react'

export function WhatIsDryEye() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                            <Droplet className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">O que é Olho Seco?</h2>
                    </div>

                    <div className="prose prose-lg text-slate-600">
                        <p className="lead text-xl font-medium text-slate-800 mb-6">
                            Não é apenas &quot;falta de lágrima&quot;. É uma condição crônica que afeta a saúde e a proteção dos seus olhos.
                        </p>
                        <p className="mb-4">
                            A Síndrome do Olho Seco ocorre quando suas lágrimas não conseguem lubrificar os olhos adequadamente. Isso pode acontecer por dois motivos principais:
                        </p>
                        <ul className="space-y-4 my-6 list-none pl-0">
                            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</span>
                                <span>
                                    <strong>Produção insuficiente:</strong> Seus olhos não produzem volume de água suficiente para manter a hidratação.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">2</span>
                                <span>
                                    <strong>Evaporação rápida (Mais comum):</strong> A lágrima é produzida, mas evapora muito rápido porque falta a camada de gordura (lipídica) que a protege.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Sem tratamento, o olho seco pode causar inflamação, danos na superfície da córnea e desconforto constante que atrapalha o trabalho e o lazer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
