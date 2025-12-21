import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/client'

// Componentes customizados para renderizar o Portable Text
const components: PortableTextComponents = {
    types: {
        // Imagens
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }

            return (
                <figure className="my-8">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                            src={urlFor(value).width(1200).url()}
                            alt={value.alt || 'Imagem do artigo'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
    },
    marks: {
        // Links
        link: ({ children, value }) => {
            const target = value?.blank ? '_blank' : undefined
            const rel = value?.blank ? 'noopener noreferrer' : undefined

            // Links externos
            if (value?.href?.startsWith('http')) {
                return (
                    <a
                        href={value.href}
                        target={target}
                        rel={rel}
                        className="text-primary-600 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-500 dark:text-primary-400 dark:decoration-primary-600 dark:hover:text-primary-300"
                    >
                        {children}
                    </a>
                )
            }

            // Links internos
            return (
                <Link
                    href={value?.href || '#'}
                    className="text-primary-600 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-500 dark:text-primary-400 dark:decoration-primary-600 dark:hover:text-primary-300"
                >
                    {children}
                </Link>
            )
        },
        // Código inline
        code: ({ children }) => (
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                {children}
            </code>
        ),
    },
    block: {
        // Headings
        h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="mb-2 mt-6 text-lg font-semibold text-slate-900 dark:text-white">{children}</h4>
        ),
        // Parágrafo normal
        normal: ({ children }) => (
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{children}</p>
        ),
        // Citação
        blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-primary-500 bg-slate-50 py-4 pl-6 pr-4 italic text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {children}
            </blockquote>
        ),
    },
    list: {
        // Lista não ordenada
        bullet: ({ children }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">
                {children}
            </ul>
        ),
        // Lista ordenada
        number: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
}

interface PortableTextRendererProps {
    value: PortableTextBlock[]
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
    return <PortableText value={value} components={components} />
}
