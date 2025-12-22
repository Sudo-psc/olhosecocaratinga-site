'use client'

import Link from 'next/link'
import { Accordion } from '@/components/ui/Accordion'

const faqItems = [
    {
        title: 'O que é exatamente o olho seco?',
        content: 'É uma doença crônica multifatorial da superfície ocular caracterizada pela perda da homeostase (equilíbrio) do filme lacrimal. Pode ser causada por pouca produção de lágrima ou, mais comumente, pela rápida evaporação dela.'
    },
    {
        title: 'Olho seco tem cura?',
        content: 'Na maioria dos casos, o olho seco é uma condição crônica, ou seja, não tem "cura" definitiva, mas tem controle. Com o tratamento adequado, é possível aliviar os sintomas, prevenir complicações e manter uma excelente qualidade de vida.'
    },
    {
        title: 'O uso de telas piora o olho seco?',
        content: 'Sim. Quando focamos em telas (computador, celular), piscamos muito menos (cerca de 5x menos). Isso faz a lágrima evaporar mais rápido, causando ou agravando os sintomas.'
    },
    {
        title: 'Posso usar qualquer colírio?',
        content: 'Não. O uso indiscriminado de colírios (especialmente os que "clareiam" os olhos) pode piorar o quadro e causar efeito rebote. Use apenas lágrimas artificiais ou medicações prescritas pelo oftalmologista.'
    },
    {
        title: 'Como é feito o diagnóstico?',
        content: 'O diagnóstico é feito através de anamnese (histórico) e exame clínico com biomicroscopia. Podemos usar corantes vitais (fluoresceína, lissamina verde) e testes como o BUT (tempo de ruptura da lágrima) para classificar o tipo e gravidade.'
    },
    {
        title: 'Lente de contato causa olho seco?',
        content: 'O uso de lentes de contato pode desestabilizar o filme lacrimal e induzir ou piorar os sintomas de olho seco. É importante avaliar se o tipo de lente e a solução de limpeza estão adequados.'
    },
    {
        title: 'Preciso de cirurgia?',
        content: 'A cirurgia é reservada para casos muito específicos ou complicações. A grande maioria dos pacientes é tratada clinicamente com colírios, higiene palpebral, mudanças ambientais e, às vezes, procedimentos de consultório (como luz pulsada ou plugs).'
    },
    {
        title: 'Qual a relação com a menopausa?',
        content: 'Alterações hormonais, especialmente a queda de andrógenos e estrógenos na menopausa, afetam as glândulas que produzem a lágrima, tornando o olho seco muito comum em mulheres nessa fase.'
    }
]

export function FAQSection() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
                    <p className="text-lg text-slate-600">
                        Tire suas dúvidas sobre diagnóstico, tratamento e cuidados diários.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion items={faqItems} />

                    <div className="mt-10 text-center">
                        <Link
                            href="/faq"
                            className="text-primary-600 font-semibold hover:text-primary-700 hover:underline"
                        >
                            Ver todas as perguntas frequentes &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
