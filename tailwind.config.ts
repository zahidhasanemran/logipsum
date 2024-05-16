import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        space: ['var(--space-grotesk)'],
        jakarta: ['var(--plus-jakarta)'],
      },
      colors: {
        gray: '#575757',
        lightgray: '#A0A0A0',
        black: '#000000',
        lightblack: '#131313',
        blue: '#40798C',
        skyblue: '#C8E5EE',
      },
      screens: {
        xs: '575px',
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1730px',
      },
    },
  },
  plugins: [],
}
export default config
