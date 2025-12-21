import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
        outline: 'border-2 border-secondary-border text-secondary hover:bg-slate-50 focus:ring-secondary',
    }

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}
