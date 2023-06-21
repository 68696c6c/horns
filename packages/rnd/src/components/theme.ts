// import * as CSS from "csstype"
// import { IconType } from "react-icons"
//
// //--------------------------------------------------------------------------------------------------
// // Utils
//
// export type CSSVarFunc =
//   | `var(--${string})`
//   | `var(--${string}, ${string | number})`
// export type CSSVal<T> = T | CSSVarFunc
// export type Brand = "brand1" | "brand2" | "brand3"
// export type Ordinal = "primary" | "secondary" | "tertiary"
// export type Scale = "sm" | "md" | "lg"
// export type ScaleProperties<T> = {
//   [key in Scale]: T
// }
// export type Width = "thin" | "medium" | "thick"
// export type TokenKey =
//   | "00" // smallest size, darkest shade
//   | "01"
//   | "02"
//   | "03"
//   | "04"
//   | "05" // base size
//   | "06"
//   | "07"
//   | "08"
//   | "09"
//   | "10" // largest size, lightest shade
// export type FoundationConfig<T = string> = {
//   [key in TokenKey]: T
// }
// export type Variants<T> = {
//   variants: T
// }
//
// export const errorClass = "error"
// export const getErrorClass = (hasError?: boolean) => {
//   return hasError ? errorClass : ""
// }
//
// export const valueClass = "has-value"
// export const getValueClass = (hasValue?: boolean) => {
//   return hasValue ? valueClass : ""
// }
//
// //--------------------------------------------------------------------------------------------------
// // Borders
// export type BorderWidthProperties<T = CSSVal<CSS.Property.BorderWidth>> = {
//   borderWidth: T
// }
// export type BorderStyleProperties<T = CSSVal<CSS.Property.BorderStyle>> = {
//   borderStyle: T
// }
// export type BorderFoundation = BorderWidthProperties<TokenKey> &
//   BorderStyleProperties
// export type BorderTokens = BorderWidthProperties & BorderStyleProperties
// export type BorderConfig = {
//   widths: FoundationConfig
//   borders: {
//     [key in Width]: BorderFoundation
//   }
// }
// export type BorderFoundations = {
//   [key in Width]: BorderTokens
// }
// export const borderConfig: BorderConfig = {
//   widths: {
//     "00": "0px",
//     "01": "1px",
//     "02": "2px",
//     "03": "3px",
//     "04": "4px",
//     "05": "5px",
//     "06": "6px",
//     "07": "7px",
//     "08": "8px",
//     "09": "9px",
//     "10": "10px",
//   },
//   borders: {
//     thin: {
//       borderWidth: "01",
//       borderStyle: "solid",
//     },
//     medium: {
//       borderWidth: "02",
//       borderStyle: "solid",
//     },
//     thick: {
//       borderWidth: "04",
//       borderStyle: "solid",
//     },
//   },
// }
//
// //--------------------------------------------------------------------------------------------------
// // Colorways
// export type BrandColor = Brand
// export type SurfaceColor = "neutral" | "inverse"
// export type StatusColor = "info" | "success" | "warning" | "danger"
// export type StateColor = "enabled" | "disabled" | "selected" | "error"
// export type TextColor = "black" | "white"
// export type FoundationColor =
//   | BrandColor
//   | SurfaceColor
//   | StatusColor
//   | StateColor
// export type ConfigColor = FoundationColor | TextColor
// export type FoundationShade = [FoundationColor, TokenKey]
// export type GlyphFoundation = FoundationShade | "readable" | "currentColor"
// export type InteractiveSurfaceColor =
//   | "enabled"
//   | "disabled"
//   | "error"
//   | "hover"
//   | "active"
// export type ColorwayFoundations = {
//   [key in FoundationColor]: FoundationConfig<string>
// } & {
//   [key in TextColor]: string
// }
// export type ColorwayConfig = {
//   colors: {
//     [key in ConfigColor]: string
//   }
//   shades: FoundationConfig<number>
// }
//
// // Colorway - Surface
// export type SurfaceFoundation =
//   | FoundationShade
//   | "background"
//   | "inverse"
//   | "prominent"
// export type SurfaceColorway<
//   B = CSSVal<CSS.DataType.Color>,
//   T = CSSVal<CSS.DataType.Color>,
//   S = CSSVal<CSS.DataType.Paint>
// > = {
//   backgroundColor: B
//   borderColor: B
//   color: T
//   textDecorationColor: T
//   fill: S
//   stroke: S
// }
// export type SurfaceColorwayConfig = SurfaceColorway<
//   SurfaceFoundation,
//   GlyphFoundation,
//   GlyphFoundation
// >
//
// // Colorway - Text
// export type TextColorway<
//   T = CSSVal<CSS.DataType.Color>,
//   S = CSSVal<CSS.DataType.Paint>
// > = {
//   color: "currentColor"
//   textDecorationColor: T
//   fill?: S
//   stroke?: S
// }
// export type TextColorwayConfig = TextColorway<GlyphFoundation, GlyphFoundation>
//
// // Colorway - ColorText
// export type ColorTextColorway<
//   T = CSSVal<CSS.DataType.Color>,
//   S = CSSVal<CSS.DataType.Paint>
// > = {
//   color: T
//   textDecorationColor: T
//   fill?: S
//   stroke?: S
// }
// export type ColorTextColorwayConfig = ColorTextColorway<
//   GlyphFoundation,
//   GlyphFoundation
// >
//
// //--------------------------------------------------------------------------------------------------
// // Outline
// export type Outline<
//   W = CSSVal<CSS.Property.OutlineWidth>,
//   S = CSSVal<CSS.Property.OutlineStyle>,
//   C = CSSVal<CSS.Property.OutlineColor>,
//   O = CSSVal<CSS.Property.OutlineOffset>
// > = {
//   outlineWidth: W
//   outlineStyle: S
//   outlineColor: C
//   outlineOffset: O
// }
// export type OutlineVariant = "none" | "focus"
// export type OutlineConfig = {
//   [key in OutlineVariant]: Outline
// }
// export const outlineConfig: OutlineConfig = {
//   none: {
//     outlineWidth: "0",
//     outlineStyle: "none",
//     outlineColor: "transparent",
//     outlineOffset: "0",
//   },
//   focus: {
//     outlineWidth: "1px",
//     outlineStyle: "solid",
//     outlineColor: "rgba(0, 170, 255, 1)",
//     outlineOffset: "2px",
//   },
// }
//
// //--------------------------------------------------------------------------------------------------
// // Radius
// export type Radius = "round" | "normal" | "sharp"
// export type RadiusProperties<T = CSSVal<CSS.Property.BorderRadius>> = {
//   borderTopLeftRadius: T
//   borderTopRightRadius: T
//   borderBottomLeftRadius: T
//   borderBottomRightRadius: T
// }
// export type RadiusFoundation = RadiusProperties<TokenKey>
// export type RadiusTokens = RadiusProperties
// export type RadiusConfig = {
//   radii: FoundationConfig<CSS.Property.BorderRadius>
//   corners: {
//     [key in Radius]: RadiusFoundation
//   }
// }
// export type RadiusFoundations = {
//   [key in Radius]: RadiusTokens
// }
// export const radiusConfig: RadiusConfig = {
//   radii: {
//     "00": "0px",
//     "01": "1px",
//     "02": "2px",
//     "03": "3px",
//     "04": "4px",
//     "05": "5px",
//     "06": "6px",
//     "07": "7px",
//     "08": "8px",
//     "09": "10%",
//     "10": "50%",
//   },
//   corners: {
//     round: {
//       borderTopLeftRadius: "09",
//       borderTopRightRadius: "09",
//       borderBottomLeftRadius: "09",
//       borderBottomRightRadius: "09",
//     },
//     normal: {
//       borderTopLeftRadius: "04",
//       borderTopRightRadius: "04",
//       borderBottomLeftRadius: "04",
//       borderBottomRightRadius: "04",
//     },
//     sharp: {
//       borderTopLeftRadius: "00",
//       borderTopRightRadius: "00",
//       borderBottomLeftRadius: "00",
//       borderBottomRightRadius: "00",
//     },
//   },
// }
//
// //--------------------------------------------------------------------------------------------------
// // Spacing
// export type Gap<T = CSSVal<CSS.Property.Gap>> = {
//   gap: T
// }
// export type Padding<
//   T = CSSVal<CSS.Property.PaddingTop>,
//   B = CSSVal<CSS.Property.PaddingBottom>,
//   L = CSSVal<CSS.Property.PaddingLeft>,
//   R = CSSVal<CSS.Property.PaddingRight>
// > = {
//   paddingTop: T
//   paddingBottom: B
//   paddingLeft: L
//   paddingRight: R
// }
// export type Margin<
//   T = CSSVal<CSS.Property.MarginTop>,
//   B = CSSVal<CSS.Property.MarginBottom>,
//   L = CSSVal<CSS.Property.MarginLeft>,
//   R = CSSVal<CSS.Property.MarginRight>
// > = {
//   marginTop: T
//   marginBottom: B
//   marginLeft: L
//   marginRight: R
// }
// export const spacingConfig: FoundationConfig = {
//   "00": "0",
//   "01": "4px",
//   "02": "8px",
//   "03": "12px",
//   "04": "16px",
//   "05": "20px",
//   "06": "24px",
//   "07": "28px",
//   "08": "32px",
//   "09": "36px",
//   "10": "40px",
// }
//
// //--------------------------------------------------------------------------------------------------
// // Typography
// export type Typeface = {
//   fontFamily: CSS.Property.FontFamily
//   fontStyle: CSS.Property.FontStyle
//   fontKerning: CSS.Property.FontKerning
//   wordSpacing: CSS.Property.WordSpacing
//   textTransform: CSS.Property.TextTransform
//   imports: string[]
// }
// export type FontFamily<T = CSSVal<CSS.Property.FontFamily>> = { fontFamily: T }
// export type FontKerning<T = CSSVal<CSS.Property.FontKerning>> = {
//   fontKerning: T
// }
// export type FontSize<T = CSSVal<CSS.Property.FontSize>> = { fontSize: T }
// export type FontStyle<T = CSSVal<CSS.Property.FontStyle>> = { fontStyle: T }
// export type FontWeight<T = CSSVal<CSS.Property.FontWeight>> = { fontWeight: T }
// export type LineHeight<T = CSSVal<CSS.Property.LineHeight>> = { lineHeight: T }
// export type TextAlign<T = CSSVal<CSS.Property.TextAlign>> = { textAlign: T }
// export type TextDecorationLine<T = CSSVal<CSS.Property.TextDecorationLine>> = {
//   textDecorationLine: T
// }
// export type TextDecorationStyle<T = CSSVal<CSS.Property.TextDecorationStyle>> =
//   { textDecorationStyle: T }
// export type TextDecorationThickness<
//   T = CSSVal<CSS.Property.TextDecorationThickness>
// > = { textDecorationThickness: T }
// export type TextIndent<T = CSSVal<CSS.Property.TextIndent>> = { textIndent: T }
// export type TextTransform<T = CSSVal<CSS.Property.TextTransform>> = {
//   textTransform: T
// }
// export type WordSpacing<T = CSSVal<CSS.Property.WordSpacing>> = {
//   wordSpacing: T
// }
// // TODO: implement remaining CSS typographic properties
// // justify: TextJustify // text-justify
// // stretch: string, // font-stretch
// // variant: string, // font-variant
// // spacing: string, // letter-spacing
// // quotes: string, // quotes
// // alignLast: string, // text-align-last
// // overflow: string, // text-overflow
// // shadow: string, // text-shadow
// // wordBreak: string, // word-break
// // wrap: string, // word-wrap
// // mode: string, // writing-mode
//
// // Typography - Font
// export type BaseFontTokens = FontKerning &
//   FontStyle &
//   FontWeight &
//   TextAlign &
//   TextIndent &
//   TextTransform &
//   WordSpacing
// export type FontConfig = FontFamily<Ordinal> & BaseFontTokens
// export type FontTokens = FontFamily
// export type TextDecorationTokens = TextDecorationLine &
//   TextDecorationStyle &
//   TextDecorationThickness
// export type BodyFont =
//   | "body1"
//   | "body2"
//   | "body3"
//   | "label"
//   | "caption"
//   | "captionHeading"
// export type HeadingFont = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
// export type FontScaleTokens = FontSize & LineHeight
// export type TypographyConfig = {
//   typefaces: {
//     [key in Ordinal]: Typeface
//   }
//   sizes: FoundationConfig<FontScaleTokens>
//   fonts: {
//     [key in HeadingFont]: FontConfig & { size: TokenKey }
//   } & {
//     [key in BodyFont]: FontConfig & { size: ScaleProperties<TokenKey> }
//   }
// }
// export const typographyConfig: TypographyConfig = {
//   typefaces: {
//     primary: {
//       fontFamily: "'IBM Plex Sans', Arial, sans-serif",
//       fontStyle: "normal",
//       // fontWeight: 400,
//       fontKerning: "auto",
//       wordSpacing: "normal",
//       textTransform: "none",
//       imports: [
//         "@fontsource/ibm-plex-sans/300.css",
//         "@fontsource/ibm-plex-sans/400.css",
//         "@fontsource/ibm-plex-sans/500.css",
//         "@fontsource/ibm-plex-sans/600.css",
//         "@fontsource/ibm-plex-sans/700.css",
//       ],
//     },
//     secondary: {
//       fontFamily: "'IBM Plex Serif', Georgia, sans-serif",
//       fontStyle: "normal",
//       // fontWeight: 400,
//       fontKerning: "auto",
//       wordSpacing: "normal",
//       textTransform: "none",
//       imports: [
//         "@fontsource/ibm-plex-serif/300.css",
//         "@fontsource/ibm-plex-serif/400.css",
//         "@fontsource/ibm-plex-serif/500.css",
//         "@fontsource/ibm-plex-serif/600.css",
//         "@fontsource/ibm-plex-serif/700.css",
//       ],
//     },
//     tertiary: {
//       fontFamily: "'JetBrains Mono Variable', 'Courier New', monospace",
//       fontStyle: "normal",
//       // fontWeight: 400,
//       fontKerning: "auto",
//       wordSpacing: "normal",
//       textTransform: "none",
//       imports: ["@fontsource/ibm-plex-sans/400.css"],
//     },
//   },
//   sizes: {
//     "00": {
//       fontSize: "10px",
//       lineHeight: "12px",
//     },
//     "01": {
//       fontSize: "12px",
//       lineHeight: "16px",
//     },
//     "02": {
//       fontSize: "14px",
//       lineHeight: "20px",
//     },
//     "03": {
//       fontSize: "16px",
//       lineHeight: "24px",
//     },
//     "04": {
//       fontSize: "18px",
//       lineHeight: "28px",
//     },
//     "05": {
//       fontSize: "20px",
//       lineHeight: "32px",
//     },
//     "06": {
//       fontSize: "22px",
//       lineHeight: "36px",
//     },
//     "07": {
//       fontSize: "24px",
//       lineHeight: "40px",
//     },
//     "08": {
//       fontSize: "32px",
//       lineHeight: "48px",
//     },
//     "09": {
//       fontSize: "40px",
//       lineHeight: "60px",
//     },
//     "10": {
//       fontSize: "52px",
//       lineHeight: "64px",
//     },
//   },
//   fonts: {
//     display: {
//       fontFamily: "secondary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "10",
//       textAlign: "start",
//       textTransform: "none",
//       // textDecorationLine: "none",
//       // textDecorationStyle: "solid",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h1: {
//       fontFamily: "secondary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "09",
//       textAlign: "start",
//       textTransform: "none",
//       // textDecorationLine: "none",
//       // textDecorationStyle: "solid",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h2: {
//       fontFamily: "secondary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "08",
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h3: {
//       fontFamily: "secondary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "07",
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h4: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "06",
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h5: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "05",
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     h6: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: "04",
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     body1: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "400",
//       size: {
//         sm: "02",
//         md: "03",
//         lg: "04",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     body2: {
//       fontFamily: "secondary",
//       fontStyle: "normal",
//       fontWeight: "400",
//       size: {
//         sm: "02",
//         md: "03",
//         lg: "04",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     body3: {
//       fontFamily: "tertiary",
//       fontStyle: "normal",
//       fontWeight: "400",
//       size: {
//         sm: "02",
//         md: "03",
//         lg: "04",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     label: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: {
//         sm: "02",
//         md: "03",
//         lg: "04",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     caption: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "400",
//       size: {
//         sm: "00",
//         md: "01",
//         lg: "02",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//     captionHeading: {
//       fontFamily: "primary",
//       fontStyle: "normal",
//       fontWeight: "600",
//       size: {
//         sm: "00",
//         md: "01",
//         lg: "02",
//       },
//       textAlign: "start",
//       textTransform: "none",
//       fontKerning: "auto",
//       textIndent: "0",
//       wordSpacing: "normal",
//     },
//   },
// }
//
// //--------------------------------------------------------------------------------------------------
// // Elements
// export type BlockScaleTokens = FontScaleTokens & Gap & Padding
// export type BlockScaleConfig = Gap<TokenKey> & Padding<TokenKey>
// export type BlockTokens = {
//   display?: CSS.Property.Display
//   flex?: CSS.Property.Flex
//   flexDirection?: CSS.Property.FlexDirection
//   alignItems?: CSS.Property.AlignItems
//   justifyContent?: CSS.Property.JustifyContent
// }
// export type ActionProps = {
//   children: React.ReactNode
//   Icon1?: IconType
//   Icon2?: IconType
//   scale?: Scale
// }
// export type Interactive<T = unknown> = {
//   element: BorderTokens & SurfaceColorway & FontTokens & RadiusTokens & T
//   focus: Outline
//   hover: SurfaceColorway
//   active: SurfaceColorway
// }
// export type InteractiveConfig = {
//   element: {
//     border: Width
//     colorway: InteractiveSurfaceColor
//     font: BodyFont
//     radius: Radius
//   }
//   focus: OutlineVariant
//   hover: InteractiveSurfaceColor
//   active: InteractiveSurfaceColor
// }
// const interactiveConfig: InteractiveConfig = {
//   element: {
//     border: "medium",
//     colorway: "enabled",
//     font: "body1",
//     radius: "normal",
//   },
//   focus: "focus",
//   hover: "hover",
//   active: "active",
// }
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
//
// // Element - Control
// export type ControlVariant = "disabled" | "error"
// export type ControlVariants<C = SurfaceColorway, S = BlockScaleTokens> = {
//   [key in ControlVariant]: C
// } & ScaleProperties<S>
// export type ControlVariantsConfig = ControlVariants<
//   InteractiveSurfaceColor,
//   BlockScaleConfig
// >
// export const controlVariantsConfig: ControlVariantsConfig = {
//   disabled: "disabled",
//   error: "error",
//   sm: {
//     gap: "01",
//     paddingTop: "01",
//     paddingBottom: "01",
//     paddingLeft: "02",
//     paddingRight: "02",
//   },
//   md: {
//     gap: "02",
//     paddingTop: "02",
//     paddingBottom: "02",
//     paddingLeft: "03",
//     paddingRight: "03",
//   },
//   lg: {
//     gap: "03",
//     paddingTop: "03",
//     paddingBottom: "03",
//     paddingLeft: "04",
//     paddingRight: "04",
//   },
// }
// export const controlVariants: ControlVariants = {
//   disabled: {
//     backgroundColor: "rgba(127, 127, 127, 1)",
//     borderColor: "rgba(100, 100, 100, 1)",
//     textDecorationColor: "rgba(100, 100, 100, 1)",
//     color: "rgba(100, 100, 100, 1)",
//     fill: "rgba(100, 100, 100, 1)",
//     stroke: "rgba(100, 100, 100, 1)",
//   },
//   error: {
//     backgroundColor: "rgba(240, 240, 240, 1)",
//     borderColor: "rgba(255, 0, 64, 1)",
//     color: "#030303",
//     textDecorationColor: "#030303",
//     fill: "rgba(255, 0, 64, 1)",
//     stroke: "rgba(255, 0, 64, 1)",
//   },
//   sm: {
//     fontSize: "12px",
//     lineHeight: "14px",
//     gap: "6px",
//     paddingTop: "6px",
//     paddingBottom: "6px",
//     paddingLeft: "14px",
//     paddingRight: "14px",
//   },
//   md: {
//     fontSize: "14px",
//     lineHeight: "16px",
//     gap: "8px",
//     paddingTop: "8px",
//     paddingBottom: "8px",
//     paddingLeft: "16px",
//     paddingRight: "16px",
//   },
//   lg: {
//     fontSize: "16px",
//     lineHeight: "18px",
//     gap: "10px",
//     paddingTop: "10px",
//     paddingBottom: "10px",
//     paddingLeft: "18px",
//     paddingRight: "18px",
//   },
// }
// export type ControlConfig = InteractiveConfig & Variants<ControlVariantsConfig>
// export const controlConfig: ControlConfig = {
//   ...interactiveConfig,
//   variants: controlVariantsConfig,
// }
// export type Control = Interactive<BlockTokens> & Variants<ControlVariants>
// export const control: Control = {
//   ...interactive,
//   variants: controlVariants,
// }
//
// // Element - Anchor
// export type AnchorVariant = Ordinal
// export type AnchorVariants = {
//   [key in AnchorVariant]: {
//     enabled: ColorTextColorway
//     hover: ColorTextColorway
//     active: ColorTextColorway
//     visited: ColorTextColorway
//   }
// } & {
//   [key in Scale]: FontScaleTokens & Gap
// }
// export type Anchor = {
//   element: ColorTextColorway & FontTokens & TextDecorationTokens
//   focus: Outline
//   hover: ColorTextColorway & TextDecorationTokens
//   active: ColorTextColorway & TextDecorationTokens
//   visited: ColorTextColorway & TextDecorationTokens
// } & Variants<AnchorVariants>
// export const anchorConfig: Anchor = {
//   element: {
//     // colorway
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//     // font
//     fontFamily: "sans-serif",
//     // text decoration
//     textDecorationLine: "underline",
//     textDecorationStyle: "solid",
//     textDecorationThickness: "2px",
//   },
//   hover: {
//     // colorway
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//     // text decoration
//     textDecorationLine: "underline",
//     textDecorationStyle: "double",
//     textDecorationThickness: "2px",
//   },
//   active: {
//     // colorway
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//     // text decoration
//     textDecorationLine: "underline",
//     textDecorationStyle: "double",
//     textDecorationThickness: "2px",
//   },
//   visited: {
//     // colorway
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//     // text decoration
//     textDecorationLine: "underline",
//     textDecorationStyle: "solid",
//     textDecorationThickness: "2px",
//   },
//   focus: outlineConfig.focus,
//   variants: {
//     primary: {
//       enabled: {
//         color: "currentColor",
//         textDecorationColor: "rgba(255, 170, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       hover: {
//         color: "currentColor",
//         textDecorationColor: "rgba(235, 150, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       active: {
//         color: "currentColor",
//         textDecorationColor: "rgba(215, 130, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       visited: {
//         color: "currentColor",
//         textDecorationColor: "rgba(215, 130, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//     },
//     secondary: {
//       enabled: {
//         color: "currentColor",
//         textDecorationColor: "rgba(128, 0, 255, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       hover: {
//         color: "currentColor",
//         textDecorationColor: "rgba(108, 0, 235, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       active: {
//         color: "currentColor",
//         textDecorationColor: "rgba(98, 0, 215, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       visited: {
//         color: "currentColor",
//         textDecorationColor: "rgba(98, 0, 215, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//     },
//     tertiary: {
//       enabled: {
//         color: "currentColor",
//         textDecorationColor: "rgba(0, 255, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       hover: {
//         color: "currentColor",
//         textDecorationColor: "rgba(0, 235, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       active: {
//         color: "currentColor",
//         textDecorationColor: "rgba(0, 215, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       visited: {
//         color: "currentColor",
//         textDecorationColor: "rgba(0, 215, 0, 1)",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//     },
//     sm: {
//       fontSize: "12px",
//       lineHeight: "14px",
//       gap: "6px",
//     },
//     md: {
//       fontSize: "14px",
//       lineHeight: "16px",
//       gap: "8px",
//     },
//     lg: {
//       fontSize: "16px",
//       lineHeight: "18px",
//       gap: "10px",
//     },
//   },
// }
//
// // Element - Button
// export type ButtonVariant = ControlVariant | Ordinal
// export type Button = Interactive<BlockTokens> &
//   Variants<
//     ControlVariants & {
//       [key in Ordinal]: {
//         enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
//         hover: SurfaceColorway
//         active: SurfaceColorway
//       }
//     }
//   >
//
// export type ButtonConfig = InteractiveConfig
// export const buttonConfig = {}
// export const button: Button = {
//   ...interactive,
//   variants: {
//     ...controlVariants,
//     primary: {
//       enabled: {
//         backgroundColor: "rgba(255, 170, 0, 1)",
//         borderColor: "rgba(235, 150, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       hover: {
//         backgroundColor: "rgba(235, 150, 0, 1)",
//         borderColor: "rgba(215, 130, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       active: {
//         backgroundColor: "rgba(215, 130, 0, 1)",
//         borderColor: "rgba(195, 110, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//     },
//     secondary: {
//       enabled: {
//         // backgroundColor: "rgba(128, 0, 255, 1)",
//         // borderColor: "rgba(108, 0, 235, 1)",
//         backgroundColor: "transparent",
//         borderColor: "currentColor",
//         color: "rgba(128, 0, 255, 1)",
//         textDecorationColor: "currentColor",
//         fill: "currentColor",
//         stroke: "currentColor",
//         borderWidth: "4px",
//         borderStyle: "solid",
//       },
//       hover: {
//         // backgroundColor: "rgba(108, 0, 235, 1)",
//         // borderColor: "rgba(98, 0, 215, 1)",
//         backgroundColor: "transparent",
//         borderColor: "currentColor",
//         color: "rgba(108, 0, 235, 1)",
//         textDecorationColor: "currentColor",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//       active: {
//         // backgroundColor: "rgba(98, 0, 215, 1)",
//         // borderColor: "rgba(78, 0, 195, 1)",
//         backgroundColor: "transparent",
//         borderColor: "currentColor",
//         color: "rgba(98, 0, 215, 1)",
//         textDecorationColor: "currentColor",
//         fill: "currentColor",
//         stroke: "currentColor",
//       },
//     },
//     tertiary: {
//       enabled: {
//         backgroundColor: "rgba(0, 255, 0, 1)",
//         borderColor: "rgba(0, 235, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       hover: {
//         backgroundColor: "rgba(0, 235, 0, 1)",
//         borderColor: "rgba(0, 215, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       active: {
//         backgroundColor: "rgba(0, 215, 0, 1)",
//         borderColor: "rgba(0, 195, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//     },
//   },
// }
//
// // Elements - Text
// export type TextVariants = {
//   [key in BodyFont]: FontTokens
// } & ScaleProperties<FontScaleTokens>
// export type Text = {
//   element: TextColorway
// } & Variants<TextVariants>
// export const bodyTextConfig: Text = {
//   element: {
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//   },
//   variants: {
//     body1: {
//       fontFamily: "sans-serif",
//     },
//     body2: {
//       fontFamily: "serif",
//     },
//     body3: {
//       fontFamily: "serif",
//     },
//     label: {
//       fontFamily: "serif",
//     },
//     caption: {
//       fontFamily: "serif",
//     },
//     captionHeading: {
//       fontFamily: "serif",
//     },
//     sm: {
//       fontSize: "12px",
//       lineHeight: "14px",
//     },
//     md: {
//       fontSize: "14px",
//       lineHeight: "16px",
//     },
//     lg: {
//       fontSize: "16px",
//       lineHeight: "18px",
//     },
//   },
// }
//
// // Elements - Heading
// export type HeadingVariants = {
//   [key in HeadingFont]: FontTokens & FontScaleTokens & Margin
// }
// export type Heading = {
//   element: TextColorway
// } & Variants<HeadingVariants>
// export const headingConfig: Heading = {
//   element: {
//     color: "currentColor",
//     textDecorationColor: "currentColor",
//     fill: "currentColor",
//     stroke: "currentColor",
//   },
//   variants: {
//     display: {
//       fontFamily: "sans-serif",
//       fontSize: "52px",
//       lineHeight: "64px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h1: {
//       fontFamily: "sans-serif",
//       fontSize: "40px",
//       lineHeight: "60px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h2: {
//       fontFamily: "sans-serif",
//       fontSize: "32px",
//       lineHeight: "48px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h3: {
//       fontFamily: "sans-serif",
//       fontSize: "24px",
//       lineHeight: "40px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h4: {
//       fontFamily: "sans-serif",
//       fontSize: "22px",
//       lineHeight: "36px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h5: {
//       fontFamily: "sans-serif",
//       fontSize: "20px",
//       lineHeight: "32px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//     h6: {
//       fontFamily: "sans-serif",
//       fontSize: "18px",
//       lineHeight: "28px",
//       marginTop: "0.5em",
//       marginBottom: "1em",
//       marginLeft: "0",
//       marginRight: "0",
//     },
//   },
// }
//
// //--------------------------------------------------------------------------------------------------
// // Theme
// export type BaseFoundations<B, C, R> = {
//   borders: B
//   colorways: C
//   radius: R
//   spacing: FoundationConfig
//   typography: TypographyConfig
// }
// export type FoundationsConfig = BaseFoundations<
//   BorderConfig,
//   ColorwayConfig,
//   RadiusConfig
// >
// export type Foundations = BaseFoundations<
//   BorderFoundations,
//   ColorwayFoundations,
//   RadiusFoundations
// >
// export type Config = {
//   foundations: FoundationsConfig
//   elements: {
//     button: Button
//   }
// }
// export type Theme = {
//   button: Button
// }
