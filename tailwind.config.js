/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:'#10a9ca',
          '50': '#edfcfe',
          '100': '#d1f7fc',
          '200': '#a9edf8',
          '300': '#6edef2',
          '400': '#3dcae6',
          '500': '#10a9ca',
          '600': '#1087aa',
          '700': '#146c8a',
          '800': '#1a5970',
          '900': '#1a4a5f',
          '950': '#0b3041',
        }       
      },
    },
  },
  plugins: [],
}
