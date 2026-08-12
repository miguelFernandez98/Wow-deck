import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://wow-deck.com",
  output: "static",
  adapter: vercel(),
});
