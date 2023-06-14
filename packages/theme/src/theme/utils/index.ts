import * as CSS from "csstype"
import { IconType } from "react-icons"
import { readableColorIsBlack, toRgba } from "color2k"

//--------------------------------------------------------------------------------------------------
// Utils

export type CSSVarFunc =
  | `var(--${string})`
  | `var(--${string}, ${string | number})`
export type CSSVal<T> = T | CSSVarFunc
export type Brand = "brand1" | "brand2" | "brand3"
export type Ordinal = "primary" | "secondary" | "tertiary"
export type Scale = "sm" | "md" | "lg"
export type ScaleProperties<T> = {
  [key in Scale]: T
}
export type Width = "thin" | "medium" | "thick"
export type TokenKey =
  | "00" // smallest size, darkest shade
  | "01"
  | "02"
  | "03"
  | "04"
  | "05" // base size
  | "06"
  | "07"
  | "08"
  | "09"
  | "10" // largest size, lightest shade
export type FoundationConfig<T = string> = {
  [key in TokenKey]: T
}
export type Variants<T> = {
  variants: T
}

export const errorClass = "error"
export const getErrorClass = (hasError?: boolean) => {
  return hasError ? errorClass : ""
}

export const valueClass = "has-value"
export const getValueClass = (hasValue?: boolean) => {
  return hasValue ? valueClass : ""
}

//--------------------------------------------------------------------------------------------------
// Borders
export type BorderWidthProperties<T = CSSVal<CSS.Property.BorderWidth>> = {
  borderWidth: T
}
export type BorderStyleProperties<T = CSSVal<CSS.Property.BorderStyle>> = {
  borderStyle: T
}
export type BorderFoundation = BorderWidthProperties<TokenKey> &
  BorderStyleProperties
export type BorderTokens = BorderWidthProperties & BorderStyleProperties
export type BorderConfig = {
  border: Width
}
export type BorderFoundationsConfig = {
  widths: FoundationConfig
  borders: {
    [key in Width]: BorderFoundation
  }
}
export type BorderFoundations = {
  [key in Width]: BorderTokens
}
export const makeBorderTokens = (
  f: BorderFoundations,
  variant: Width
): BorderTokens => ({
  borderWidth: f[variant].borderWidth,
  borderStyle: f[variant].borderStyle,
})
export const makeBorderConfig = (
  f: FoundationConfig,
  config: BorderFoundation
): BorderTokens => ({
  borderWidth: f[config.borderWidth],
  borderStyle: config.borderStyle,
})
export const makeBorderFoundations = ({
  widths,
  borders,
}: BorderFoundationsConfig): BorderFoundations => ({
  thin: makeBorderConfig(widths, borders.thin),
  medium: makeBorderConfig(widths, borders.medium),
  thick: makeBorderConfig(widths, borders.thick),
})
export const borderFoundationConfig: BorderFoundationsConfig = {
  widths: {
    "00": "0px",
    "01": "1px",
    "02": "2px",
    "03": "3px",
    "04": "4px",
    "05": "5px",
    "06": "6px",
    "07": "7px",
    "08": "8px",
    "09": "9px",
    "10": "10px",
  },
  borders: {
    thin: {
      borderWidth: "01",
      borderStyle: "solid",
    },
    medium: {
      borderWidth: "02",
      borderStyle: "solid",
    },
    thick: {
      borderWidth: "04",
      borderStyle: "solid",
    },
  },
}

//--------------------------------------------------------------------------------------------------
// Colorways
export type BrandColor = Brand
export type BaseSurfaceColor = "neutral" | "inverse"
export type StatusColor = "info" | "success" | "warning" | "danger"
export type StateColor = "enabled" | "disabled" | "selected" | "error"
export type TextColor = "black" | "white"
export type FoundationColor =
  | BrandColor
  | BaseSurfaceColor
  | StatusColor
  | StateColor
export type ConfigColor = FoundationColor | TextColor
export type FoundationShade = [FoundationColor, TokenKey]
export type GlyphFoundation = FoundationShade | "readable" | "currentColor"
export type InteractiveSurfaceColor =
  | "enabled"
  | "disabled"
  | "error"
  | "hover"
  | "active"
