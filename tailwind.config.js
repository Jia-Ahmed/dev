// // /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backdropBlur: {
//         'xs': '2px',
//         'sm': '4px',
//         'md': '8px',
//       },
//       animation: {
//         'bounce': 'bounce 2s infinite',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
      },
      keyframes: {
        // Text ko smooth slide-in karne ke liye
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Background gradient fade-in ke liye
        softFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'softFade': 'softFade 0.4s ease-in-out forwards',
      },
    },
  },
  plugins: [
    // Description text ko control karne ke liye ye plugin install kar lein:
    // npm install @tailwindcss/line-clamp
    require('@tailwindcss/line-clamp'),
  ],
}

