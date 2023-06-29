import { createGlobalTheme, createTheme, style } from "@vanilla-extract/css"
import { makeTheme, Theme } from "@horns/theme"
import { t } from "@horns/ui"

import config from "./config"

const theme = makeTheme(config)
console.log("app theme", theme.anchor.variants.primary.base)

createGlobalTheme<Theme>(":root", t, theme)