export type SurfaceColor = "background" | "inverse" | InteractiveSurfaceColor
export type ColorwayFoundations = {
  [key in FoundationColor]: FoundationConfig<string>
} & {
  [key in TextColor]: string
} & {
  colorways: {
    [key in SurfaceColor]: SurfaceColorwayConfig
  }
}
export type ColorwayConfig = {
  colors: {
    [key in ConfigColor]: string
  }
  shades: FoundationConfig<number>
}

// Colorway - Surface
export type SurfaceFoundation =
  | FoundationShade
  | "background"
  | "inverse"
  // | "prominent"
  | "currentColor"
  | "transparent"
export type SurfaceColorway<
  B = CSSVal<CSS.DataType.Color>,
  T = CSSVal<CSS.DataType.Color>,
  S = CSSVal<CSS.DataType.Paint>
> = {
  backgroundColor: B
  borderColor: B
  color: T
  textDecorationColor: T
  fill: S
  stroke: S
}
export type SurfaceColorwayConfig = SurfaceColorway<
  SurfaceFoundation,
  GlyphFoundation,
  GlyphFoundation
>
export const getGlyphColor = (
  f: ColorwayFoundations,
  backgroundColor: string,
  foundation: GlyphFoundation
): string => {
  if (foundation === "readable") {
    return readableColorIsBlack(backgroundColor) ? f.black : f.white
  }
  if (foundation === "currentColor") {
    return "currentColor"
  }
  const [color, colorShade] = foundation
  return toRgba(f[color][colorShade])
}
export const getSurfaceColor = (
  f: ColorwayFoundations,
  foundationToken: SurfaceFoundation
): string => {
  if (foundationToken === "background") {
    return toRgba(f.neutral["05"])
  }
  if (foundationToken === "inverse") {
    return toRgba(f.neutral["04"])
  }
  // if (foundationToken === "prominent") {
  //   return toRgba(f.disabled["05"])
  // }
  if (foundationToken === "currentColor") {
    return "currentColor"
  }
  if (foundationToken === "transparent") {
    return "transparent"
  }
  const [color, colorShade] = foundationToken
  return toRgba(f[color][colorShade])
}
export const isSurfaceColor = (
  tbd: SurfaceColor | SurfaceColorwayConfig | ColorTextColorwayConfig
): tbd is SurfaceColor => typeof tbd === "string"
export const makeSurfaceColorway = (
  f: ColorwayFoundations,
  variant: SurfaceColor | SurfaceColorwayConfig
): SurfaceColorway => {
  if (isSurfaceColor(variant)) {
    const bg = getSurfaceColor(f, f.colorways[variant].backgroundColor)
    return {
      backgroundColor: bg,
      borderColor: getSurfaceColor(f, f.colorways[variant].borderColor),
      color: getGlyphColor(f, bg, f.colorways[variant].color),
      textDecorationColor: getGlyphColor(
        f,
        bg,
        f.colorways[variant].textDecorationColor
      ),
      fill: getGlyphColor(f, bg, f.colorways[variant].fill),
      stroke: getGlyphColor(f, bg, f.colorways[variant].stroke),
    }
  }
  const bg = getSurfaceColor(f, variant.backgroundColor)
  return {
    backgroundColor: bg,
    borderColor: getSurfaceColor(f, variant.borderColor),
    color: getGlyphColor(f, bg, variant.color),
    textDecorationColor: getGlyphColor(f, bg, variant.textDecorationColor),
    fill: getGlyphColor(f, bg, variant.fill),
    stroke: getGlyphColor(f, bg, variant.stroke),
  }
}

// Colorway - Text
export type TextColorway<
  T = CSSVal<CSS.DataType.Color>,
  S = CSSVal<CSS.DataType.Paint>
> = {
  color: "currentColor"
  textDecorationColor: T
  fill?: S
  stroke?: S
}
export type TextColorwayConfig = TextColorway<GlyphFoundation, GlyphFoundation>
export const makeColorTextColorway = (
  f: ColorwayFoundations,
  variant: SurfaceColor | ColorTextColorwayConfig,
  backgroundColor: SurfaceFoundation
): ColorTextColorway => {
  if (isSurfaceColor(variant)) {
    const bg = getSurfaceColor(f, f.colorways[variant].backgroundColor)
    return {
      color: getGlyphColor(f, bg, f.colorways[variant].color),
      textDecorationColor: getGlyphColor(
        f,
        bg,
        f.colorways[variant].textDecorationColor
      ),
      fill: getGlyphColor(f, bg, f.colorways[variant].fill),
      stroke: getGlyphColor(f, bg, f.colorways[variant].stroke),
    }
  }
  const bg = getSurfaceColor(f, backgroundColor)
  return {
    color: getGlyphColor(f, bg, variant.color),
    textDecorationColor: getGlyphColor(f, bg, variant.textDecorationColor),
    fill: getGlyphColor(f, bg, variant.fill || "currentColor"),
    stroke: getGlyphColor(f, bg, variant.stroke || "currentColor"),
  }
}

