import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://landing.bohd4n.dev",
  integrations: [tailwind(), react()],
  output: "static", // optional
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-icons': ['react-icons/fi', 'react-icons/ri', 'react-icons/fa'],
          },
        },
      },
    },
  },
});