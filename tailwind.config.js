/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        darkIndigo: '#312e81',
      }
    },
    screens: {
      'xxxxsm': '380px', 
      'xxxsm': '600px',
      'xxsm': '700px',
      'xsm': '800px',
      'sm': '958px',
      'smd': '1000px',
    }
  },
  plugins: [],
}

