/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
          extend: {
                  colors: {
                            obsidian: '#0d0d0d',
                            charcoal: { DEFAULT: '#1a1a1a', light: '#252525', lighter: '#2e2e2e' },
                            crimson: { DEFAULT: '#8b0000', bright: '#c0392b', glow: '#e74c3c' },
                            violet: { dark: '#1e0a20', DEFAULT: '#4a0e4e', light: '#7b2d80' },
                            ash: { DEFAULT: '#b0b0b0', dark: '#6b6b6b', light: '#d4d4d4' },
                            gold: '#c9a84c',
                  },
                  fontFamily: { cinzel: ['Cinzel', 'serif'], inter: ['Inter', 'sans-serif'] },
                  backgroundImage: {
                            'gothic-gradient': 'radial-gradient(ellipse at top left, #1e0a20 0%, #0d0d0d 50%, #0d0000 100%)',
                            'card-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
                            'crimson-gradient': 'linear-gradient(135deg, #8b0000 0%, #4a0e4e 100%)',
                  },
                  boxShadow: {
                            'crimson': '0 0 20px rgba(139, 0, 0, 0.3)',
                            'crimson-lg': '0 0 40px rgba(139, 0, 0, 0.4)',
                            'card': '0 4px 24px rgba(0, 0, 0, 0.6)',
                            'card-hover': '0 8px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(139, 0, 0, 0.15)',
                  },
                  animation: {
                            'fade-in': 'fadeIn 0.4s ease-out',
                            'slide-up': 'slideUp 0.4s ease-out',
                            'scale-in': 'scaleIn 0.3s ease-out',
                            'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                  },
                  keyframes: {
                            fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                            slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                            scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
                            glowPulse: { '0%, 100%': { boxShadow: '0 0 20px rgba(139, 0, 0, 0.3)' }, '50%': { boxShadow: '0 0 40px rgba(139, 0, 0, 0.6)' } },
                  },
          },
    },
    plugins: [],
}
