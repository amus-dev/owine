import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  site: "https://sessions.o61wine.com",
  base: "https://sessions.o61wine.com",
  outDir: "./owine",
  build: {
    assetsPrefix: "https://sessions.o61wine.com",
  },
  image: {
    service: passthroughImageService(),
  },
});
