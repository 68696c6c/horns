import * as CSS from "csstype"

import { CSSVal, FoundationTokens, Radius, TokenKey } from "./types"
import * as Line from "./line"

export type Variant = "none" | Radius

export type Tokens<T = CSSVal<CSS.Property.BorderRadius>> = {
  borderTopLeftRadius?: T
  borderTopRightRadius?: T
  borderBottomLeftRadius?: T
  borderBottomRightRadius?: T
}

export type ConfigTokens = Tokens<TokenKey>

export type ElementConfig = {
  radius: Variant
}

export type Config = {
  [key in Variant]: ConfigTokens
} & {
  radii: FoundationTokens
}

export const makeTokens = (f: Config, c: Partial<ElementConfig>): Tokens => {
  const result: Tokens = {}
  if (typeof c.radius === "undefined") {
    return result
  }
  const {
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  } = f[c.radius]
  if (typeof borderTopLeftRadius !== "undefined") {
    result.borderTopLeftRadius = f.radii[borderTopLeftRadius]
  }
  if (typeof borderTopRightRadius !== "undefined") {
    result.borderTopRightRadius = f.radii[borderTopRightRadius]
  }
  if (typeof borderBottomLeftRadius !== "undefined") {
    result.borderBottomLeftRadius = f.radii[borderBottomLeftRadius]
  }
  if (typeof borderBottomRightRadius !== "undefined") {
    result.borderBottomRightRadius = f.radii[borderBottomRightRadius]
  }
  return result
  // return {
  //   borderTopLeftRadius: f.radii[f[c].borderTopLeftRadius],
  //   borderTopRightRadius: f.radii[f[c].borderTopRightRadius],
  //   borderBottomLeftRadius: f.radii[f[c].borderBottomLeftRadius],
  //   borderBottomRightRadius: f.radii[f[c].borderBottomRightRadius],
  // }
}

export const defaultConfig: Config = {
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
  none: {
    borderTopLeftRadius: "00",
    borderTopRightRadius: "00",
    borderBottomLeftRadius: "00",
    borderBottomRightRadius: "00",
  },
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
}
