import * as CSS from "csstype"
import { darken, lighten, readableColorIsBlack, toRgba } from "color2k"

import {
  BaseOrAlt,
  BaseOrAltVariants,
  CSSVal,
  FoundationTokens,
  isBaseOrAlt,
  Ordinal,
  State,
  StateVariants,
  TokenKey,
} from "../types"
import pallet from "./pallet"

//--------------------------------------------------------------------------------------------------
// Primitives

export type BrandColor = "brand1" | "brand2" | "brand3"
export type ContentColor = "neutral" | "inverse" | "prominent"
// "enabled" is the default color for control elements and is configured separately from the neutral colors to allow controls to be a different color than the background and/or independent of dark/light mode theming.
export type ControlColor = "enabled" | "disabled" | "error" | "selected"
export type MessageColor = "info" | "success" | "warning" | "danger"
// "background" is the universal default color behavior for all elements other than controls.  It uses a transparent background and inherits all other color properties.
export type BackgroundColor = "background"
export type FocusColor = "focus"
export type TextColor = "black" | "white"

export const isContentColor = (tbd: SurfaceColorway): tbd is ContentColor => {
  return ["neutral", "inverse", "primary"].includes(tbd)
}

export const isMessageColor = (tbd: SurfaceColorway): tbd is MessageColor => {
  return ["info", "success", "warning", "danger"].includes(tbd)
}

//--------------------------------------------------------------------------------------------------
// Foundations

// FoundationColors are specified in the config and will have token shades generated for them.
// export type FoundationColor =
//   | BrandColor
//   | ContentColor
//   | MessageColor
//   | ControlColor

export type SurfaceFoundation =
  | FoundationShade
  | BackgroundColor
  | "transparent"
  | "inherit"

export type GlyphFoundation =
  | FoundationShade
  | BackgroundColor
  | "readable"
  | "currentColor"
  | "inherit"

//--------------------------------------------------------------------------------------------------
// Config

// // ConfigColors are specified in the config.
// export type ConfigColor = BrandColor | FoundationColor | TextColor

// ControlSurfaceColorways are global colorways configured in the theme and used by buttons, inputs, and select elements.
// - Not every component will use all these colors, e.g. "selected" is only used by options, toggles, etc.
export type ControlSurfaceColorway = BackgroundColor | ControlColor

// ContentSurfaceColorways are global colorways configured in the theme and used by cards, panels, boxes, and other layout elements.
// - Not every component will use all the colors, e.g. only some components need a prominent colorway.
export type ContentSurfaceColorway = BackgroundColor | ContentColor

// MessageSurfaceColorways are global colorways used by notifications and callouts.
export type MessageSurfaceColorway = BackgroundColor | MessageColor

// SurfaceColorways are global colorways that are configured in the theme so that they can be reused by different components.
export type SurfaceColorway =
  | ControlSurfaceColorway
  | ContentSurfaceColorway
  | MessageSurfaceColorway

//--------------------------------------------------------------------------------------------------
// Tokens

export type Tokens<
  B = CSSVal<CSS.DataType.Color>,
  T = CSSVal<CSS.DataType.Color>,
  S = CSSVal<CSS.DataType.Paint>,
  O = CSSVal<CSS.Property.Opacity>
> = {
  backgroundColor: B
  borderColor: B
  outlineColor?: B
  color: T
  textDecorationColor: T
  fill: S
  stroke: S
  opacity?: O
}

export type ConfigTokens = Tokens<
  SurfaceFoundation,
  GlyphFoundation,
  GlyphFoundation,
  number
>

export type OutlineTokens = Required<Pick<Tokens, "outlineColor">>
export type OutlineConfigTokens = Required<Pick<ConfigTokens, "outlineColor">>

export type SurfaceState = Exclude<State, "visited" | "focus">

export type SurfaceStateColorway = `${Exclude<
  SurfaceColorway,
  ContentColor
>}.${SurfaceState}`

export type SurfaceAltColorway = `${ContentColor}.${BaseOrAlt}`
// | "focus"

