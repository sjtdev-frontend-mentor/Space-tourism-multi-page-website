import { fileURLToPath, URL } from "node:url";
// import path from 'node:path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), ],//vueDevTools()
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/Space-tourism-multi-page-website/" : "/",
  server: {
    host: true,
  },
});
