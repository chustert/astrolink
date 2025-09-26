// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// Imports for Webflow Cloud build to succeed
import react from "@vitejs/plugin-react";
import cloudflare from "@astrojs/cloudflare";
import * as esbuild from "esbuild";

// https://astro.build/config
export default defineConfig({
  site: "https://astrolink01.webflow.io",
  integrations: [
    // Enable React-compat so DevLink's React components run under Preact
    preact({ compat: true }),
  ],

  // Webflow Cloud Configuration START
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
          if (id.match(/devlink\/.*\.js$/)) {
            const result = esbuild.transformSync(code, {
              loader: "jsx",
              sourcefile: id,
            });
            return {
              code: result.code,
              map: result.map ? JSON.parse(result.map) : null, // parse the map
            };
          }
          return null;
        },
      },
    ],
    // Webflow DevLink Configuration END
  },
});
