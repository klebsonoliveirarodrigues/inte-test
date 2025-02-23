/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Analisa arquivos nas pastas pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Analisa arquivos nas pastas components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
