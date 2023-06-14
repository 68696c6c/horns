import { defineConfig } from "vite"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
// import linaria from "@linaria/vite"

// example to support typescript syntax:
export default defineConfig(() => ({
  plugins: [vanillaExtractPlugin()],
  // // ...
  // plugins: [linaria()],
  // // plugins: [
  // //   linaria({
  // //     include: ["**/*.{ts,tsx}"],
  // //     babelOptions: {
  // //       presets: ["@babel/preset-typescript", "@babel/preset-react"],
  // //     },
  // //   }),
  // // ],
}))
