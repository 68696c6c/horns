import { darken, lighten, toRgba } from "color2k"

import { ColorwayConfig, ColorwayFoundations, FoundationConfig } from "./utils"
import { pallet } from "./utils/color-pallet"

export const makeShades = (
  color: string,
  shades: FoundationConfig<number>
): FoundationConfig => ({
  "00": toRgba(darken(color, shades["00"])),
  "01": toRgba(darken(color, shades["01"])),
  "02": toRgba(darken(color, shades["02"])),
  "03": toRgba(darken(color, shades["03"])),
  "04": toRgba(darken(color, shades["04"])),
  "05": toRgba(color),
  "06": toRgba(lighten(color, shades["06"])),
  "07": toRgba(lighten(color, shades["07"])),
  "08": toRgba(lighten(color, shades["08"])),
  "09": toRgba(lighten(color, shades["09"])),
  "10": toRgba(lighten(color, shades["10"])),
})

export const makeFoundations = ({
  colors: { black, white, ...c },
  shades,
}: ColorwayConfig): ColorwayFoundations => ({
  brand1: makeShades(c.brand1, shades),
  brand2: makeShades(c.brand2, shades),
  brand3: makeShades(c.brand3, shades),
  neutral: makeShades(c.neutral, shades),
  inverse: makeShades(c.inverse, shades),
  info: makeShades(c.info, shades),
  success: makeShades(c.success, shades),
  warning: makeShades(c.warning, shades),
  danger: makeShades(c.danger, shades),
  enabled: makeShades(c.enabled, shades),
  disabled: makeShades(c.disabled, shades),
  error: makeShades(c.error, shades),
  selected: makeShades(c.selected, shades),
  black,
  white,
  colorways: {
    background: {
      backgroundColor: ["enabled", "05"],
      borderColor: ["enabled", "04"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    inverse: {
      backgroundColor: ["inverse", "05"],
      borderColor: ["inverse", "04"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    prominent: {
      backgroundColor: ["brand1", "05"],
      borderColor: ["brand1", "04"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    enabled: {
      backgroundColor: ["enabled", "05"],
      borderColor: ["enabled", "04"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    hover: {
      backgroundColor: ["enabled", "04"],
      borderColor: ["enabled", "03"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    active: {
      backgroundColor: ["enabled", "03"],
      borderColor: ["enabled", "02"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
    disabled: {
      backgroundColor: ["disabled", "05"],
      borderColor: ["disabled", "04"],
      textDecorationColor: ["disabled", "02"],
      color: ["disabled", "02"],
      fill: ["disabled", "02"],
      stroke: ["disabled", "02"],
    },
    error: {
      backgroundColor: ["enabled", "05"],
      borderColor: ["error", "05"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: ["error", "05"],
      stroke: ["error", "05"],
    },
    selected: {
      backgroundColor: ["selected", "05"],
      borderColor: ["selected", "04"],
      textDecorationColor: "currentColor",
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
    },
  },
})

export const defaultConfig: ColorwayConfig = {
  colors: {
    brand1: pallet.orangePeel,
    brand2: pallet.violet,
    brand3: pallet.aquamarine,
    neutral: pallet.gray05,
    inverse: pallet.gray95,
    info: pallet.capri,
    success: pallet.emerald,
    warning: pallet.goldenYellow,
    danger: pallet.scarlet,
    enabled: pallet.gray10,
    disabled: pallet.gray50,
    error: pallet.crimson,
    selected: pallet.violet,
    black: pallet.gray95,
    white: pallet.gray05,
  },
  shades: {
    "00": 0.85,
    "01": 0.75,
    "02": 0.5,
    "03": 0.25,
    "04": 0.25,
    "05": 0,
    "06": 0.25,
    "07": 0.25,
    "08": 0.5,
    "09": 0.75,
    "10": 0.85,
  },
}

// // TODO cleanup the color types in utils/index.ts
// export type BrandColor = "brand1" | "brand2" | "brand3"
// export type NeutralColor = "neutral" | "inverse"
// export type StatusColor = "info" | "success" | "warning" | "danger"
// export type ControlColor = "enabled" | "disabled" | "error" | "selected" // enabled is the default color for interactive elements and is configured separately from the neutral colors to allow controls to be a different color than the background and/or independent of dark/light mode theming
// export type TextColor = "black" | "white"
//
// // FoundationColors are specified in the config and will have token shades generated for them.
// export type FoundationColor =
//   | BrandColor
//   | NeutralColor
//   | StatusColor
//   | ControlColor
//
// // ConfigColors are specified in the config.
// export type ConfigColor = FoundationColor | TextColor
//
// export type BaseSurfaceColorway = "background" // the default color for all surfaces (i.e. anything with a background color) is transparent
//
// // InteractiveSurfaceColorways are global colorways configured in the theme and used by buttons and controls.  Not every component will use all the colors, e.g. selected is only used by options, toggles, etc
// export type InteractiveSurfaceColorway =
//   | BaseSurfaceColorway
//   | "disabled"
//   | "error"
//   | "selected"
//   | "hover" // i.e. the hover state of the default "background" colorway
//   | "active" // i.e. the active state of the default "background" colorway
//
// // Actions are buttons and anchors.  Action components support custom colorway variants with each variant having dedicated hover states
// export type ActionVariant = "primary" | "secondary" | "tertiary"
// export type ButtonVariantState = "enabled" | "hover" | "active"
// export type AnchorVariantState = ButtonVariantState | "visited"
//
// // ContentSurfaceColorways are global colorways configured in the theme and used by cards, panels, boxes, and other layout elements.  Not every component will use all the colors, e.g. only some components need a prominent colorway.
// export type ContentSurfaceColorway =
//   | BaseSurfaceColorway
//   | "neutral"
//   | "inverse"
//   | "prominent"
//
// // StatusSurfaceColorways are global colorways used by notifications and callouts.
// export type StatusSurfaceColorway = BaseSurfaceColorway | StatusColor
//
// // ConfigColorways are global colorways that are configured in the theme so that they can be reused by different components.
// export type ConfigColorway =
//   | InteractiveSurfaceColorway
//   | ContentSurfaceColorway
//   | StatusSurfaceColorway
