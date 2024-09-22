import type { ThemeObjectOrShikiThemeName } from "astro-expressive-code";

type Config = {
  author: string;
  title: string;
  description: string;
  lang: string;
  themes: {
    dark: ThemeObjectOrShikiThemeName;
    light: ThemeObjectOrShikiThemeName;
  };
};

export default {
  author: "nathy",
  title: "nathy.dev",
  description: "nathy mackinlay's personal site",
  lang: "en",
  themes: {
    dark: "github-dark",
    light: "github-light",
  },
} satisfies Config;
