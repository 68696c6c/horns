/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: [
      "**/__tests__/**/*.?(c|m)[jt]s?(x)",
      "**/?(*.){test,spec}.?(c|m)[jt]s?(x)",
      "**/test.ts",
    ],
  },
})
