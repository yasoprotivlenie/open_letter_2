import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://yasoprotivlenie.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: "./tailwind.config.js",
    }),
  ],
});
