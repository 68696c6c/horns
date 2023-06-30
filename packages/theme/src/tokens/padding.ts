import * as CSS from "csstype"

import { CSSVal, TokenKey } from "../types"
import * as Scale from "../scale"
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

export type ElementConfig = {
  padding: Scale.Level
}

export const makeTokens2 = (
  f: Scale.Foundations,
  c: ElementConfig
): Tokens => ({
  paddingTop: f.space[c.padding].paddingTop,
  paddingBottom: f.space[c.padding].paddingBottom,
  paddingLeft: f.space[c.padding].paddingLeft,
  paddingRight: f.space[c.padding].paddingRight,
})
