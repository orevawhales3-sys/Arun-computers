import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isReplit = !!process.env.REPL_ID;
const port = Number(process.env.PORT) || 3000;
const basePath = process.env.BASE_PATH || "/";

async function replitPlugins() {
  if (!isReplit || process.env.NODE_ENV === "production") return [];
  try {
    const [errorModal, cartographer, devBanner] = await Promise.all([
      import("@replit/vite-plugin-runtime-error-modal"),
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);
    return [
      errorModal.default(),
      cartographer.cartographer({
        root: path.resolve(import.meta.dirname, ".."),
      }),
      devBanner.devBanner(),
    ];
  } catch {
    return [];
  }
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...(await replitPlugins())],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
