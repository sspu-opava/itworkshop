import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://itworkshop.cz",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !["/vyhledavani/", "/404/", "/404.html"].includes(pathname);
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
