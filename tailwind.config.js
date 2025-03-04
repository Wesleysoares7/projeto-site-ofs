/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        franciscan: {
          brown: {
            lightest: "#F0E0D0", // Tom ainda mais claro de marrom
            lighter: "#E3C9A6", // Entre o mais claro e o light
            light: "#D4A373", // Tom mais claro original
            DEFAULT: "#8B4513", // Marrom padrão
            dark: "#5A3313", // Marrom mais escuro original
            darker: "#4A2710", // Tom mais escuro que o dark
            darkest: "#3B1F0C", // Tom ainda mais escuro
          },
          white: {
            DEFAULT: "#FFFFFF", // Branco puro
            off: "#F5F5F5", // Branco levemente acinzentado
          },
          gray: {
            light: "#E0E0E0", // Cinza claro
            DEFAULT: "#B0B0B0", // Cinza médio
            dark: "#707070", // Cinza escuro
          },
          accent: {
            gold: "#D4AF37", // Dourado para detalhes ou destaques
            green: "#A5BE00", // Verde suave para esperança ou natureza
          },
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Fonte padrão
        serif: ['"Merriweather"', "serif"], // Fonte elegante para textos destacados
      },
    },
  },
  plugins: [],
};
