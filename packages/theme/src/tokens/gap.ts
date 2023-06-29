import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Spacing from "../spacing"

export type Tokens<T = CSSVal<CSS.Property.Gap>> = {
  gap: T
}

export type ConfigTokens = Tokens<TokenKey>

export const makeTokens = (f: Spacing.Config, c: ConfigTokens): Tokens => ({
  gap: f[c.gap],
})
