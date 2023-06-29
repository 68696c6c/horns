import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Spacing from "../spacing"

export type Tokens<
  H = CSSVal<CSS.Property.Height>,
  W = CSSVal<CSS.Property.Width>
> = {
  height: H
  width: W
}

export type ConfigTokens = Tokens<TokenKey, TokenKey>

export const makeTokens = (f: Spacing.Config, c: ConfigTokens): Tokens => ({
  height: f[c.height],
  width: f[c.width],
})
