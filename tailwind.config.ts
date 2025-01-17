import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'blob-spin': "blob-spin 25s linear infinite",
        'blob-bounce': "blob-bounce 15s ease-in-out infinite",
        'gradient': "gradient 15s ease infinite",
        'pulse': "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        'blob-spin': {
          '0%': {
            transform: 'rotate(0deg) translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'rotate(120deg) translate(40px, -40px) scale(1.2)',
          },
          '66%': {
            transform: 'rotate(240deg) translate(-40px, 40px) scale(0.9)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(0px, 0px) scale(1)',
          },
        },
        'blob-bounce': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translate(50px, -50px) scale(1.1)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
