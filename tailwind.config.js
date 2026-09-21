module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx}',
    './content/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf8',
          100: '#d5f5ee',
          200: '#aeebdd',
          300: '#79d9c7',
          400: '#3fbfaa',
          500: '#1fa392',
          600: '#148577',
          700: '#146b61',
          800: '#15564f',
          900: '#154842',
          950: '#062a27',
        },
        ink: {
          50: '#f4f6f8',
          100: '#e4e8ee',
          200: '#ccd4df',
          300: '#a8b5c7',
          400: '#7e8fa8',
          500: '#5f718c',
          600: '#4a5a73',
          700: '#3d4a5e',
          800: '#353f50',
          900: '#2f3745',
          950: '#0b1020',
        },
        sand: {
          50: '#f7f5f1',
          100: '#efebe3',
          200: '#ddd5c6',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        panel: 'var(--shadow-panel)',
        preview: 'var(--shadow-preview)',
        glow: 'var(--shadow-glow)',
      },
      maxWidth: {
        content: '74rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.45s ease-out both',
        'rise-in': 'riseIn 0.55s cubic-bezier(0.22,1,0.36,1) both',
        'preview-in': 'previewIn 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'chip-in': 'chipIn 0.35s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        previewIn: {
          from: { opacity: '0', transform: 'translateY(18px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        chipIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
