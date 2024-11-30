// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    expressiveCode({
      themes: ["dracula", "min-light"],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: "transparent",
          editorActiveTabBorderColor: "#80808080",
          editorTabBarBorderBottomColor: "#80808080",
          tooltipSuccessBackground: "black",
        },
        uiFontFamily: "inherit",
        borderColor: "#80808080",
      },
    }),
    mdx(),
  ],
  site: "https://nathy.dev/",
  prefetch: true,
});
