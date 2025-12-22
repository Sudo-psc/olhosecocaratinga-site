import { ClipboardCheck, Microscope, ScanEye } from 'lucide-react'

export function Evaluation() {
    return (
        <section id="avaliacao" className="py-16 bg-slate-900 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <div className="inline-block px-3 py-1 bg-primary-900/50 border border-primary-700 rounded-full text-primary-300 text-sm font-medium mb-4">
                            Protocolo Saraiva Vision
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Como avaliamos o Olho Seco?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Na Saraiva Vision, não tratamos apenas o sintoma. Buscamos a causa. Nossa avaliação é detalhada para classificar seu tipo de olho seco e definir a melhor estratégia.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg">
                                    <ClipboardCheck className="h-6 w-6 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">1. Anamnese Investigativa</h3>
                                    <p className="text-slate-400 text-sm">
                                        Mapeamos seus hábitos, ambiente de trabalho, uso de medicamentos e histórico de saúde para identificar gatilhos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg">
                                    <ScanEye className="h-6 w-6 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">2. Avaliação da Superfície Ocular</h3>
                                    <p className="text-slate-400 text-sm">
                                        Usamos biomicroscopia avançada para examinar a saúde das pálpebras, cílios e da córnea.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg">
                                    <Microscope className="h-6 w-6 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">3. Testes Específicos</h3>
                                    <p className="text-slate-400 text-sm">
                                        Realizamos testes de produção lacrimal (Schirmer), tempo de ruptura do filme lacrimal (BUT) e uso de corantes vitais quando necessário.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary-900/20"
                            >
                                Agendar Minha Avaliação
                            </a>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl transform rotate-3"></div>
                        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 relative shadow-2xl">
                            <h3 className="text-xl font-bold mb-4 text-primary-400">Por que avaliar?</h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2.5"></span>
                                    <span>Para diferenciar olho seco de alergias ou infecções.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2.5"></span>
                                    <span>Para saber se o problema é falta de água ou falta de gordura na lágrima.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2.5"></span>
                                    <span>Para indicar o tratamento correto e evitar gastos com colírios ineficazes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
