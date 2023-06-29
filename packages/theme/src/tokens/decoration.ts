import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Line from "../line"

export type Tokens<
  T = CSSVal<CSS.Property.TextDecorationThickness>,
  L = CSSVal<CSS.Property.TextDecorationLine>,
  S = CSSVal<CSS.Property.TextDecorationStyle>
> = {
  textDecorationThickness: T
  textDecorationLine: L
  textDecorationStyle: S
}

export type ConfigTokens = Tokens<TokenKey>

export const makeTokens = (lines: Line.Config, c: ConfigTokens): Tokens => ({
  textDecorationThickness: lines[c.textDecorationThickness],
  textDecorationLine: c.textDecorationLine,
  textDecorationStyle: c.textDecorationStyle,
})
