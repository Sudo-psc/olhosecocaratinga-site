import { Monitor, Wind, Clock, Pill, Droplets, Sun } from 'lucide-react'

const causes = [
    {
        title: 'Telas e Dispositivos',
        description: 'Ao usar computador ou celular, piscamos 5x menos. Isso faz a lágrima evaporar antes de ser reposta.',
        icon: Monitor,
    },
    {
        title: 'Ambiente Seco',
        description: 'Ar-condicionado, ventiladores diretos e clima seco retiram a umidade natural dos olhos.',
        icon: Wind,
    },
    {
        title: 'Envelhecimento',
        description: 'Com a idade (especialmente após 50 anos), a produção e qualidade da lágrima diminuem naturalmente.',
        icon: Clock,
    },
    {
        title: 'Uso de Medicamentos',
        description: 'Antialérgicos, antidepressivos, diuréticos e outros remédios podem ter "olho seco" como efeito colateral.',
        icon: Pill,
    },
    {
        title: 'Lentes de Contato',
        description: 'O uso prolongado ou a higiene inadequada das lentes pode desestabilizar o filme lacrimal.',
        icon: Droplets,
    },
    {
        title: 'Disfunções Palpebrais',
        description: 'Blefarites e problemas nas glândulas de Meibomius impedem a produção da gordura que protege a lágrima.',
        icon: Sun,
    },
]

export function Causes() {
    return (
        <section id="causas" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que isso acontece?</h2>
                    <p className="text-lg text-slate-600">
                        Entenda os fatores do dia a dia que podem estar prejudicando sua visão.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {causes.map((cause, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm mb-4 group-hover:bg-primary-50 group-hover:scale-110 transition-all">
                                <cause.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{cause.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{cause.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
