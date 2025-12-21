import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={twMerge(
                'rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl border border-slate-100',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
