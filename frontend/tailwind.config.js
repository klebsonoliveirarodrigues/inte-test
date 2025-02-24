/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Analisa arquivos nas pastas pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Analisa arquivos nas pastas components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
