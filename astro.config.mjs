import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import { dark } from "@clerk/themes";
import clerk from "@clerk/astro";
import { esMX } from "@clerk/localizations";

import icon from "astro-icon";

export default defineConfig({
  integrations: [
    tailwind(),
    clerk({
      localization: esMX,
      appearance: {
        baseTheme: dark,
      },
      publishableKey: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
      secretKey: process.env.CLERK_SECRET_KEY,
    }),
    icon(),
  ],
  output: "server",
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ["node:buffer", "node:worker_threads", "node:async_hooks"],
    },
  },
});
