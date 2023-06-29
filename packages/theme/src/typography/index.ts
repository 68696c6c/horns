import * as CSS from "csstype"

import {
  FontFamily,
  FontKerning,
  FontSize,
  FontStyle,
  FontWeight,
  LineHeight,
  TextAlign,
  TextIndent,
  TextTransform,
  WordSpacing,
} from "./properties"
import {
  FoundationTokens,
  Ordinal,
  Scale,
  ScaleVariants,
  TokenKey,
} from "../types"
import * as Margin from "../tokens/margin"

//--------------------------------------------------------------------------------------------------
// Primitives

export type BodyFont =
  | "body1"
  | "body2"
  | "body3"
  | "emphasis"
  | "label"
  | "legal"
  | "legalHeading"
  | "strong"

export type HeadingFont = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export const isHeadingFont = (
  tbd: BodyFont | HeadingFont
): tbd is HeadingFont => {
  return ["display", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tbd)
}

//--------------------------------------------------------------------------------------------------
// Foundations

export type Typeface = {
  fontFamily: CSS.Property.FontFamily
  fontWeight: CSS.Property.FontWeight
  fontStyle: CSS.Property.FontStyle
  fontKerning: CSS.Property.FontKerning
  wordSpacing: CSS.Property.WordSpacing
  textTransform: CSS.Property.TextTransform
  imports: string[]
}

export type BodyConfigTokens = ConfigTokens & { size: ScaleVariants<TokenKey> }

export type HeadingConfigTokens = ConfigTokens &
  Margin.ConfigTokens & { size: TokenKey }

export type BodyFoundations = {
  [key in BodyFont]: BodyConfigTokens
}

export type HeadingFoundations = {
  [key in HeadingFont]: HeadingConfigTokens
}

//--------------------------------------------------------------------------------------------------
// Config

export type Config = {
  typefaces: {
    [key in Ordinal]: Typeface
  }
  sizes: FoundationTokens<ScaleTokens>
  fonts: HeadingFoundations & BodyFoundations
}

export type ElementConfig = {
  font: BodyFont
}

export const isElementConfig = (
  tbd: ElementConfig | HeadingFont | BodyFont
): tbd is ElementConfig => {
  return Object.prototype.hasOwnProperty.call(tbd, "font")
}

//--------------------------------------------------------------------------------------------------
// Tokens

export type BaseTokens = FontKerning &
  FontStyle &
  FontWeight &
  TextAlign &
  TextIndent &
  TextTransform &
  WordSpacing

export type Tokens = FontFamily & BaseTokens

export type ConfigTokens = FontFamily<Ordinal> & BaseTokens

export const makeTokens = (
  f: Config,
  c: ElementConfig | HeadingFont | BodyFont
): Tokens => {
  if (isElementConfig(c)) {
    const font = f.fonts[c.font]
    return {
      fontFamily: f.typefaces[font.fontFamily].fontFamily,
      fontKerning: font.fontKerning,
      fontStyle: font.fontStyle,
      fontWeight: font.fontWeight,
      textAlign: font.textAlign,
      textIndent: font.textIndent,
      textTransform: font.textTransform,
      wordSpacing: font.wordSpacing,
    }
  }
  const font = f.fonts[c]
  return {
    fontFamily: f.typefaces[font.fontFamily].fontFamily,
    fontKerning: font.fontKerning,
    fontStyle: font.fontStyle,
    fontWeight: font.fontWeight,
    textAlign: font.textAlign,
    textIndent: font.textIndent,
    textTransform: font.textTransform,
    wordSpacing: font.wordSpacing,
  }
}

export type ScaleTokens = FontSize & LineHeight

export const makeScaleTokens = (
  f: Config,
  font: BodyFont | HeadingFont,
  scale: Scale = "md"
): ScaleTokens => {
  if (isHeadingFont(font)) {
    return {
      fontSize: f.sizes[f.fonts[font].size].fontSize,
      lineHeight: f.sizes[f.fonts[font].size].lineHeight,
    }
  }
  return {
    fontSize: f.sizes[f.fonts[font].size[scale]].fontSize,
    lineHeight: f.sizes[f.fonts[font].size[scale]].lineHeight,
  }
}

export const defaultConfig: Config = {
  typefaces: {
    primary: {
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
    secondary: {
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
    tertiary: {
      fontFamily: "'JetBrains Mono Variable', 'Courier New', monospace",
      fontStyle: "normal",
      fontWeight: 400,
      fontKerning: "auto",
      wordSpacing: "normal",
      textTransform: "none",
      imports: ["@fontsource/ibm-plex-sans/400.css"],
    },
  },
  sizes: {
    "00": {
      fontSize: "10px",
      lineHeight: "12px",
    },
    "01": {
      fontSize: "12px",
      lineHeight: "16px",
    },
    "02": {
      fontSize: "14px",
      lineHeight: "20px",
    },
    "03": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "04": {
      fontSize: "18px",
      lineHeight: "28px",
    },
    "05": {
      fontSize: "20px",
      lineHeight: "32px",
    },
    "06": {
      fontSize: "22px",
      lineHeight: "36px",
    },
    "07": {
      fontSize: "24px",
      lineHeight: "40px",
    },
    "08": {
      fontSize: "32px",
      lineHeight: "48px",
    },
    "09": {
      fontSize: "40px",
      lineHeight: "60px",
    },
    "10": {
      fontSize: "52px",
      lineHeight: "64px",
    },
  },
  fonts: {
    display: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "10",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h1: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "09",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h2: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "08",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h3: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "07",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h4: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "06",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h5: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "05",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    h6: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
      size: "04",
      marginTop: "00",
      marginBottom: "00",
      marginLeft: "00",
      marginRight: "00",
    },
    body1: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "400",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    body2: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "400",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    body3: {
      fontFamily: "tertiary",
      fontStyle: "normal",
      fontWeight: "400",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    emphasis: {
      fontFamily: "primary",
      fontStyle: "italic",
      fontWeight: "400",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    label: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    legal: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "400",
      size: {
        sm: "00",
        md: "01",
        lg: "02",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    legalHeading: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: {
        sm: "00",
        md: "01",
        lg: "02",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    strong: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: {
        sm: "02",
        md: "03",
        lg: "04",
      },
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
  },
}