// Colorway - ColorText
export type ColorTextColorway<
  T = CSSVal<CSS.DataType.Color>,
  S = CSSVal<CSS.DataType.Paint>
> = {
  color: T
  textDecorationColor: T
  fill?: S
  stroke?: S
}
export type ColorTextColorwayConfig = ColorTextColorway<
  GlyphFoundation,
  GlyphFoundation
>

//--------------------------------------------------------------------------------------------------
// Outline
export type Outline<
  W = CSSVal<CSS.Property.OutlineWidth>,
  S = CSSVal<CSS.Property.OutlineStyle>,
  C = CSSVal<CSS.Property.OutlineColor>,
  O = CSSVal<CSS.Property.OutlineOffset>
> = {
  outlineWidth: W
  outlineStyle: S
  outlineColor: C
  outlineOffset: O
}
export type OutlineVariant = "none" | "focus"
export type OutlineConfig = {
  [key in OutlineVariant]: Outline
}
export const outlineConfig: OutlineConfig = {
  none: {
    outlineWidth: "0",
    outlineStyle: "none",
    outlineColor: "transparent",
    outlineOffset: "0",
  },
  focus: {
    outlineWidth: "1px",
    outlineStyle: "solid",
    outlineColor: "rgba(0, 170, 255, 1)",
    outlineOffset: "2px",
  },
}

//--------------------------------------------------------------------------------------------------
// Radius
export type Radius = "round" | "normal" | "sharp"
export type RadiusProperties<T = CSSVal<CSS.Property.BorderRadius>> = {
  borderTopLeftRadius: T
  borderTopRightRadius: T
  borderBottomLeftRadius: T
  borderBottomRightRadius: T
}
export type RadiusFoundation = RadiusProperties<TokenKey>
export type RadiusTokens = RadiusProperties
export type RadiusConfig = {
  radii: FoundationConfig<CSS.Property.BorderRadius>
  corners: {
    [key in Radius]: RadiusFoundation
  }
}
export type RadiusFoundations = {
  [key in Radius]: RadiusTokens
}
export const makeRadiusTokens = (
  f: RadiusFoundations,
  radius: Radius
): RadiusTokens => ({
  borderTopLeftRadius: f[radius].borderTopLeftRadius,
  borderTopRightRadius: f[radius].borderTopRightRadius,
  borderBottomLeftRadius: f[radius].borderBottomLeftRadius,
  borderBottomRightRadius: f[radius].borderBottomRightRadius,
})
export const makeRadiusConfig = (
  f: FoundationConfig<CSS.Property.BorderRadius>,
  config: RadiusFoundation
): RadiusFoundation => ({
  borderTopLeftRadius: config.borderTopLeftRadius,
  borderTopRightRadius: config.borderTopRightRadius,
  borderBottomLeftRadius: config.borderBottomLeftRadius,
  borderBottomRightRadius: config.borderBottomRightRadius,
})
export const makeRadiusFoundations = ({
  radii,
  corners,
}: RadiusConfig): RadiusFoundations => ({
  round: makeRadiusConfig(radii, corners.round),
  normal: makeRadiusConfig(radii, corners.normal),
  sharp: makeRadiusConfig(radii, corners.sharp),
})
export const radiusFoundationsConfig: RadiusConfig = {
  radii: {
    "00": "0px",
    "01": "1px",
    "02": "2px",
    "03": "3px",
    "04": "4px",
    "05": "5px",
    "06": "6px",
    "07": "7px",
    "08": "8px",
    "09": "10%",
    "10": "50%",
  },
  corners: {
    round: {
      borderTopLeftRadius: "09",
      borderTopRightRadius: "09",
      borderBottomLeftRadius: "09",
      borderBottomRightRadius: "09",
    },
    normal: {
      borderTopLeftRadius: "04",
      borderTopRightRadius: "04",
      borderBottomLeftRadius: "04",
      borderBottomRightRadius: "04",
    },
    sharp: {
      borderTopLeftRadius: "00",
      borderTopRightRadius: "00",
      borderBottomLeftRadius: "00",
      borderBottomRightRadius: "00",
    },
  },
}

