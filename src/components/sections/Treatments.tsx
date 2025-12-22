import { Droplet, Sparkles, Sun, ShieldCheck, Pill, Glasses } from 'lucide-react'

const treatments = [
    {
        title: 'Lágrimas Artificiais Específicas',
        description: 'Não é "qualquer colírio". Prescrevemos lubrificantes (sem conservantes, lipídicos, etc.) ideais para o SEU tipo de olho seco.',
        icon: Droplet,
    },
    {
        title: 'Higiene Palpebral',
        description: 'Protocolos de limpeza para tratar blefarites e desobstruir as glândulas que protegem a lágrima.',
        icon: Sparkles,
    },
    {
        title: 'Terapias Térmicas',
        description: 'Uso de compressas mornas e massagens palpebrais para melhorar a qualidade da secreção lipídica.',
        icon: Sun,
    },
    {
        title: 'Medicações Anti-inflamatórias',
        description: 'Em casos moderados a graves, podemos usar ciclosporina, corticoides ou antibióticos tópicos por tempo determinado.',
        icon: Pill,
    },
    {
        title: 'Oclusão de Pontos (Plugs)',
        description: 'Pequenos dispositivos que "tampam" o canal de drenagem, mantendo a lágrima natural no olho por mais tempo.',
        icon: ShieldCheck,
    },
    {
        title: 'Mudança de Hábitos',
        description: 'Orientações personalizadas sobre uso de telas, ambiente, alimentação e hidratação.',
        icon: Glasses,
    },
]

export function Treatments() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Opções de Tratamento Multimodal</h2>
                    <p className="text-lg text-slate-600">
                        O tratamento do olho seco é individualizado. Combinamos diferentes terapias para restaurar o equilíbrio dos seus olhos.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {treatments.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary-600 mb-4 shadow-sm">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-500 italic bg-slate-50 inline-block px-4 py-2 rounded-full border border-slate-200">
                        * A indicação de cada terapia depende exclusivamente da avaliação clínica presencial.
                    </p>
                </div>
            </div>
        </section>
    )
}
