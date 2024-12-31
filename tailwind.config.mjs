import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import tailwindScrollbar from "tailwind-scrollbar";
import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#fefae0",
        text: "#000",
        border: "#000",
        main: "#ffaa00",

        // dark mode
        darkBg: "#000",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#1b1b1b",
        darkMain: "#9500FF",

        // themes
        goblin: "#00FF00",
        nesssie: "#00e1ff",
        mothman: "#bd52eb",
        chupacabra: "#FF0000",
        squatch: "#ffaa00",
      },
      borderRadius: {
        base: "8px",
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
        pixel: ["VT323", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        w700: { max: "700px" },
        w500: { max: "500px" },
        w400: { max: "400px" },
        w800: { max: "800px" },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "scroll-reverse": "scroll-reverse 40s linear infinite",
      },
      typography: (theme) => ({
        lightMode: {
          css: {
            "--tw-prose-kbd": theme("colors.text"),
            "--tw-prose-quote-borders": theme("colors.text"),
            "--tw-prose-bullets": theme("colors.text"),
            "--tw-prose-code": theme("colors.text"),
          },
        },
        darkMode: {
          css: {
            "--tw-prose-kbd": theme("colors.darkText"),
            "--tw-prose-quote-borders": theme("colors.darkText"),
            "--tw-prose-bullets": theme("colors.darkText"),
            "--tw-prose-code": theme("colors.darkText"),
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), typography, tailwindScrollbar],
};
