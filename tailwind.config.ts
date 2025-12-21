import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0891b2', // cyan-600
                    hover: '#0e7490',   // cyan-700
                },
                secondary: {
                    DEFAULT: '#0e7490', // cyan-700
                    border: '#06b6d4',  // cyan-500
                },
                slate: {
                    850: '#1d283a', // Custom dark slate
                }
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
