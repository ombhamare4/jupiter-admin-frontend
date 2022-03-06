module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme("colors.gray.200"),
              borderTopWidth: "1px",
              marginTop: "2rem",
              marginBottom: "2rem",
            },
            "ol > li::before": {
              color: theme("colors.gray.900"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.900"),
            },
          },
        },
      }),
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "500px" },
    },
  },
  plugins: [],
};
