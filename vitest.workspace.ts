import { defineConfig, defineWorkspace, mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import EnvironmentPlugin from "vite-plugin-environment";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseConfig = defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [EnvironmentPlugin("all")],
  test: {
    globals: true,
    setupFiles: ["src/__tests__/setup.tsx"],
  },
});

export default defineWorkspace([
  mergeConfig(baseConfig, {
    plugins: [react()],
    test: {
      name: "browser",
      environment: "jsdom",
      exclude: ["src/**/*.node.test.{ts,tsx}", "node_modules"],
    },
  }),
  mergeConfig(baseConfig, {
    test: {
      include: ["src/**/*.node.test.{ts,tsx}"],
      name: "node",
      environment: "node",
    },
  }),
]);
