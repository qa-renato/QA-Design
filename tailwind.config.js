/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        abismo:    '#023c8f',
        nebulosa:  '#15b7fe',
        nucleo:    '#0065fe',
        aurora:    '#0c0a3b',
        cintilante:'#ebebed',
      },
      fontFamily: {
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
        // Noopla é proprietária — mapeada aqui para quando for disponibilizada localmente
        display: ['Noopla', 'Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-nucleo': 'linear-gradient(135deg, #0065fe 0%, #15b7fe 100%)',
        'gradient-aurora': 'linear-gradient(180deg, #0c0a3b 0%, #023c8f 100%)',
        'gradient-deep':   'linear-gradient(135deg, #0c0a3b 0%, #023c8f 60%, #0065fe 100%)',
      },
    },
  },
  plugins: [],
}
