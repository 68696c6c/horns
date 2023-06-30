import * as CSS from "csstype"

import { CSSVal } from "../types"

export type Tokens<
  F = CSSVal<CSS.Property.FontFamily>,
  K = CSSVal<CSS.Property.FontKerning>,
  S = CSSVal<CSS.Property.FontStyle>,
  W = CSSVal<CSS.Property.FontWeight>,
  T = CSSVal<CSS.Property.TextTransform>,
  WS = CSSVal<CSS.Property.WordSpacing>
> = {
  fontFamily: F
  fontKerning: K
  fontStyle: S
  fontWeight: W
  textTransform: T
  wordSpacing: WS
}

export type TypefaceConfig = Tokens & {
  imports: string[]
}

export type Config = {
  base: TypefaceConfig
  alt: TypefaceConfig
  mono: TypefaceConfig
}

export type Typeface = keyof Config

export type ConfigTokens = {
  typeface: Typeface
} & Partial<Omit<Tokens, "fontFamily">>

export type Fonts<T> = {
  body: T
  code: T
  control: T
  display: T
  em: T
  heading: T
  label: T
  legal: T
  small: T
  strong: T
  title: T
}
// export type FontVariant = keyof Fonts

// export type Config = {
//   typefaces: Typefaces
//   fonts: Fonts<ConfigTokens>
// }

export type Foundations = Fonts<Tokens>

export type Font = keyof Foundations
export type BodyFont = Exclude<Font, "display" | "heading">

export type ElementConfig = {
  font: Font
}

// export const makeTokens = (f: Foundations, c: ElementConfig): Tokens => {
//   return f[c.font]
// }
//
// const makeFoundationTokens = (t: Typefaces, c: ConfigTokens): Tokens => {
//   const f = t[c.typeface]
//   return {
//     fontFamily: f.fontFamily,
//     fontKerning: c.fontKerning || f.fontKerning,
//     fontStyle: c.fontStyle || f.fontStyle,
//     fontWeight: c.fontWeight || f.fontWeight,
//     textTransform: c.textTransform || f.textTransform,
//     wordSpacing: c.wordSpacing || f.wordSpacing,
//   }
// }
export const makeTokens = (f: Config, c: ConfigTokens): Tokens => {
  const t = f[c.typeface]
  return {
    fontFamily: t.fontFamily,
    fontKerning: c.fontKerning || t.fontKerning,
    fontStyle: c.fontStyle || t.fontStyle,
    fontWeight: c.fontWeight || t.fontWeight,
    textTransform: c.textTransform || t.textTransform,
    wordSpacing: c.wordSpacing || t.wordSpacing,
  }
}
// const makeFoundationTokens = (fc: Config, c: FontVariant): Tokens => {
//   const f = fc.typefaces[fc.fonts[c].typeface]
//   return {
//     fontFamily: f.fontFamily,
//     fontKerning: c.fontKerning || f.fontKerning,
//     fontStyle: c.fontStyle || f.fontStyle,
//     fontWeight: c.fontWeight || f.fontWeight,
//     textTransform: c.textTransform || f.textTransform,
//     wordSpacing: c.wordSpacing || f.wordSpacing,
//   }
// }

// export const makeFoundations = (c: Config): Foundations => ({
//   body: makeFoundationTokens(c.typefaces, c.fonts.body),
//   code: makeFoundationTokens(c.typefaces, c.fonts.code),
//   control: makeFoundationTokens(c.typefaces, c.fonts.control),
//   display: makeFoundationTokens(c.typefaces, c.fonts.display),
//   heading: makeFoundationTokens(c.typefaces, c.fonts.heading),
//   title: makeFoundationTokens(c.typefaces, c.fonts.title),
//   strong: makeFoundationTokens(c.typefaces, c.fonts.strong),
//   em: makeFoundationTokens(c.typefaces, c.fonts.em),
//   label: makeFoundationTokens(c.typefaces, c.fonts.label),
//   legal: makeFoundationTokens(c.typefaces, c.fonts.legal),
// })

export const defaultConfig: Config = {
  // typefaces: {
  base: {
    fontFamily: "'IBM Plex Sans', Arial, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontKerning: "auto",
    wordSpacing: "normal",
    textTransform: "none",
    imports: [
      "@fontsource/ibm-plex-sans/300.css",
      "@fontsource/ibm-plex-sans/400.css",
      "@fontsource/ibm-plex-sans/500.css",
      "@fontsource/ibm-plex-sans/600.css",
      "@fontsource/ibm-plex-sans/700.css",
    ],
  },
  alt: {
    fontFamily: "'IBM Plex Serif', Georgia, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontKerning: "auto",
    wordSpacing: "normal",
    textTransform: "none",
    imports: [
      "@fontsource/ibm-plex-serif/300.css",
      "@fontsource/ibm-plex-serif/400.css",
      "@fontsource/ibm-plex-serif/500.css",
      "@fontsource/ibm-plex-serif/600.css",
      "@fontsource/ibm-plex-serif/700.css",
    ],
  },
  mono: {
    fontFamily: "'JetBrains Mono Variable', 'Courier New', monospace",
    fontStyle: "normal",
    fontWeight: 400,
    fontKerning: "auto",
    wordSpacing: "normal",
    textTransform: "none",
    imports: ["@fontsource/ibm-plex-sans/400.css"],
  },
  // },
  // fonts: {
  //   body: {
  //     typeface: "base",
  //   },
  //   code: {
  //     typeface: "mono",
  //   },
  //   control: {
  //     typeface: "base",
  //   },
  //   display: {
  //     typeface: "base",
  //     fontWeight: "600",
  //   },
  //   heading: {
  //     typeface: "base",
  //     fontWeight: "600",
  //   },
  //   title: {
  //     typeface: "base",
  //     fontWeight: "600",
  //   },
  //   strong: {
  //     typeface: "base",
  //     fontWeight: "600",
  //   },
  //   em: {
  //     typeface: "base",
  //     fontStyle: "italic",
  //   },
  //   label: {
  //     typeface: "base",
  //   },
  //   legal: {
  //     typeface: "alt",
  //   },
  // },
}

// export type Tokens = {
//   fontFamily: CSSVal<CSS.Property.FontFamily>
//   fontKerning: CSSVal<CSS.Property.FontKerning>
//   fontStyle: CSSVal<CSS.Property.FontStyle>
//   fontWeight: CSSVal<CSS.Property.FontWeight>
//   textTransform: CSSVal<CSS.Property.TextTransform>
//   wordSpacing: CSSVal<CSS.Property.WordSpacing>
// }
