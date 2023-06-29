import * as Border from "../border"
import * as Colorway from "../colorway"
import * as Radius from "../radius"
import * as Typography from "../typography"

import { BaseOrAltVariants, ScaleVariants } from "../types"
import { Foundations } from "../foundations"
import * as Gap from "../tokens/gap"
import * as Padding from "../tokens/padding"

// TODO: add shadows

type Surface<E, T, S> = {
  element: E
  variants: {
    [key in Colorway.ContentColor]: BaseOrAltVariants<T>
  } & ScaleVariants<S>
}

export type Variant = Colorway.ContentColor | `${Colorway.ContentColor}Alt`

export type Element = Surface<
  Border.Tokens & Colorway.Tokens & Radius.Tokens & Typography.Tokens,
  Colorway.Tokens,
  Typography.ScaleTokens & Gap.Tokens & Padding.Tokens
>

export type Config = Surface<
  Border.ElementConfig &
    Colorway.ElementConfig &
    Radius.ElementConfig &
    Typography.ElementConfig,
  Colorway.ElementConfig,
  Gap.ConfigTokens & Padding.ConfigTokens
>

export const makeElement = (f: Foundations, c: Config): Element => ({
  element: {
    ...Border.makeTokens(f.line, f.border, c.element),
    ...Colorway.makeTokens(f.colorway, c.element),
    ...Radius.makeTokens(f.radius, c.element),
    ...Typography.makeTokens(f.typography, c.element),
  },
  variants: {
    neutral: {
      base: Colorway.makeTokens(f.colorway, c.variants.neutral.base),
      alt: Colorway.makeTokens(f.colorway, c.variants.neutral.alt),
    },
    inverse: {
      base: Colorway.makeTokens(f.colorway, c.variants.inverse.base),
      alt: Colorway.makeTokens(f.colorway, c.variants.inverse.alt),
    },
    prominent: {
      base: Colorway.makeTokens(f.colorway, c.variants.prominent.base),
      alt: Colorway.makeTokens(f.colorway, c.variants.prominent.alt),
    },
    sm: {
      ...Gap.makeTokens(f.spacing, c.variants.sm),
      ...Padding.makeTokens(f.spacing, c.variants.sm),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "sm"),
    },
    md: {
      ...Gap.makeTokens(f.spacing, c.variants.md),
      ...Padding.makeTokens(f.spacing, c.variants.md),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "md"),
    },
    lg: {
      ...Gap.makeTokens(f.spacing, c.variants.lg),
      ...Padding.makeTokens(f.spacing, c.variants.lg),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "lg"),
    },
  },
})

export const defaultConfig: Config = {
  element: {
    border: "medium",
    colorway: "background.base",
    font: "body1",
    radius: "normal",
  },
  variants: {
    neutral: {
      base: {
        colorway: "neutral.base",
      },
      alt: {
        colorway: "neutral.alt",
      },
    },
    inverse: {
      base: {
        colorway: "inverse.base",
      },
      alt: {
        colorway: "inverse.alt",
      },
    },
    prominent: {
      base: {
        colorway: "prominent.base",
      },
      alt: {
        colorway: "prominent.alt",
      },
    },
    sm: {
      gap: "03",
      paddingTop: "03",
      paddingBottom: "03",
      paddingLeft: "03",
      paddingRight: "03",
    },
    md: {
      gap: "05",
      paddingTop: "05",
      paddingBottom: "05",
      paddingLeft: "05",
      paddingRight: "05",
    },
    lg: {
      gap: "06",
      paddingTop: "06",
      paddingBottom: "06",
      paddingLeft: "06",
      paddingRight: "06",
    },
  },
}
