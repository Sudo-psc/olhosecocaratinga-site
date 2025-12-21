'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onClick?: () => void
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-slate-900 hover:text-primary-600 focus:outline-none"
                onClick={onClick}
            >
                <span>{title}</span>
                <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="text-slate-600">{children}</div>
            </div>
        </div>
    )
}

interface AccordionProps {
    items: {
        title: string
        content: React.ReactNode
    }[]
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-6">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
