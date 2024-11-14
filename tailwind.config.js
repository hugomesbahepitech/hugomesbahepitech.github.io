// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chemins vers vos fichiers React
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out', // Durée de l'animation
      },
    },
  },
  plugins: [],
};