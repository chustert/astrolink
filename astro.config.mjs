// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare"; // Import the Cloudflare adapter for Webflow Cloud
import preact from "@astrojs/preact";
import react from "@vitejs/plugin-react";

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
        // 👇 Let Vite parse JSX in .js files (just like CRA/Next.js)
        include: [/\.jsx?$/, /\.tsx?$/],
      }),
    ],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
        ? {
            "react-dom/server": "react-dom/server.edge",
          }
        : undefined,
    },
  },
});
