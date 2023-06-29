import * as CSS from "csstype"

import { CSSVal, TokenKey } from "./types"
import * as Line from "./line"
import * as Spacing from "./spacing"

export type Variant = "none" | "focus"

export type Tokens<
  O = CSSVal<CSS.Property.OutlineOffset>,
  W = CSSVal<CSS.Property.OutlineWidth>,
  S = CSSVal<CSS.Property.OutlineStyle>
> = {
  outlineOffset?: O
  outlineWidth?: W
  outlineStyle?: S
}

export type ConfigTokens = Tokens<TokenKey, TokenKey>

export type Config = {
  [key in Variant]: ConfigTokens
}

export type ElementConfig = {
  outline: Variant
}

export const makeTokens = (
  lines: Line.Config,
  spacing: Spacing.Config,
  c: Config,
  variant: Variant
): Tokens => {
  const result: Tokens = {}
  const { outlineOffset, outlineWidth, outlineStyle } = c[variant]
  if (typeof outlineOffset !== "undefined") {
    result.outlineOffset = spacing[outlineOffset]
  }
  if (typeof outlineWidth !== "undefined") {
    result.outlineWidth = lines[outlineWidth]
  }
  if (typeof outlineStyle !== "undefined") {
    result.outlineStyle = outlineStyle
  }
  return result
}

export const defaultConfig: Config = {
  none: {
    outlineOffset: "00",
    outlineStyle: "none",
    outlineWidth: "00",
  },
  focus: {
    outlineOffset: "01",
    outlineStyle: "solid",
    outlineWidth: "01",
  },
}