//--------------------------------------------------------------------------------------------------
// Spacing
export type Gap<T = CSSVal<CSS.Property.Gap>> = {
  gap: T
}
export type Padding<
  T = CSSVal<CSS.Property.PaddingTop>,
  B = CSSVal<CSS.Property.PaddingBottom>,
  L = CSSVal<CSS.Property.PaddingLeft>,
  R = CSSVal<CSS.Property.PaddingRight>
> = {
  paddingTop: T
  paddingBottom: B
  paddingLeft: L
  paddingRight: R
}
export type PaddingConfig = Padding<TokenKey, TokenKey, TokenKey, TokenKey>
export type Margin<
  T = CSSVal<CSS.Property.MarginTop>,
  B = CSSVal<CSS.Property.MarginBottom>,
  L = CSSVal<CSS.Property.MarginLeft>,
  R = CSSVal<CSS.Property.MarginRight>
> = {
  marginTop: T
  marginBottom: B
  marginLeft: L
  marginRight: R
}
export type SpacingConfig = FoundationConfig
export const spacingFoundations: SpacingConfig = {
  "00": "0",
  "01": "4px",
  "02": "8px",
  "03": "12px",
  "04": "16px",
  "05": "20px",
  "06": "24px",
  "07": "28px",
  "08": "32px",
  "09": "36px",
  "10": "40px",
}
export const makeGap = (f: SpacingConfig, c: TokenKey): Gap => ({
  gap: f[c],
})
export const makePadding = (f: SpacingConfig, c: PaddingConfig): Padding => ({
  paddingTop: f[c.paddingTop],
  paddingBottom: f[c.paddingBottom],
  paddingLeft: f[c.paddingLeft],
  paddingRight: f[c.paddingRight],
})

//--------------------------------------------------------------------------------------------------
// Typography
export type Typeface = {
  fontFamily: CSS.Property.FontFamily
  fontStyle: CSS.Property.FontStyle
  fontKerning: CSS.Property.FontKerning
  wordSpacing: CSS.Property.WordSpacing
  textTransform: CSS.Property.TextTransform
  imports: string[]
}
export type FontFamily<T = CSSVal<CSS.Property.FontFamily>> = { fontFamily: T }
export type FontKerning<T = CSSVal<CSS.Property.FontKerning>> = {
  fontKerning: T
}
export type FontSize<T = CSSVal<CSS.Property.FontSize>> = { fontSize: T }
export type FontStyle<T = CSSVal<CSS.Property.FontStyle>> = { fontStyle: T }
export type FontWeight<T = CSSVal<CSS.Property.FontWeight>> = { fontWeight: T }
export type LineHeight<T = CSSVal<CSS.Property.LineHeight>> = { lineHeight: T }
export type TextAlign<T = CSSVal<CSS.Property.TextAlign>> = { textAlign: T }
export type TextDecorationLine<T = CSSVal<CSS.Property.TextDecorationLine>> = {
  textDecorationLine: T
}
export type TextDecorationStyle<T = CSSVal<CSS.Property.TextDecorationStyle>> =
  { textDecorationStyle: T }
export type TextDecorationThickness<
  T = CSSVal<CSS.Property.TextDecorationThickness>
> = { textDecorationThickness: T }
export type TextIndent<T = CSSVal<CSS.Property.TextIndent>> = { textIndent: T }
export type TextTransform<T = CSSVal<CSS.Property.TextTransform>> = {
  textTransform: T
}
export type WordSpacing<T = CSSVal<CSS.Property.WordSpacing>> = {
  wordSpacing: T
}
// TODO: implement remaining CSS typographic properties
// justify: TextJustify // text-justify
// stretch: string, // font-stretch
// variant: string, // font-variant
// spacing: string, // letter-spacing
// quotes: string, // quotes
// alignLast: string, // text-align-last
// overflow: string, // text-overflow
// shadow: string, // text-shadow
// wordBreak: string, // word-break
// wrap: string, // word-wrap
// mode: string, // writing-mode

