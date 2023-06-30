import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Spacing from "../spacing"
import * as Scale from "../scale"

export type Tokens<T = CSSVal<CSS.Property.Gap>> = {
  gap: T
}

export type ConfigTokens = Tokens<TokenKey>

export const makeTokens = (f: Spacing.Config, c: ConfigTokens): Tokens => ({
  gap: f[c.gap],
})

export type ElementConfig = {
  gap: Scale.Level
}

export const makeTokens2 = (
  f: Scale.Foundations,
  c: ElementConfig
): Tokens => ({
  gap: f.space[c.gap].gap,
})
