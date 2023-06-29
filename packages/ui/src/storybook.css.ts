import { createGlobalTheme, createTheme, style } from "@vanilla-extract/css"

import { makeDefaultTheme, Theme } from "@horns/theme"

import { t } from "./theme.css"

createGlobalTheme<Theme>(":root", t, makeDefaultTheme())

// export const t = createTheme<Theme>(contract, makeDefaultTheme())
//
// export const anchor = style({
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   ...t.anchor.element,
//   ":focus": t.anchor.focus,
//   ":hover": t.anchor.hover,
//   ":active": t.anchor.active,
//   ":visited": t.anchor.visited,
//   selectors: {
//     "&.primary": t.anchor.variants.primary.base,
//     "&.primary:hover": t.anchor.variants.primary.hover,
//     "&.primary:active": t.anchor.variants.primary.active,
//     "&.primary:visited": t.anchor.variants.primary.visited,
//     "&.secondary": t.anchor.variants.secondary.base,
//     "&.secondary:hover": t.anchor.variants.secondary.hover,
//     "&.secondary:active": t.anchor.variants.secondary.active,
//     "&.secondary:visited": t.anchor.variants.secondary.visited,
//     "&.tertiary": t.anchor.variants.tertiary.base,
//     "&.tertiary:hover": t.anchor.variants.tertiary.hover,
//     "&.tertiary:active": t.anchor.variants.tertiary.active,
//     "&.tertiary:visited": t.anchor.variants.tertiary.visited,
//     // "&.sm": t.anchor.variants.sm,
//     // "&.md": t.anchor.variants.md,
//     // "&.lg": t.anchor.variants.lg,
//   },
// })
