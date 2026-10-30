import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xlu1s.github.io",
  base: "/web-peppes",
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
