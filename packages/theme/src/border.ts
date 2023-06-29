import * as CSS from "csstype"

import { CSSVal, TokenKey, Width } from "./types"
import * as Line from "./line"

export type Variant = "none" | Width

export type Tokens<
  W = CSSVal<CSS.Property.BorderWidth>,
  S = CSSVal<CSS.Property.BorderStyle>
> = {
  borderWidth?: W
  borderStyle?: S
}

export type ConfigTokens = Tokens<TokenKey>

export type ElementConfig = {
  border: Variant
}

export type Config = {
  [key in Variant]: ConfigTokens
}

export const makeTokens = (
  lines: Line.Config,
  f: Config,
  c: Partial<ElementConfig>
): Tokens => {
  const result: Tokens = {}
  if (typeof c.border === "undefined") {
    return result
  }
  const { borderWidth, borderStyle } = f[c.border]
  if (typeof borderWidth !== "undefined") {
    result.borderWidth = lines[borderWidth]
  }
  if (typeof borderStyle !== "undefined") {
    result.borderStyle = borderStyle
  }
  return result
}

export const defaultConfig: Config = {
  none: {
    borderWidth: "00",
    borderStyle: "none",
  },
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
}
