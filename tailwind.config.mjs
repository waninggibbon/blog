import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#FFAA00",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#fefae0",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#1D1F27",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#1b1b1b",
      },
      borderRadius: {
        base: "px",
      },
      boxShadow: {
        light: "4px 4px 0px 0px #000",
        dark: "4px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      fontFamily: {
        sans: ["Red Hat Text Variable", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        w700: { max: "700px" },
        w500: { max: "500px" },
        w400: { max: "400px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
