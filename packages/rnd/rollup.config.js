import linaria from "@linaria/rollup"
import css from "rollup-plugin-css-only"
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
  external: ["@linaria/react", "lodash/mapValues.js"],
  // external: [
  //   "react",
  //   "react-is",
  //   "@radix-ui/react-dialog",
  //   "@radix-ui/react-visually-hidden",
  //   "@twilio-paste/tooltip-primitive",
  //   "@stitches/react",
  //   "react/jsx-runtime",
  //   "react/jsx-dev-runtime",
  //   "lodash.without",
  //   "uuid",
  //   "react-map-gl",
  //   "@mapbox/mapbox-gl-geocoder",
  //   "dayjs",
  // ],
  plugins: [
    del({ targets: "dist/*" }),
    typescript(),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
    }),
    css({
      output: "styles.css",
    }),
  ],
})

export default config
