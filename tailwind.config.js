/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-section": "linear-gradient(to right bottom, rgb(0, 0, 0, 0.60), rgb(0, 0, 0, 0.60)),url(/contact-section.jpg)"
      },
      fontSize: {
        h1: [
          '90px',
          {
            lineHeight: '90px',
            fontWeight: '700',
          },
        ],
        h2: [
          '48px',
          {
            lineHeight: '56px',
            fontWeight: '500',
          },
        ],
        h3: [
          '24px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        h4: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        'sub-heading': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        footnote: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        button: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        primary: "#0065CC",
        secondary: "rgba(0,101,204,0.6)",
        "light-grey": "#687076",
        "sub-head": "#2e2e2e80",
        subtitle: "#00000073",
        grey: "rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        'inner-border-radius': 'calc(10px - 8px)',
      },
    },
  },
  plugins: [],
})