// Typography - Font
export type BaseFontTokens = FontKerning &
  FontStyle &
  FontWeight &
  TextAlign &
  TextIndent &
  TextTransform &
  WordSpacing
export type FontConfig = FontFamily<Ordinal> & BaseFontTokens
export type FontTokens = FontFamily // & BaseFontTokens
export type TextDecorationConfig = TextDecorationLine &
  TextDecorationStyle &
  TextDecorationThickness<TokenKey>
export type TextDecorationTokens = TextDecorationLine &
  TextDecorationStyle &
  TextDecorationThickness
export const makeTextDecorationTokens = (
  f: SpacingConfig,
  c: TextDecorationConfig
): TextDecorationTokens => ({
  textDecorationLine: c.textDecorationLine,
  textDecorationStyle: c.textDecorationStyle,
  textDecorationThickness: f[c.textDecorationThickness],
})
export type BodyFont =
  | "body1"
  | "body2"
  | "body3"
  | "label"
  | "caption"
  | "captionHeading"
export type HeadingFont = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type FontScaleTokens = FontSize & LineHeight
export type TypographyConfig = {
  typefaces: {
    [key in Ordinal]: Typeface
  }
  sizes: FoundationConfig<FontScaleTokens>
  fonts: {
    [key in HeadingFont]: FontConfig & { size: TokenKey }
  } & {
    [key in BodyFont]: FontConfig & { size: ScaleProperties<TokenKey> }
  }
}
export const makeFontTokens = (
  f: TypographyConfig,
  c: FontConfig
): FontTokens => ({
  fontFamily: f.typefaces[c.fontFamily].fontFamily,
  // fontKerning: c.fontKerning,
  // fontStyle: c.fontStyle,
  // fontWeight: c.fontWeight,
  // textAlign: c.textAlign,
  // textIndent: c.textIndent,
  // textTransform: c.textTransform,
  // wordSpacing: c.wordSpacing,
})
export const makeBodyFontTokens = (
  f: TypographyConfig,
  font: BodyFont
): FontTokens => makeFontTokens(f, f.fonts[font])
export const makeFontScaleTokens = (
  f: TypographyConfig,
  font: BodyFont,
  scale: Scale
): FontScaleTokens => ({
  fontSize: f.sizes[f.fonts[font].size[scale]].fontSize,
  lineHeight: f.sizes[f.fonts[font].size[scale]].lineHeight,
})
export const typographyConfig: TypographyConfig = {
  typefaces: {
    primary: {
      fontFamily: "'IBM Plex Sans', Arial, sans-serif",
      fontStyle: "normal",
      // fontWeight: 400,
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
      // fontWeight: 400,
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
      // fontWeight: 400,
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
      size: "10",
      textAlign: "start",
      textTransform: "none",
      // textDecorationLine: "none",
      // textDecorationStyle: "solid",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h1: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "09",
      textAlign: "start",
      textTransform: "none",
      // textDecorationLine: "none",
      // textDecorationStyle: "solid",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h2: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "08",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h3: {
      fontFamily: "secondary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "07",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h4: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "06",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h5: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "05",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
    },
    h6: {
      fontFamily: "primary",
      fontStyle: "normal",
      fontWeight: "600",
      size: "04",
      textAlign: "start",
      textTransform: "none",
      fontKerning: "auto",
      textIndent: "0",
      wordSpacing: "normal",
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
    caption: {
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
    captionHeading: {
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
  },
}

//--------------------------------------------------------------------------------------------------
// Elements
export type BlockScaleTokens = FontScaleTokens & Gap & Padding
export type BlockScaleConfig = Gap<TokenKey> & PaddingConfig
export type BlockTokens = {
  display?: CSS.Property.Display
  flex?: CSS.Property.Flex
  flexDirection?: CSS.Property.FlexDirection
  alignItems?: CSS.Property.AlignItems
  justifyContent?: CSS.Property.JustifyContent
}
export type ActionProps = {
  children: React.ReactNode
  Icon1?: IconType
  Icon2?: IconType
  scale?: Scale
}
export type Interactive<T = unknown> = {
  element: BorderTokens & SurfaceColorway & FontTokens & RadiusTokens & T
  focus: Outline
  hover: SurfaceColorway
  active: SurfaceColorway
}
export type InteractiveConfig = {
  element: {
    border: Width
    colorway: InteractiveSurfaceColor
    font: BodyFont
    radius: Radius
  }
  focus: OutlineVariant
  hover: InteractiveSurfaceColor
  active: InteractiveSurfaceColor
}
const interactiveConfig: InteractiveConfig = {
  element: {
    border: "medium",
    colorway: "enabled",
    font: "body1",
    radius: "normal",
  },
  focus: "focus",
  hover: "hover",
  active: "active",
}
const makeInteractiveTokens = (
  f: Foundations,
  c: InteractiveConfig
): Interactive => ({
  element: {
    ...makeBorderTokens(f.border, c.element.border),
    ...makeSurfaceColorway(f.colorway, c.element.colorway),
    ...makeBodyFontTokens(f.typography, c.element.font),
    ...makeRadiusTokens(f.radius, c.element.radius),
  },
  focus: outlineConfig[c.focus],
  hover: makeSurfaceColorway(f.colorway, c.hover),
  active: makeSurfaceColorway(f.colorway, c.active),
})
// const interactive: Interactive = {
//   element: {
//     // border
//     borderWidth: "1px",
//     borderStyle: "solid",
//     // colorway
//     backgroundColor: "rgba(240, 240, 240, 1)",
//     borderColor: "rgba(200, 200, 200, 1)",
//     color: "#030303",
//     textDecorationColor: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//     // font
//     fontFamily: "sans-serif",
//     // radius
//     borderTopLeftRadius: "4px",
//     borderTopRightRadius: "4px",
//     borderBottomLeftRadius: "4px",
//     borderBottomRightRadius: "4px",
//   },
//   focus: outlineConfig.focus,
//   hover: {
//     backgroundColor: "rgba(220, 220, 220, 1)",
//     borderColor: "rgba(180, 180, 180, 1)",
//     textDecorationColor: "#030303",
//     color: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//   },
//   active: {
//     backgroundColor: "rgba(200, 200, 200, 1)",
//     borderColor: "rgba(160, 160, 160, 1)",
//     color: "#030303",
//     textDecorationColor: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//   },
// }

// Element - Control
export type ControlVariant = "disabled" | "error"
export type ControlVariants<C = SurfaceColorway, S = BlockScaleTokens> = {
  [key in ControlVariant]: C
} & ScaleProperties<S>
export type ControlVariantsConfig = ControlVariants<
  InteractiveSurfaceColor,
  BlockScaleConfig
>
export const controlVariantsConfig: ControlVariantsConfig = {
  disabled: "disabled",
  error: "error",
  sm: {
    gap: "01",
    paddingTop: "01",
    paddingBottom: "01",
    paddingLeft: "02",
    paddingRight: "02",
  },
  md: {
    gap: "02",
    paddingTop: "02",
    paddingBottom: "02",
    paddingLeft: "03",
    paddingRight: "03",
  },
  lg: {
    gap: "03",
    paddingTop: "03",
    paddingBottom: "03",
    paddingLeft: "04",
    paddingRight: "04",
  },
}
export const makeControlVariants = (
  f: Foundations,
  c: ControlVariantsConfig,
  font: BodyFont
): ControlVariants => ({
  disabled: makeSurfaceColorway(f.colorway, c.disabled),
  error: makeSurfaceColorway(f.colorway, c.error),
  sm: {
    ...makeGap(f.spacing, c.sm.gap),
    ...makeFontScaleTokens(f.typography, font, "sm"),
    ...makePadding(f.spacing, c.sm),
  },
  md: {
    ...makeGap(f.spacing, c.md.gap),
    ...makeFontScaleTokens(f.typography, font, "md"),
    ...makePadding(f.spacing, c.md),
  },
  lg: {
    ...makeGap(f.spacing, c.lg.gap),
    ...makeFontScaleTokens(f.typography, font, "lg"),
    ...makePadding(f.spacing, c.lg),
  },
})
export type ControlConfig = InteractiveConfig & Variants<ControlVariantsConfig>
export const controlConfig: ControlConfig = {
  ...interactiveConfig,
  variants: controlVariantsConfig,
}
export type Control = Interactive<BlockTokens> & Variants<ControlVariants>
export const makeControlTokens = (
  f: Foundations,
  c: ControlConfig
): Control => ({
  ...makeInteractiveTokens(f, c),
  variants: makeControlVariants(f, c.variants, c.element.font),
})

// Element - Anchor
export type AnchorVariant = Ordinal
export type AnchorVariants<C = ColorTextColorway, S = FontScaleTokens & Gap> = {
  [key in AnchorVariant]: {
    enabled: C
    hover: C
    active: C
    visited: C
  }
} & {
  [key in Scale]: S
}
export type Anchor = {
  element: ColorTextColorway & FontTokens & TextDecorationTokens
  focus: Outline
  hover: ColorTextColorway & TextDecorationTokens
  active: ColorTextColorway & TextDecorationTokens
  visited: ColorTextColorway & TextDecorationTokens
} & Variants<AnchorVariants>
export type AnchorVariantConfig<T = unknown> = {
  colorway: ColorTextColorwayConfig | "background"
} & T
export type AnchorConfig = {
  element: AnchorVariantConfig<TextDecorationConfig> & {
    font: BodyFont
  }
  focus: OutlineVariant
  hover: AnchorVariantConfig<TextDecorationConfig>
  active: AnchorVariantConfig<TextDecorationConfig>
  visited: AnchorVariantConfig<TextDecorationConfig>
} & Variants<
  AnchorVariants<ColorTextColorwayConfig | "background", Gap<TokenKey>>
>
export const anchorConfig: AnchorConfig = {
  element: {
    colorway: "background",
    font: "body1",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "01",
  },
  focus: "focus",
  hover: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "01",
  },
  active: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "01",
  },
  visited: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "01",
  },
  variants: {
    primary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand1", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand1", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand1", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand1", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand2", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand2", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand2", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand2", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand3", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand3", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand3", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand3", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    sm: {
      gap: "01",
    },
    md: {
      gap: "02",
    },
    lg: {
      gap: "03",
    },
  },
}
export const makeAnchorTokens = (f: Foundations, c: AnchorConfig): Anchor => ({
  element: {
    ...makeColorTextColorway(f.colorway, c.element.colorway, "background"),
    ...makeBodyFontTokens(f.typography, c.element.font),
    ...makeTextDecorationTokens(f.spacing, c.element),
  },
  focus: outlineConfig[c.focus],
  hover: {
    ...makeColorTextColorway(f.colorway, c.hover.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.hover),
  },
  active: {
    ...makeColorTextColorway(f.colorway, c.active.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.active),
  },
  visited: {
    ...makeColorTextColorway(f.colorway, c.visited.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.visited),
  },
  variants: {
    primary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.primary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.primary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.primary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.primary.visited,
        "background"
      ),
    },
    secondary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.visited,
        "background"
      ),
    },
    tertiary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.visited,
        "background"
      ),
    },
    sm: {
      ...makeGap(f.spacing, c.variants.sm.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "sm"),
    },
    md: {
      ...makeGap(f.spacing, c.variants.md.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "md"),
    },
    lg: {
      ...makeGap(f.spacing, c.variants.lg.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "lg"),
    },
  },
})

