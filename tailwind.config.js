module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideTop: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
       animation: {
        slideTop: 'slideTop 1s ease forwards',
      },
      boxShadow: {
        'custom': '0 0 5px #0ef, 0 0 25px #0ef',
        'hover-custom': '0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 100px cyan, 0 0 200px cyan',
      },
      borderRadius: {
        '40px': '40px',
      },
      fontSize: {
        '16px': '16px',
      },
      spacing: {
        '12px': '12px',
        '28px': '28px',
      },
      colors: {
        'dark-blue': '#081b29',
      },
    },
  },
  plugins: [],
}
