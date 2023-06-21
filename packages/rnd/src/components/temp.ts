// import * as CSS from "csstype"
// import * as React from "react"
// import { IconType } from "react-icons"
// import { FoundationConfig } from "../utils/utils"
//
// // Utils
// export type CSSVarFunc =
//   | `var(--${string})`
//   | `var(--${string}, ${string | number})`
// export type CSSVal<T> = T | CSSVarFunc
// export type Brand = "brand1" | "brand2" | "brand3"
// export type Ordinal = "primary" | "secondary" | "tertiary"
// export type OrdinalTokens<T> = {
//   [key in Ordinal]: T
// }
// export type BaseOrAlt<T extends string> = T | `${T}Alt`
// export type XSize = "xs" | "sm" | "md" | "lg" | "xl"
// export type Scale = "sm" | "md" | "lg"
// export type Width = "thin" | "medium" | "thick"
// export type Elevation = "low" | "normal" | "high"
// // export type Weight = "light" | "normal" | "heavy"
// export type SizeProperties<T> = {
//   [key in Scale]: T
// }
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
// export type Side = "top" | "bottom" | "left" | "right"
// export type Sides<T> = {
//   [key in Side]: T
// }
// export type Corner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
// export type Corners<T> = {
//   [key in Corner]: T
// }
// export type XY<T> = {
//   x: T
//   y: T
// }
// export type MinMax<T> = {
//   max: T
//   min: T
// }
//
// //--------------------------------------------------------------------------------------------------
// // Borders
// export type BorderFoundationsConfig = {
//   widths: FoundationConfig
//   borders: {
//     [key in Width]: BorderFoundation
//   }
// }
// export type BorderFoundations = {
//   [key in Width]: BorderTokens
// }
// export type BorderWidthProperties<T = CSSVal<CSS.Property.BorderWidth>> = {
//   borderWidth: T
//   // borderBottomWidth: T
//   // borderLeftWidth: T
//   // borderRightWidth: T
// }
// // export type BorderStyleProperties<
// //   T = CSSVal<CSS.Property.BorderTopStyle>,
// //   B = CSSVal<CSS.Property.BorderBottomStyle>,
// //   L = CSSVal<CSS.Property.BorderLeftStyle>,
// //   R = CSSVal<CSS.Property.BorderRightStyle>
// // > = {
// //   borderTopStyle: T
// //   borderBottomStyle: B
// //   borderLeftStyle: L
// //   borderRightStyle: R
// // }
// export type BorderStyleProperties<T = CSSVal<CSS.Property.BorderStyle>> = {
//   borderStyle: T
// }
// export type BorderFoundation = BorderWidthProperties<TokenKey> &
//   BorderStyleProperties
// export type BorderConfig = BorderWidthProperties & BorderStyleProperties
// export type BorderTokens = BorderWidthProperties & BorderStyleProperties
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
//
// export type GlyphFoundation = FoundationShade | "readable" | "currentColor"
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
// export type SvgColorway<
//   T = CSSVal<CSS.DataType.Color>,
//   S = CSSVal<CSS.DataType.Paint>
// > = {
//   color: T
//   fill: S
//   stroke: S
// }
// export type SvgColorwayConfig = SvgColorway<GlyphFoundation, GlyphFoundation>
//
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
// export type BrandSurfaceFoundation = FoundationShade | BrandColor
// export type BrandSurfaceColorwayConfig = SurfaceColorway<
//   BrandSurfaceFoundation,
//   GlyphFoundation,
//   GlyphFoundation
// >
// export type ControlSurfaceFoundation = FoundationShade | StateColor
// export type ControlSurfaceColorwayConfig = SurfaceColorway<
//   ControlSurfaceFoundation,
//   GlyphFoundation,
//   GlyphFoundation
// >
// export type StatusSurfaceFoundation = FoundationShade | StatusColor
// export type StatusSurfaceColorwayConfig = SurfaceColorway<
//   StatusSurfaceFoundation,
//   GlyphFoundation,
//   GlyphFoundation
// >
//
// //--------------------------------------------------------------------------------------------------
// // Typography
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
// // export type FontTokens = FontFamily & BaseFontTokens
// export type FontTokens = FontFamily
// export type BodyFont = "body1" | "body2"
// export type HeadingFont = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
//
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
// // Size
// export type Gap<T = CSSVal<CSS.Property.Gap>> = {
//   gap: T
// }
// export type Padding<T = CSSVal<CSS.Property.Padding>> = {
//   padding: T
// }
// export type FontSizeTokens = FontSize & LineHeight
// export type BlockSizeTokens = FontSizeTokens & Gap & Padding
// export type BlockTokens = {
//   display?: CSS.Property.Display
//   flex?: CSS.Property.Flex
//   flexDirection?: CSS.Property.FlexDirection
//   alignItems?: CSS.Property.AlignItems
//   justifyContent?: CSS.Property.JustifyContent
// }
//
// //--------------------------------------------------------------------------------------------------
// // Elements
// export type AnchorState = "hover" | "active" | "visited"
// export type AnchorStates<T> = {
//   [key in AnchorState]: T
// }
// export type AnchorColorwayConfig = AnchorStates<ColorTextColorwayConfig>
// export type AnchorColorwayTokens = AnchorStates<ColorTextColorway>
// export type AnchorVariant = Ordinal
// export type AnchorTokens = AnchorColorwayTokens
// export type Anchor<T = AnchorTokens> = {
//   [key in AnchorVariant]: T
// }
//
// export const errorClass = "error"
// export const getErrorClass = (hasError?: boolean) =>
//   hasError ? errorClass : ""
// export const valueClass = "has-value"
// export const getValueClass = (hasValue?: boolean) =>
//   hasValue ? valueClass : ""
// export const iconLabelClass = "icon-label"
// export const getIconLabelClass = (hasIcons?: boolean) =>
//   hasIcons ? iconLabelClass : ""
// export const controlLabelClass = "control-label"
// export const getControlLabelClass = (isControlLabel?: boolean) =>
//   isControlLabel ? controlLabelClass : ""
// export type ActionProps = {
//   children: React.ReactNode
//   Icon1?: IconType
//   Icon2?: IconType
//   scale?: Scale
// }
// // // export type AnchorConfig = Anchor<AnchorColorwayConfig>
// // export type AnchorConfig = {
// //   variants: {
// //     primary: V
// //     secondary: V
// //     tertiary: V
// //   }
// //   font: F
// //
// // }
// // export const anchorConfig: AnchorConfig = {
// //   variants: {
// //     primary: V,
// //     secondary: V,
// //     tertiary: V,
// //   },
// //   font: F
// // }
//
// export type ButtonState = "hover" | "active"
// export type ButtonColorways<T> = {
//   [key in ButtonState]: T
// }
// export type ButtonColorwayConfig = ButtonColorways<BrandSurfaceColorwayConfig>
// export type ButtonColorwayTokens = ButtonColorways<SurfaceColorway>
// // export type ButtonVariant = "enabled" | "disabled" | Ordinal
// export type ButtonTokens = BorderTokens & SurfaceColorway & FontTokens
// // export type Button<T = ButtonTokens> = {
// //   [key in ButtonVariant]: T
// // }
// // export type ButtonConfig = Button<ButtonColorwayConfig>
// export type Interactive<T = unknown> = {
//   enabled: BorderTokens & SurfaceColorway & FontTokens & T
//   focus: Outline
//   hover: SurfaceColorway
//   active: SurfaceColorway
// }
// export const interactiveConfig: Interactive<BlockTokens> = {
//   enabled: {
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
//     // block
//     display: "inline-flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
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
// export type ControlVariant = "disabled" | "error"
// export type ControlVariants = {
//   [key in ControlVariant]: SurfaceColorway
// } & {
//   [key in Scale]: BlockSizeTokens
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
//     padding: "6px 14px",
//     gap: "6px",
//   },
//   md: {
//     fontSize: "14px",
//     lineHeight: "16px",
//     padding: "8px 16px",
//     gap: "8px",
//   },
//   lg: {
//     fontSize: "16px",
//     lineHeight: "18px",
//     padding: "10px 18px",
//     gap: "10px",
//   },
// }
// export type Variants<T> = {
//   variants: T
// }
//
// export type ButtonVariant = ControlVariant | Ordinal
// export type Button = Interactive<BlockTokens> &
//   Variants<
//     ControlVariants & {
//       [key in Ordinal]: {
//         enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
//         hover: SurfaceColorway
//         active: SurfaceColorway
//       }
//       // primary: {
//       //   enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
//       //   hover: SurfaceColorway
//       //   active: SurfaceColorway
//       // }
//       // secondary: {
//       //   enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
//       //   hover: SurfaceColorway
//       //   active: SurfaceColorway
//       // }
//     } & {
//       [key in Scale]: BlockSizeTokens
//     }
//   >
// export const buttonConfig: Button = {
//   ...interactiveConfig,
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
// export type Control = Interactive<BlockTokens> & Variants<ControlVariants>
// export const controlConfig: Control = {
//   ...interactiveConfig,
//   // enabled: {
//   //   ...interactiveConfig.enabled,
//   //   flexDirection: "column",
//   // },
//   variants: controlVariants,
// }
