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
        include: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/], // treat `.js` as JSX
      }),
    ],
    esbuild: {
      loader: "jsx", // default loader
      include: /(devlink\/.*\.js)$/, // only apply to your DevLink .js files
    },
    resolve: {
      alias: import.meta.env.PROD ? { "react-dom/server": "react-dom/server.edge" } : undefined,
    },
  },
});
