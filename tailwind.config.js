/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        'primary': '#1f1f1f',
        'secondary': '#ff2093'
      },
      fontFamily: {
        'kallisto': 'Kallisto',
        'lexend-deca': ['Lexend Deca']

      },
      backgroundSize: {
        '100%': '100%',
      }
    },
  },
  plugins: [],
}

