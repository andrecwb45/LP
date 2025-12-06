/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        imperial: {
          DEFAULT: '#0C4A6E',
          dark: '#075985',
        },
        onyx: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
        },
        mist: {
          DEFAULT: '#F1F5F9',
          dark: '#E2E8F0',
        }
      },
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
