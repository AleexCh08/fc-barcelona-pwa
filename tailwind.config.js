/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'signal-red': '#fe3a3a',
        'carbon-ink': '#000000',
        'summit-white': '#ffffff',
        'ridge-gray': '#767676',
        'glacier-mist': '#f5f5f5',
        'trail-cream': '#f5f0e8',
        'base-camp-dark': '#0a1628',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'nav': '10px',
        'card': '20px',
        'pill': '35px',
      },
      boxShadow: {
        'cta': '0 2px 12px rgba(254, 58, 58, 0.25)',
        'patch': '0 4px 20px rgba(10, 22, 40, 0.4)',
      },
      spacing: {
        'element': '10px',
        'card-pad': '40px',
        'section-gap': '60px',
      },
      maxWidth: {
        'layout': '1200px',
      }
    },
  },
  plugins: [],
}