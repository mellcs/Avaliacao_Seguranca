import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // garante que a build vá para /dist
  },
  server: {
    proxy: {
      "/api": "http://api:3000", // apenas para dev, Docker Nginx fará o proxy em produção
    },
  },
});