export const isSurfaceStateColorway = (
  tbd: SurfaceStateColorway | SurfaceAltColorway
): tbd is SurfaceStateColorway => {
  return !["neutral", "inverse", "prominent"].includes(tbd.split(".")[0])
}

export const parseSurfaceStateColorway = (
  input: SurfaceStateColorway
): [SurfaceColorway, SurfaceState] => {
  const parts = input.split(".")
  const colorway = parts[0] as SurfaceColorway
  const state = parts[1] as SurfaceState
  return [colorway, state]
}

export const parseSurfaceAltColorway = (
  input: SurfaceAltColorway
): [ContentColor, BaseOrAlt] => {
  const parts = input.split(".")
  const colorway = parts[0] as ContentColor
  const state = parts[1] as BaseOrAlt
  return [colorway, state]
}

export type ColorwayFoundations = {
  background: StateVariants<
    Tokens<
      Exclude<SurfaceFoundation, "background">,
      GlyphFoundation,
      GlyphFoundation,
      number
    >
  >
  neutral: BaseOrAltVariants<ConfigTokens>
  inverse: BaseOrAltVariants<ConfigTokens>
  prominent: BaseOrAltVariants<ConfigTokens>
  enabled: StateVariants<ConfigTokens>
  disabled: ConfigTokens
  error: ConfigTokens
  selected: ConfigTokens
  focus: OutlineConfigTokens
  info: StateVariants<ConfigTokens>
  success: StateVariants<ConfigTokens>
  warning: StateVariants<ConfigTokens>
  danger: StateVariants<ConfigTokens>
}

export type FoundationColor = Exclude<
  keyof ColorwayFoundations,
  BackgroundColor
>

export type FoundationShade = [Exclude<PalletColor, TextColor>, TokenKey]

export const isFoundationShade = (
  tbd: GlyphFoundation | SurfaceFoundation | FoundationShade
): tbd is FoundationShade => {
  return Array.isArray(tbd)
}

export const getGlyphColor = (
  f: Foundations,
  foundation: GlyphFoundation,
  backgroundColor: string
): string => {
  if (isFoundationShade(foundation)) {
    const [color, colorShade] = foundation
    return toRgba(f.pallet[color][colorShade])
  }
  if (foundation === "readable") {
    return readableColorIsBlack(backgroundColor)
      ? f.pallet.black
      : f.pallet.white
  }
  if (foundation === "currentColor") {
    return "currentColor"
  }
  return "inherit"
}

const getNonBackgroundSurfaceColor = (
  f: Foundations,
  foundation: Exclude<SurfaceFoundation, "background">
): string => {
  if (isFoundationShade(foundation)) {
    const [color, colorShade] = foundation
    return toRgba(f.pallet[color][colorShade])
  }
  if (foundation === "transparent") return "transparent"
  return "inherit"
}

export type Pallet = {
  [key in Exclude<FoundationColor, FocusColor> | BrandColor]: FoundationTokens
} & {
  [key in TextColor]: string
}

export type PalletColor = keyof Pallet

export type Foundations = ColorwayFoundations & {
  pallet: Pallet
}

export type ConfigColor =
  | BrandColor
  | Exclude<FoundationColor, BackgroundColor | FocusColor>
  | TextColor

export type Config = {
  colors: {
    [key in ConfigColor]: string
  }
  shades: FoundationTokens<number>
  colorways: ColorwayFoundations
}

export const getSurfaceColor = (
  f: Foundations,
  foundation: SurfaceFoundation
): string => {
  if (foundation === "background") {
    return getNonBackgroundSurfaceColor(f, f.background.base.backgroundColor)
  }
  return getNonBackgroundSurfaceColor(f, foundation)
}

const makeOpacity = (c: ConfigTokens, input: Tokens): Tokens => {
  const result: Tokens = { ...input }
  if (c.opacity) {
    result.opacity = c.opacity
  }
  return result
}

