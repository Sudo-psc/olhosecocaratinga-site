import { StructuredData } from '@/components/StructuredData'
import { generateArticleSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, MEDICAL_DISCLAIMER } from '@/lib/structured-data'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = await params
    // Dados mock do post (em produção viria do Sanity)
    const postData = {
        title: 'Guia Completo: Tratamento de Olho Seco com Lágrimas Artificiais',
        description: 'Aprenda tudo sobre tipos de lágrimas artificiais, como escolher a ideal para seu tipo de olho seco, técnicas corretas de aplicação e cuidados diários.',
        author: 'Dr. Philipe Saraiva Cruz',
        publishDate: '2024-01-10T10:00:00Z',
        modifyDate: '2024-01-15T14:30:00Z',
        content: `Olho seco é uma condição que afeta milhões de pessoas worldwide, e as lágrimas artificiais são uma das principais formas de tratamento.

Neste guia completo, vamos abordar:

## Tipos de Lágrimas Artificiais

As lágrimas artificiais podem ser classificadas pela sua viscosidade:

### Lágrimas de Baixa Viscosidade
- Indicadas para olho seco aquoso
- Contêm principalmente água e eletrólitos
- Proporcionam alívio rápido mas duram menos tempo

### Lágrimas de Média Viscosidade
- Balance entre lubrificação e permanência
- Adequadas para a maioria dos casos
- Podem conter lipídios em pequenas quantidades

### Lágrimas de Alta Viscosidade
- Indicadas para olho seco evaporativo
- Formam uma camada protetora mais duradoura
- Podem causar visão turva temporariamente

## Como Escolher a Lágrima Ideal

A escolha da lágrima artificial ideal depende de:

1. **Tipo de Olho Seco**: Aquoso, evaporativo ou misto
2. **Sintomas Presentes**: Ardência, vermelhidão, sensação de corpo estranho
3. **Ambiente**: Clima seco, uso de ar condicionado
4. **Frequência de Uso**: Diário, pontual ou noturno

## Técnica Correta de Aplicação

Para máxima eficácia:

1. **Lave bem as mãos** antes da aplicação
2. **Incline a cabeça ligeiramente** para trás
3. **Puxe gentilmente a pálpebra inferior** para criar um bolsão
4. **Aplique uma gota** no bolsão formado
5. **Blinque devagar** algumas vezes para distribuir
6. **Evite contato direto** com a ponta do frasco

## Armazenamento e Conservação

- **Mantenha em local fresco** e ao abrigo da luz solar
- **Não compartilhe o frasco** com outras pessoas
- **Respeite o prazo de validade** após aberto
- **Descarte corretamente** o produto vencido

## Cuidados Diários Adicionais

Além das lágrimas artificiais:

- **Beba bastante água** durante o dia
- **Use umidificador de ar** em ambientes secos
- **Faça pausas regulares** ao usar telas
- **Use óculos de proteção** em ambientes ventosos
- **Evite ambientes com ar condicionado** por longos períodos

## Quando Procurar um Especialista

Consulte um oftalmologista se:

- Os sintomas persistirem apesar do tratamento
- Houver piora progressiva dos sintomas
- Surgir dor intensa ou alteração na visão
- Precisar usar lágrimas artificiais mais de 4x ao dia

## Conclusão

As lágrimas artificiais são aliados importantes no tratamento do olho seco, mas devem ser usadas corretamente e sempre sob orientação médica. Cada caso é único e merece uma abordagem personalizada.`,
        imageUrl: 'https://img.youtube.com/vi/blog-olho-seco/maxresdefault.jpg'
    }

    // Schema para artigo
    const articleSchema = generateArticleSchema(
        postData.title,
        postData.description,
        postData.author,
        postData.publishDate,
        postData.modifyDate,
        postData.content,
        postData.imageUrl
    )

    // Schema para informações do negócio
    const localBusinessSchema = generateLocalBusinessSchema()

    // Schema de navegação
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: postData.title, url: `/blog/${slug}` }
    ])

    return (
        <>
            {/* Dados estruturados */}
            <StructuredData data={articleSchema} />
            <StructuredData data={localBusinessSchema} />
            <StructuredData data={breadcrumbSchema} />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                        {postData.title}
                                    </h1>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                                            Dr. Philipe Saraiva Cruz
                                        </span>
                                        <span className="text-blue-200">
                                            {new Date(postData.publishDate).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                    <p className="text-lg text-blue-100 mb-6">
                                        Guia completo para escolher e usar lágrimas artificiais corretamente
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://saraivavision.com.br/agendamento"
                                            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                        >
                                            Agendar Consulta
                                        </a>
                                        <Link
                                            href="/blog"
                                            className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                        >
                                            Mais Artigos
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={postData.imageUrl}
                                        alt={postData.title}
                                        width={640}
                                        height={360}
                                        className="rounded-lg shadow-2xl w-full"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <article className="bg-white rounded-lg shadow-sm border border-gray-200">
                            {/* Article Header */}
                            <header className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src="/images/author-avatar.jpg"
                                            alt={postData.author}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">{postData.author}</p>
                                            <p className="text-sm text-gray-500">CRM-MG 69.870</p>
                                        </div>
                                    </div>
                                    <time className="text-sm text-gray-500">
                                        Publicado em {new Date(postData.publishDate).toLocaleDateString('pt-BR')}
                                    </time>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {postData.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {postData.description}
                                </p>
                            </header>

                            {/* Article Body */}
                            <div className="p-6 prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{
                                    __html: postData.content
                                        .replace(/\n/g, '<br />')
                                        .replace(/## (.+)/g, '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h3>')
                                        .replace(/### (.+)/g, '<h4 class="text-xl font-semibold text-gray-900 mb-3 mt-6">$1</h4>')
                                        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-blue-600">$1</strong>')
                                        .replace(/^- (.+)/gm, '<ul class="list-disc list-inside space-y-2 mb-6 ml-6"><li>$1</li></ul>')
                                        .replace(/^\d+\. (.+)/gm, '<p class="mb-4"><span class="font-semibold text-blue-600">$1</span></p>')
                                }} />
                            </div>

                            {/* Article Footer */}
                            <footer className="p-6 border-t border-gray-200 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-gray-500">
                                            Última atualização:
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            {new Date(postData.modifyDate).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:text-blue-800 transition-colors"
                                            aria-label="Compartilhar no Facebook"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s5.373-12 12-12 12 12 5.893.407 11.407 11 1.373v6.834c0 5.52 4.467 10 10 10s-4.48 10-10 10zm3.5-1c0 2.707 0 5.293-1.293 7.293-4.293v4.586c0 3-2.586 6-6 6s-3 6-6-6z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:text-blue-800 transition-colors"
                                            aria-label="Compartilhar no Twitter"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825-.748l-.177-.177c-1.023-.297-1.642-.828-2.163-1.377-.243-.044-.56-.084-.827-.145l-.406-.075-.701-.149a8.994 8.994 0 00-7.303 3.007c-2.258 0-4.293-.725-5.901-2.014l-4.293 4.293a1 1 0 01-1.414 1.414l4.293 4.293c1.707 0 3.562.725 5.099 2.207l4.389 4.388a1 1 0 00.707.293z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </footer>
                        </article>

                        {/* Related Posts */}
                        <section className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Artigos Relacionados
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: 'Causas do Olho Seco',
                                        slug: 'causas-olho-seco',
                                        excerpt: 'Conheça as principais causas e fatores de risco.'
                                    },
                                    {
                                        title: 'Diagnóstico Diferencial',
                                        slug: 'diagnostico-diferencial',
                                        excerpt: 'Como diferenciar olho seco de outras condições oculares.'
                                    },
                                    {
                                        title: 'Tratamentos Avançados',
                                        slug: 'tratamentos-avancados',
                                        excerpt: 'Opções modernas para casos refratários.'
                                    }
                                ].map((post, index) => (
                                    <Link
                                        key={index}
                                        href={`/blog/${post.slug}`}
                                        className="group block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                                            Ler mais →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Precisa de avaliação especializada?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Agende uma consulta para diagnóstico completo e tratamento personalizado
                            </p>
                            <a
                                href="https://saraivavision.com.br/agendamento"
                                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                            >
                                Agendar Consulta
                            </a>
                        </section>

                        {/* Disclaimer */}
                        <section className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                            <p className="text-amber-800 font-medium">
                                {MEDICAL_DISCLAIMER}
                            </p>
                        </section>
                    </div>
                </main>

                {/* Contact Information */}
                <section className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-6">
                                Saraiva Vision Care LTDA
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-2">Endereço</h3>
                                    <p className="text-gray-300">
                                        Rua Catarina Maria Passos, 97<br />
                                        Santa Zita, Caratinga - MG<br />
                                        CEP: 35300-000
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Contato</h3>
                                    <p className="text-gray-300">
                                        Telefone: +55 33 99860-1427<br />
                                        Website: saraivavision.com.br
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Horários</h3>
                                    <p className="text-gray-300">
                                        Segunda a Sexta: 08:00 - 18:00<br />
                                        Sábado: 08:00 - 12:00<br />
                                        Domingo: Fechado
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-700">
                                <p className="text-sm text-gray-400">
                                    Responsável Técnico: Dr. Philipe Saraiva Cruz - CRM-MG 69.870
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
