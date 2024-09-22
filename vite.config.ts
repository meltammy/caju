import { defineConfig } from "vite";
import path from "path";
import { default as react } from "@vitejs/plugin-react";
import { default as eslint } from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3001,
  },
  base: "/caju/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
