import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Spacing from "../spacing"

export type Tokens<
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

export type ConfigTokens = Tokens<TokenKey, TokenKey, TokenKey, TokenKey>

export const makeTokens = (f: Spacing.Config, c: ConfigTokens): Tokens => ({
  marginTop: f[c.marginTop],
  marginBottom: f[c.marginBottom],
  marginLeft: f[c.marginLeft],
  marginRight: f[c.marginRight],
})
