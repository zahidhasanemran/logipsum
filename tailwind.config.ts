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
        space: ['var(--space-grotesk)'],
        jakarta: ['var(--plus-jakarta)'],
      },
      colors: {
        grey: '#575757',
        whitegrey: '#F0EFEB',
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
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        grey: '#575757',
        whitegrey: '#F0EFEB',
        lightgray: '#A0A0A0',
        black: '#000000',
        lightblack: '#131313',
        blue: '#40798C',
        skyblue: '#C8E5EE',
      }),
      boxShadow: {
        'media-card': '0 4px 4px 0 rgba(0, 0, 0, 0.25)', // x=0, y=4, blur=4, spread=0, color #000 25%
      },
    },
  },
  plugins: [],
}
export default config