const makeTokensFromConfigTokens = (
  f: Foundations,
  ct: ConfigTokens
): Tokens => {
  const bg = getSurfaceColor(f, ct.backgroundColor)
  return makeOpacity(ct, {
    backgroundColor: bg,
    borderColor: getSurfaceColor(f, ct.borderColor),
    color: getGlyphColor(f, ct.color, bg),
    textDecorationColor: getGlyphColor(f, ct.textDecorationColor, bg),
    fill: getGlyphColor(f, ct.fill, bg),
    stroke: getGlyphColor(f, ct.stroke, bg),
  })
}

export type ConfigColorway = {
  colorway: SurfaceStateColorway | SurfaceAltColorway
}

export type ElementConfig = ConfigColorway | ConfigTokens

export const isConfigColorway = (tbd: ElementConfig): tbd is ConfigColorway => {
  return Object.prototype.hasOwnProperty.call(tbd, "colorway")
}

// export const isConfigTokens = (tbd: ElementConfig): tbd is ConfigTokens => {
//   return !Object.prototype.hasOwnProperty.call(tbd, "colorway")
// }

export const makeOutlineTokens = (f: Foundations): OutlineTokens => ({
  outlineColor: getSurfaceColor(f, f.focus.outlineColor),
})

export const makeTokens = (f: Foundations, c: ElementConfig): Tokens => {
  if (isConfigColorway(c)) {
    if (isSurfaceStateColorway(c.colorway)) {
      const [colorway, state] = parseSurfaceStateColorway(c.colorway)
      if (
        colorway === "disabled" ||
        colorway === "error" ||
        colorway === "selected"
      ) {
        const bg = getSurfaceColor(f, f[colorway].backgroundColor)
        return makeOpacity(f[colorway], {
          backgroundColor: bg,
          borderColor: getSurfaceColor(f, f[colorway].borderColor),
          color: getGlyphColor(f, f[colorway].color, bg),
          textDecorationColor: getGlyphColor(
            f,
            f[colorway].textDecorationColor,
            bg
          ),
          fill: getGlyphColor(f, f[colorway].fill, bg),
          stroke: getGlyphColor(f, f[colorway].stroke, bg),
        })
      }
      if (isMessageColor(colorway) || colorway === "background") {
        return makeTokensFromConfigTokens(f, f[colorway][state])
      }
      if (colorway === "enabled") {
        return makeTokensFromConfigTokens(f, f[colorway][state])
      }
    } else {
      const [colorway, variant] = parseSurfaceAltColorway(c.colorway)
      return makeTokensFromConfigTokens(f, f[colorway][variant])
    }
    // if (isContentColor(colorway) && isBaseOrAlt(state)) {
    //   return makeTokensFromConfigTokens(f, f[colorway][state])
    // }
    // if (
    //   (isMessageColor(colorway) || colorway === "background") &&
    //   !isBaseOrAlt(state)
    // ) {
    //   return makeTokensFromConfigTokens(f, f[colorway][state])
    // }
    // const [colorway, state] = parseSurfaceAltColorway(c.colorway)
    // const bg = getSurfaceColor(f, f[colorway].backgroundColor)
    // return {
    //   backgroundColor: bg,
    //   borderColor: getSurfaceColor(f, f[colorway].borderColor),
    //   color: getGlyphColor(f, f[colorway].color, bg),
    //   textDecorationColor: getGlyphColor(
    //     f,
    //     f[colorway].textDecorationColor,
    //     bg
    //   ),
    //   fill: getGlyphColor(f, f[colorway].fill, bg),
    //   stroke: getGlyphColor(f, f[colorway].stroke, bg),
    // }
  }
  return makeTokensFromConfigTokens(f, c as ConfigTokens)
  // return makeTokensFromConfigTokens(f, c)
}

export const makeShades = (
  color: string,
  shades: FoundationTokens<number>
): FoundationTokens => ({
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
  colorways,
}: Config): Foundations => ({
  pallet: {
    brand1: makeShades(c.brand1, shades),
    brand2: makeShades(c.brand2, shades),
    brand3: makeShades(c.brand3, shades),
    neutral: makeShades(c.neutral, shades),
    inverse: makeShades(c.inverse, shades),
    prominent: makeShades(c.prominent, shades),
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
  },
  ...colorways,
})

