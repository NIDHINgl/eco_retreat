module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            cinzel: ['Cinzel', 'serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            dancing: ['Dancing Script', 'cursive'],
            oswald: ['Oswald', 'sans-serif'],
            sans: ['Raleway', 'sans-serif'],
          },
          spacing: {
            '10': '10px',
          },
          fontSize: {
            '5xl': '5rem',
          },
          fontWeight: {
            '500': '500',
          },
          colors: {
            customBlack: '#212121',
            customText:'#254336',
          },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
