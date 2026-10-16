/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kyoto: {
          vermilion: '#E83929', // Torii red / 茜色
          indigo: '#1C2938',    // Traditional indigo / 藍色
          matcha: '#688258',    // Matcha green / 抹茶
          gold: '#C59B27',      // Temple gold / 金箔
          sand: '#F7F5F0',      // Japanese paper / 和紙白
          stone: '#706E6B',     // Garden stone / 枯山水石色
          sakura: '#FEDFE1',    // Sakura pink / 桜色
          night: '#131821',     // Gion night / 宵闇
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans SC"',
          '"Noto Sans TC"',
          '"Noto Sans JP"',
          'sans-serif'
        ],
        serif: [
          '"Noto Serif JP"',
          '"Noto Serif SC"',
          '"Noto Serif TC"',
          'Georgia',
          'serif'
        ]
      }
    },
  },
  plugins: [],
}
