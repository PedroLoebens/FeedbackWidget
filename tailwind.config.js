module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#8257e6',
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
