/** @type {import('@tailwindcss/postcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9FAFB",
          text: "#1C1C1E",
          accent: "#6366F1",
          muted: "#6B7280",
          border: "#E5E7EB",
          highlight: "#E0E7FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["EB Garamond", "serif"],
      },
      keyframes: {
        softReveal: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        softReveal: 'softReveal 0.4s ease-out forwards',
      },
      // animation: {
      //       'fade-in-out': 'fadeInOut 1.5s ease-in-out forwards',
      //     },
      //     keyframes: {
      //   fadeInOut: {
      //     '0%, 100%': { opacity: 0 },
      //     '10%, 90%': { opacity: 1 },
      //   },
      // },
    },
  },
  plugins: [],
}; 

// extend: {
//   animation: {
//     'fade-in-out': 'fadeInOut 8s ease-in-out forwards',
//   },
//   keyframes: {
//     fadeInOut: {
//       '0%, 100%': { opacity: 0 },
//       '10%, 90%': { opacity: 1 },
//     },
//   },
// }


// tailwind.config.js
