import typescript from "@rollup/plugin-typescript"
import del from "rollup-plugin-delete"
import { defineConfig } from "rollup"

const config = defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      preserveModules: true,
      sourcemap: true,
    },
  ],
  external: ["fs", "@horns/theme", "chalk"],
  plugins: [del({ targets: "dist/*" }), typescript()],
})

export default config
