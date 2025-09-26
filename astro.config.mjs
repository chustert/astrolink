// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare"; // Import the Cloudflare adapter for Webflow Cloud
import preact from "@astrojs/preact";
import react from "@vitejs/plugin-react";

import * as esbuild from "esbuild";

// https://astro.build/config
export default defineConfig({
  // Webflow Cloud Configuration
  site: "https://astrolink01.webflow.io",
  base: "/site",
  output: "server", // Use the server output mode
  // Use the Cloudflare adapter
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  build: {
    assetsPrefix: "/site",
  },
  // Webflow DevLink Configuration END
  integrations: [
    // Enable React-compat so DevLink's React components run under Preact
    preact({ compat: true }),
  ],
  // Optimize the build configuration for the Edge runtime
  vite: {
    plugins: [
      react({
        include: [/\.jsx?$/, /\.tsx?$/], // ensure React tooling sees JSX in .js/.jsx
      }),
      {
        name: "devlink-jsx-loader",
        enforce: "pre",
        transform(code, id) {
          // ✅ ONLY touch devlink .js files, not .ts files
          if (id.match(/devlink\/.*\.js$/)) {
            return esbuild.transformSync(code, {
              loader: "jsx",
              sourcefile: id,
            });
          }
          return null; // let Astro handle everything else (including webflow-loader.ts)
        },
      },
    ],
  },
});
