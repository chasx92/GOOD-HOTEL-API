import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'sans-serif'],
      },
      colors: {
        background: '#F2F2F7',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#C3A36E',
          dark: '#B8935C',
          light: '#D4B886',
        },
      },
      boxShadow: {
        'gold-sm': '0 1px 2px rgba(195, 163, 110, 0.1), 0 2px 4px rgba(195, 163, 110, 0.08)',
        'gold-md': '0 4px 8px rgba(195, 163, 110, 0.12), 0 2px 4px rgba(195, 163, 110, 0.08)',
        'gold-lg': '0 8px 16px rgba(195, 163, 110, 0.16), 0 4px 8px rgba(195, 163, 110, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
