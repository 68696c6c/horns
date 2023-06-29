import * as CSS from "csstype"

import { CSSVal } from "../types"

export type FontFamily<T = CSSVal<CSS.Property.FontFamily>> = { fontFamily: T }

export type FontKerning<T = CSSVal<CSS.Property.FontKerning>> = {
  fontKerning: T
}

export type FontSize<T = CSSVal<CSS.Property.FontSize>> = { fontSize: T }

export type FontStyle<T = CSSVal<CSS.Property.FontStyle>> = { fontStyle: T }

export type FontWeight<T = CSSVal<CSS.Property.FontWeight>> = { fontWeight: T }

export type LineHeight<T = CSSVal<CSS.Property.LineHeight>> = { lineHeight: T }

export type TextAlign<T = CSSVal<CSS.Property.TextAlign>> = { textAlign: T }

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
