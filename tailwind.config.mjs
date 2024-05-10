/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/assets/home-bg.webp')",
      },
    },
  },
  plugins: ["prettier-plugin-astro"],
};
