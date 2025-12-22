import { Award, Heart, Users } from 'lucide-react'


export function WhyUs() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Doctor Bio */}
                    <div className="order-2 lg:order-1">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
                            {/* Placeholder for Doctor's Image */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                <span className="text-slate-400 font-medium">Foto Dr. Philipe Saraiva</span>
                            </div>
                            {/* <Image 
                                src="/images/dr-philipe.jpg" 
                                alt="Dr. Philipe Saraiva Cruz" 
                                fill 
                                className="object-cover"
                            /> */}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Por que tratar na Saraiva Vision?
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-primary-700 mb-2">Dr. Philipe Saraiva Cruz</h3>
                            <p className="text-slate-600 font-medium mb-4">CRM-MG 69.870 | Oftalmologista</p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Com atuação focada em oftalmologia clínica e cirúrgica, o Dr. Philipe dedica-se ao diagnóstico preciso e tratamento humanizado das doenças oculares.
                                Na Saraiva Vision, implementamos protocolos modernos para o manejo do olho seco, visando não apenas o alívio momentâneo, mas a saúde da superfície ocular a longo prazo.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm border border-slate-100">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Medicina Baseada em Evidências</h4>
                                    <p className="text-sm text-slate-600">Nossos tratamentos seguem as diretrizes mais atuais da oftalmologia mundial.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm border border-slate-100">
                                    <Heart className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Atendimento Humanizado</h4>
                                    <p className="text-sm text-slate-600">Ouvimos suas queixas com atenção e explicamos cada etapa do tratamento.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm border border-slate-100">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Referência em Caratinga</h4>
                                    <p className="text-sm text-slate-600">Localização acessível e estrutura preparada para cuidar da sua visão.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
