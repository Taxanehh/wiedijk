import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'expand-left': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'expand-right': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'fadeOut': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeInFast': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideOutUp': {
          '0%': {
            transform: 'translateY(30%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'expand-left':  'expand-left 1s ease-out forwards',
        'expand-right': 'expand-right 1s ease-out forwards',
        'fadein': 'fadeOut 1s ease-in-out forwards',
        'fadeInFast': 'fadeIn 0.1s ease-in forwards',
        'slideOutUp': 'slideOutUp 0.6s ease-out forwards',
        'fadeInSlideUp': 'fadeInFast 0.1s ease-in forwards, slideOutUp 1s ease-out forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