export const defaultConfig: Config = {
  colors: {
    brand1: pallet.orangePeel,
    brand2: pallet.violet,
    brand3: pallet.aquamarine,
    neutral: pallet.gray05,
    inverse: pallet.gray95,
    prominent: pallet.amber,
    info: pallet.capri,
    success: pallet.emerald,
    warning: pallet.goldenYellow,
    danger: pallet.scarlet,
    enabled: pallet.gray10,
    disabled: pallet.gray50,
    error: pallet.crimson,
    selected: pallet.amethyst,
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
  colorways: {
    background: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: "inherit",
        fill: "inherit",
        stroke: "inherit",
        textDecorationColor: "inherit",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: "inherit",
        fill: "inherit",
        stroke: "inherit",
        textDecorationColor: "inherit",
        opacity: 0.8,
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: "inherit",
        fill: "inherit",
        stroke: "inherit",
        textDecorationColor: "inherit",
        opacity: 0.6,
      },
    },
    neutral: {
      base: {
        backgroundColor: ["neutral", "05"],
        borderColor: ["neutral", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      alt: {
        backgroundColor: ["neutral", "03"],
        borderColor: ["neutral", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    inverse: {
      base: {
        backgroundColor: ["inverse", "05"],
        borderColor: ["inverse", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      alt: {
        backgroundColor: ["inverse", "03"],
        borderColor: ["inverse", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    prominent: {
      base: {
        backgroundColor: ["prominent", "05"],
        borderColor: ["prominent", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      alt: {
        backgroundColor: ["prominent", "03"],
        borderColor: ["prominent", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    info: {
      base: {
        backgroundColor: ["info", "05"],
        borderColor: ["info", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      hover: {
        backgroundColor: ["info", "04"],
        borderColor: ["info", "03"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      active: {
        backgroundColor: ["info", "03"],
        borderColor: ["info", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    success: {
      base: {
        backgroundColor: ["success", "05"],
        borderColor: ["success", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      hover: {
        backgroundColor: ["success", "04"],
        borderColor: ["success", "03"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      active: {
        backgroundColor: ["success", "03"],
        borderColor: ["success", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    warning: {
      base: {
        backgroundColor: ["warning", "05"],
        borderColor: ["warning", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      hover: {
        backgroundColor: ["warning", "04"],
        borderColor: ["warning", "03"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      active: {
        backgroundColor: ["warning", "03"],
        borderColor: ["warning", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    danger: {
      base: {
        backgroundColor: ["danger", "05"],
        borderColor: ["danger", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      hover: {
        backgroundColor: ["danger", "04"],
        borderColor: ["danger", "03"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      active: {
        backgroundColor: ["danger", "03"],
        borderColor: ["danger", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    enabled: {
      base: {
        backgroundColor: ["enabled", "05"],
        borderColor: ["enabled", "04"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      hover: {
        backgroundColor: ["enabled", "04"],
        borderColor: ["enabled", "03"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
      active: {
        backgroundColor: ["enabled", "03"],
        borderColor: ["enabled", "02"],
        color: "readable",
        fill: "currentColor",
        stroke: "currentColor",
        textDecorationColor: "currentColor",
      },
    },
    disabled: {
      backgroundColor: ["disabled", "05"],
      borderColor: ["disabled", "04"],
      color: ["disabled", "02"],
      fill: ["disabled", "02"],
      stroke: ["disabled", "02"],
      textDecorationColor: ["disabled", "02"],
      opacity: 1,
    },
    error: {
      backgroundColor: ["enabled", "05"],
      borderColor: ["error", "05"],
      color: "readable",
      fill: ["error", "05"],
      stroke: ["error", "05"],
      textDecorationColor: "currentColor",
      opacity: 1,
    },
    selected: {
      backgroundColor: ["selected", "05"],
      borderColor: ["selected", "04"],
      color: "readable",
      fill: "currentColor",
      stroke: "currentColor",
      textDecorationColor: "currentColor",
      opacity: 1,
    },
    focus: {
      outlineColor: ["selected", "05"],
    },
  },
}
