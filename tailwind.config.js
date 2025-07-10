// tailwind.config.js
export default {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '@/assets/base.css',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text:       'var(--color-text)',
        heading:    'var(--color-heading)',
        border:     'var(--color-border)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
