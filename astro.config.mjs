import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";

const base = "/itworkshop";

// Odkazy v obsahových souborech zůstávají relativní ke kořeni webu.
/** @param {string} url */
function prefixContentUrl(url) {
  return url.startsWith("/") && !url.startsWith("//") && url !== base && !url.startsWith(`${base}/`) ? `${base}${url}` : url;
}
/** @type {import("satteri").MdastPluginDefinition} */
const baseContentLinks = {
  name: "itworkshop-base-links",
  link(node, ctx) { ctx.setField(node, "url", prefixContentUrl(node.url)); },
  image(node, ctx) { ctx.setField(node, "url", prefixContentUrl(node.url)); },
  definition(node, ctx) { ctx.setField(node, "url", prefixContentUrl(node.url)); },
};

export default defineConfig({
  site: "https://sspu-opava.github.io",
  base,
  output: "static",
  trailingSlash: "always",
  markdown: { processor: satteri({ mdastPlugins: [baseContentLinks] }) },
  integrations: [mdx(), sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname.replace(new RegExp(`^${base}(?=/|$)`), "") || "/";
      return !["/vyhledavani/", "/404/", "/404.html"].includes(pathname);
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
