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

//--------------------------------------------------------------------------------------------------
// Colorways
export type BrandColor = Brand
export type BaseSurfaceFoundation = "neutral" | "inverse"
export type StatusColor = "info" | "success" | "warning" | "danger"
export type StateColor = "enabled" | "disabled" | "selected" | "error"
export type TextColor = "black" | "white"
export type FoundationColor =
  | BrandColor
  | BaseSurfaceFoundation
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
export type BaseSurfaceColor = "background" | "inverse" | "prominent"
export type SurfaceColor =
  | BaseSurfaceColor
  | InteractiveSurfaceColor
  | "selected"
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
  // | "inverse"
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
  opacity?: CSSVal<CSS.Property.Opacity>
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
  // if (foundationToken === "inverse") {
  //   console.log("INVERSE")
  //   return toRgba(f.inverse["05"])
  // }
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
      opacity: f.colorways[variant].opacity,
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
    opacity: variant.opacity,
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
// export type TextColorwayConfig = TextColorway<GlyphFoundation, GlyphFoundation>
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
export type ColorTextColorwayConfig =
  | ColorTextColorway<GlyphFoundation, GlyphFoundation>
  | SurfaceColor
// | "background"
// | "error"
// | "selected"
// | "disabled"

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

//--------------------------------------------------------------------------------------------------
// Spacing
export type Gap<T = CSSVal<CSS.Property.Gap>> = {
  gap: T
}
export const makeGap = (f: SpacingConfig, c: TokenKey): Gap => ({
  gap: f[c],
})
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
export const makePadding = (f: SpacingConfig, c: PaddingConfig): Padding => ({
  paddingTop: f[c.paddingTop],
  paddingBottom: f[c.paddingBottom],
  paddingLeft: f[c.paddingLeft],
  paddingRight: f[c.paddingRight],
})
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
// export type MarginConfig = Margin<TokenKey, TokenKey, TokenKey, TokenKey>
// export const makeMargin = (f: SpacingConfig, c: MarginConfig): Margin => ({
//   marginTop: f[c.marginTop],
//   marginBottom: f[c.marginBottom],
//   marginLeft: f[c.marginLeft],
//   marginRight: f[c.marginRight],
// })
export type SpacingConfig = FoundationConfig
export type DimensionProperties<
  H = CSSVal<CSS.Property.Height>,
  W = CSSVal<CSS.Property.Width>
> = {
  height: H
  width: W
}
export type DimensionConfig = DimensionProperties<TokenKey, TokenKey>
export const makeDimensionTokens = (
  f: SpacingConfig,
  c: DimensionConfig
): DimensionProperties => ({
  height: f[c.height],
  width: f[c.width],
})

//--------------------------------------------------------------------------------------------------
// Typography
export type Typeface = {
  fontFamily: CSS.Property.FontFamily
  fontWeight: CSS.Property.FontWeight
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
export type FontTokens = FontFamily & BaseFontTokens
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
    [key in HeadingFont]: FontConfig &
      Pick<Margin, "marginTop" | "marginBottom"> & { size: TokenKey }
  } & {
    [key in BodyFont]: FontConfig & { size: ScaleProperties<TokenKey> }
  }
}
export const makeFontTokens = (
  f: TypographyConfig,
  c: FontConfig
): FontTokens => ({
  fontFamily: f.typefaces[c.fontFamily].fontFamily,
  fontKerning: c.fontKerning,
  fontStyle: c.fontStyle,
  fontWeight: c.fontWeight,
  textAlign: c.textAlign,
  textIndent: c.textIndent,
  textTransform: c.textTransform,
  wordSpacing: c.wordSpacing,
})
export const makeBodyFontTokens = (
  f: TypographyConfig,
  font: BodyFont
): FontTokens => makeFontTokens(f, f.fonts[font])
export const makeHeadingFontTokens = (
  f: TypographyConfig,
  font: HeadingFont
): FontTokens => makeFontTokens(f, f.fonts[font])
export const isHeadingFont = (
  tbd: BodyFont | HeadingFont
): tbd is HeadingFont =>
  ["display", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tbd)
export const makeFontScaleTokens = (
  f: TypographyConfig,
  font: BodyFont | HeadingFont,
  scale: Scale = "md"
): FontScaleTokens => {
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
  children?: React.ReactNode
  Icon1?: IconType
  Icon2?: IconType
  scale?: Scale | "icon"
}
export type Surface<T = unknown> = {
  element: BorderTokens & SurfaceColorway & FontTokens & RadiusTokens
} & Variants<ScaleProperties<BlockScaleTokens> & T>
export type SurfaceConfig<T = unknown> = {
  element: {
    border: Width
    colorway: BaseSurfaceColor
    font: BodyFont
    radius: Radius
  }
} & Variants<ScaleProperties<BlockScaleConfig> & T>
export const surfaceConfig: SurfaceConfig = {
  element: {
    border: "thin",
    colorway: "background",
    font: "body1",
    radius: "normal",
  },
  variants: {
    sm: {
      gap: "02",
      paddingTop: "02",
      paddingBottom: "02",
      paddingLeft: "02",
      paddingRight: "02",
    },
    md: {
      gap: "03",
      paddingTop: "03",
      paddingBottom: "03",
      paddingLeft: "03",
      paddingRight: "03",
    },
    lg: {
      gap: "04",
      paddingTop: "04",
      paddingBottom: "04",
      paddingLeft: "04",
      paddingRight: "04",
    },
  },
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
export const interactiveConfig: InteractiveConfig = {
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
export const makeInteractiveTokens = (
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
