import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "var(--bg)",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "var(--darkBg)",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#1b1b1b",

        // themes
        goblin: "#00FF00",
        paladin: "#00e1ff",
        necromancer: "#bd52eb",
        tiefling: "#FF0000",
        barbarian: "#ffaa00",
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
