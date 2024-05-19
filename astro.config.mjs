import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), preact()],
  site: "https://simplicity.cl/owine",
  base: "/owine",
  outDir: "./owine",
  build: {
    assetsPrefix: "https://simplicity.cl/owine"
  },
  image: {
    service: passthroughImageService()
  }
});