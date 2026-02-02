import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#1F1F1F',
          white: '#F4F4F4',
        },
        accent: {
          orange: '#E45427',
        },
      },
      fontFamily: {
        arabic: ['IBM Plex Sans Arabic', 'Cairo', 'Noto Kufi Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

