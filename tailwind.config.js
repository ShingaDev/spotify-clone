module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818',
        activeWhite: '#fff',
        gradientPurple: '#450af5',
        gradientGreen: '#c4efd9'
      },
      fontSize: {
        s: '0.813rem'
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
        '1': '1ms',
        '2': '2ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  corePlugins: {
    preflight: false,
  },
}
