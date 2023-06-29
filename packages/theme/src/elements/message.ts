import * as Border from "../border"
import * as Colorway from "../colorway"
import * as Radius from "../radius"
import * as Typography from "../typography"

import { ControlStateVariants, ScaleVariants } from "../types"
import { Foundations } from "../foundations"
import * as Gap from "../tokens/gap"
import * as Padding from "../tokens/padding"

type Message<E, T, S> = {
  element: E
  variants: {
    [key in Colorway.MessageColor]: ControlStateVariants<T>
  } & ScaleVariants<S>
}

export type Variant = Colorway.MessageColor

export type Element = Message<
  Colorway.Tokens & Border.Tokens & Radius.Tokens,
  Colorway.Tokens,
  Typography.ScaleTokens & Gap.Tokens & Padding.Tokens
>

export type Config = Message<
  Colorway.ElementConfig &
    Typography.ElementConfig &
    Border.ElementConfig &
    Radius.ElementConfig,
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
    info: {
      base: Colorway.makeTokens(f.colorway, c.variants.info.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.info.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.info.active),
    },
    success: {
      base: Colorway.makeTokens(f.colorway, c.variants.success.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.success.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.success.active),
    },
    warning: {
      base: Colorway.makeTokens(f.colorway, c.variants.warning.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.warning.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.warning.active),
    },
    danger: {
      base: Colorway.makeTokens(f.colorway, c.variants.danger.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.danger.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.danger.active),
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
    border: "thin",
    colorway: "background.base",
    font: "body1",
    radius: "normal",
  },
  variants: {
    info: {
      base: {
        colorway: "info.base",
      },
      hover: {
        colorway: "info.hover",
      },
      active: {
        colorway: "info.active",
      },
    },
    success: {
      base: {
        colorway: "success.base",
      },
      hover: {
        colorway: "success.hover",
      },
      active: {
        colorway: "success.active",
      },
    },
    warning: {
      base: {
        colorway: "warning.base",
      },
      hover: {
        colorway: "warning.hover",
      },
      active: {
        colorway: "warning.active",
      },
    },
    danger: {
      base: {
        colorway: "danger.base",
      },
      hover: {
        colorway: "danger.hover",
      },
      active: {
        colorway: "danger.active",
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
