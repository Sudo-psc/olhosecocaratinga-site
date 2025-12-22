import type { Config } from 'tailwindcss'
import { cyan, blue } from 'tailwindcss/colors'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: cyan,
                secondary: blue,
                slate: {
                    850: '#1d283a',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-sora)', 'var(--font-outfit)', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '12px',
                xl: '12px',
            },
            boxShadow: {
                '3d': '0px 20px 60px 0px rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}

export default config
