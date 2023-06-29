import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Spacing from "../spacing"

export type Tokens<
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

export type ConfigTokens = Tokens<TokenKey, TokenKey, TokenKey, TokenKey>

export const makeTokens = (f: Spacing.Config, c: ConfigTokens): Tokens => ({
  paddingTop: f[c.paddingTop],
  paddingBottom: f[c.paddingBottom],
  paddingLeft: f[c.paddingLeft],
  paddingRight: f[c.paddingRight],
})
