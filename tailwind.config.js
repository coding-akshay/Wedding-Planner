/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 10s infinite',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Include any necessary plugins
  ],
};
