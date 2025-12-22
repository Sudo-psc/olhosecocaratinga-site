import { Sun, Eye, Wind, ShieldAlert } from 'lucide-react'

export function DailyTips() {
    return (
        <section className="py-16 bg-primary-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Dicas Práticas para o Dia a Dia</h2>
                        <p className="text-lg text-slate-600">
                            Pequenas mudanças de hábito podem trazer alívio imediato.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                                    <Eye className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Regra 20-20-20</h3>
                                    <p className="text-sm text-slate-600">
                                        A cada <strong>20 minutos</strong> de tela, olhe para algo a <strong>20 pés</strong> (6 metros) de distância por <strong>20 segundos</strong>. Isso relaxa a musculatura e estimula o piscar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                                    <Wind className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Cuidado com o Ar</h3>
                                    <p className="text-sm text-slate-600">
                                        Evite ventiladores soprando direto no rosto. No carro, direcione a saída do ar-condicionado para longe dos olhos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                                    <Sun className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Higiene Palpebral</h3>
                                    <p className="text-sm text-slate-600">
                                        Lavar os cílios com shampoo neutro infantil ou produtos específicos ajuda a desobstruir as glândulas de gordura.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                                    <ShieldAlert className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Evite Automedicação</h3>
                                    <p className="text-sm text-slate-600">
                                        Colírios &quot;clareadores&quot; (vasoconstritores) podem causar efeito rebote e piorar o ressecamento a longo prazo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500 italic">
                            * Estas dicas são auxiliares e não substituem o tratamento médico prescrito.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