// Element - Button
export type ButtonVariant = ControlVariant | Ordinal
export type ButtonVariantStateConfig = Partial<BorderConfig> &
  SurfaceColorwayConfig
export type ButtonVariantConfig = {
  enabled: ButtonVariantStateConfig
  hover: ButtonVariantStateConfig
  active: ButtonVariantStateConfig
}
export type ButtonVariantTokens = {
  enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
  hover: (BorderTokens & SurfaceColorway) | SurfaceColorway
  active: (BorderTokens & SurfaceColorway) | SurfaceColorway
}
export type ButtonVariants = ControlVariants & {
  primary: ButtonVariantTokens
  secondary: ButtonVariantTokens
  tertiary: ButtonVariantTokens
}
export type ButtonVariantsConfig = ControlVariantsConfig & {
  primary: ButtonVariantConfig
  secondary: ButtonVariantConfig
  tertiary: ButtonVariantConfig
}
export type Button = Interactive<BlockTokens> &
  Variants<ControlVariants & ButtonVariants>
export type ButtonConfig = InteractiveConfig & Variants<ButtonVariantsConfig>
export const makeButtonVariants = (
  f: Foundations,
  c: ButtonVariantsConfig,
  font: BodyFont
): ButtonVariants => ({
  ...makeControlVariants(f, c, font),
  primary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.primary.enabled),
      ...makeBorderTokens(f.border, c.primary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.primary.hover),
      ...makeBorderTokens(f.border, c.primary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.primary.active),
      ...makeBorderTokens(f.border, c.primary.active?.border || "medium"),
    },
  },
  secondary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.secondary.enabled),
      ...makeBorderTokens(f.border, c.secondary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.secondary.hover),
      ...makeBorderTokens(f.border, c.secondary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.secondary.active),
      ...makeBorderTokens(f.border, c.secondary.active?.border || "medium"),
    },
  },
  tertiary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.enabled),
      ...makeBorderTokens(f.border, c.tertiary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.hover),
      ...makeBorderTokens(f.border, c.tertiary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.active),
      ...makeBorderTokens(f.border, c.tertiary.active?.border || "medium"),
    },
  },
})
export const buttonVariantsConfig: ButtonVariantsConfig = {
  ...controlVariantsConfig,
  primary: {
    enabled: {
      backgroundColor: ["brand1", "05"],
      borderColor: ["brand1", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    hover: {
      backgroundColor: ["brand1", "04"],
      borderColor: ["brand1", "03"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    active: {
      backgroundColor: ["brand1", "03"],
      borderColor: ["brand1", "02"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
  },
  secondary: {
    enabled: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "05"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
    hover: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "04"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
    active: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "03"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
  },
  tertiary: {
    enabled: {
      backgroundColor: ["brand3", "05"],
      borderColor: ["brand3", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    hover: {
      backgroundColor: ["brand3", "04"],
      borderColor: ["brand3", "03"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    active: {
      backgroundColor: ["brand3", "03"],
      borderColor: ["brand3", "02"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
  },
}
export const buttonConfig: ButtonConfig = {
  ...interactiveConfig,
  variants: buttonVariantsConfig,
}
export const makeButtonTokens = (f: Foundations, c: ButtonConfig): Button => ({
  ...makeInteractiveTokens(f, c),
  variants: makeButtonVariants(f, c.variants, c.element.font),
})

// Elements - Text
export type TextVariants = {
  [key in BodyFont]: FontTokens
} & ScaleProperties<FontScaleTokens>
export type Text = {
  element: TextColorway
} & Variants<TextVariants>
export const bodyTextConfig: Text = {
  element: {
    color: "currentColor",
    textDecorationColor: "currentColor",
    fill: "currentColor",
    stroke: "currentColor",
  },
  variants: {
    body1: {
      fontFamily: "sans-serif",
    },
    body2: {
      fontFamily: "serif",
    },
    body3: {
      fontFamily: "serif",
    },
    label: {
      fontFamily: "serif",
    },
    caption: {
      fontFamily: "serif",
    },
    captionHeading: {
      fontFamily: "serif",
    },
    sm: {
      fontSize: "12px",
      lineHeight: "14px",
    },
    md: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "18px",
    },
  },
}

// Elements - Heading
export type HeadingVariants = {
  [key in HeadingFont]: FontTokens & FontScaleTokens & Margin
}
export type Heading = {
  element: TextColorway
} & Variants<HeadingVariants>
export const headingConfig: Heading = {
  element: {
    color: "currentColor",
    textDecorationColor: "currentColor",
    fill: "currentColor",
    stroke: "currentColor",
  },
  variants: {
    display: {
      fontFamily: "sans-serif",
      fontSize: "52px",
      lineHeight: "64px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h1: {
      fontFamily: "sans-serif",
      fontSize: "40px",
      lineHeight: "60px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h2: {
      fontFamily: "sans-serif",
      fontSize: "32px",
      lineHeight: "48px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h3: {
      fontFamily: "sans-serif",
      fontSize: "24px",
      lineHeight: "40px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h4: {
      fontFamily: "sans-serif",
      fontSize: "22px",
      lineHeight: "36px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h5: {
      fontFamily: "sans-serif",
      fontSize: "20px",
      lineHeight: "32px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
    h6: {
      fontFamily: "sans-serif",
      fontSize: "18px",
      lineHeight: "28px",
      marginTop: "0.5em",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
    },
  },
}

//--------------------------------------------------------------------------------------------------
// Foundations
export type BaseFoundations<B, C, R> = {
  border: B
  colorway: C
  radius: R
  spacing: SpacingConfig
  typography: TypographyConfig
}
export type FoundationsConfig = BaseFoundations<
  BorderFoundationsConfig,
  ColorwayConfig,
  RadiusConfig
>
export type Foundations = BaseFoundations<
  BorderFoundations,
  ColorwayFoundations,
  RadiusFoundations
>
