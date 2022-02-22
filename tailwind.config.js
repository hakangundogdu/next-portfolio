module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        fade: 'fade 1s ease-out both',
        slide: 'slide 30s linear infinite alternate',
      },

      backgroundImage: {
        hero: "url('/images/hero-3.jpg')",
      },
    },
  },
  plugins: [],
};
