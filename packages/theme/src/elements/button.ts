import * as Border from "../border"
import * as Colorway from "../colorway"
import * as Outline from "../outline"
import * as Radius from "../radius"
import * as Typography from "../typography"

import * as Gap from "../tokens/gap"
import * as Padding from "../tokens/padding"
import { Control, ControlStateVariants, Scale, ScaleVariants } from "../types"
import { Foundations } from "../foundations"
import { ElementConfig, makeTokens2 } from "../tokens/padding"

type VariantTokens = Border.Tokens & Colorway.Tokens & Radius.Tokens

export type Element = Control<
  VariantTokens & Typography.Tokens,
  Outline.Tokens,
  VariantTokens,
  ButtonVariants & ButtonScaleVariants
>

type VariantConfigTokens = Partial<Border.ElementConfig> &
  Colorway.ElementConfig &
  Partial<Radius.ElementConfig>

export type Config = Control<
  Colorway.ElementConfig &
    Border.ElementConfig &
    Radius.ElementConfig &
    Typography.ElementConfig,
  Outline.Variant,
  VariantConfigTokens,
  ButtonVariants<VariantConfigTokens, Colorway.ElementConfig> &
    ButtonScaleVariants<
      Gap.ElementConfig & Padding.ElementConfig,
      Gap.ElementConfig & Padding.ElementConfig
    >
>

type ButtonVariants<S = VariantTokens, F = Colorway.Tokens> = {
  primary: ControlStateVariants<S>
  secondary: ControlStateVariants<S>
  tertiary: ControlStateVariants<S>
  enabled: ControlStateVariants<S>
  disabled: F
  error: F
}

type ButtonScaleVariants<
  M = Gap.Tokens & Padding.Tokens,
  S = Typography.ScaleTokens & Gap.Tokens & Padding.Tokens
> = ScaleVariants<S> & {
  min: M
}

export type Variant = keyof ButtonVariants

// export type ScaleVariant = "min" | Scale

const makeVariantTokens = (
  f: Foundations,
  c: VariantConfigTokens
): VariantTokens => ({
  ...Border.makeTokens(f.line, f.border, c),
  ...Colorway.makeTokens(f.colorway, c),
  ...Radius.makeTokens(f.radius, c),
})

export const makeElement = (f: Foundations, c: Config): Element => ({
  element: {
    ...makeVariantTokens(f, c.element),
    ...Typography.makeTokens(f.typography, c.element),
  },
  focus: {
    ...Colorway.makeOutlineTokens(f.colorway),
    ...Outline.makeTokens(f.line, f.spacing, f.outline, c.focus),
  },
  hover: makeVariantTokens(f, c.hover),
  active: makeVariantTokens(f, c.active),
  variants: {
    primary: {
      base: makeVariantTokens(f, c.variants.primary.base),
      hover: makeVariantTokens(f, c.variants.primary.hover),
      active: makeVariantTokens(f, c.variants.primary.active),
    },
    secondary: {
      base: makeVariantTokens(f, c.variants.secondary.base),
      hover: makeVariantTokens(f, c.variants.secondary.hover),
      active: makeVariantTokens(f, c.variants.secondary.active),
    },
    tertiary: {
      base: makeVariantTokens(f, c.variants.tertiary.base),
      hover: makeVariantTokens(f, c.variants.tertiary.hover),
      active: makeVariantTokens(f, c.variants.tertiary.active),
    },
    enabled: {
      base: makeVariantTokens(f, c.variants.enabled.base),
      hover: makeVariantTokens(f, c.variants.enabled.hover),
      active: makeVariantTokens(f, c.variants.enabled.active),
    },
    disabled: makeVariantTokens(f, c.variants.disabled),
    error: makeVariantTokens(f, c.variants.error),
    min: {
      // ...Gap.makeTokens(f.spacing, c.variants.min),
      ...Gap.makeTokens2(f.scale, c.variants.min),
      // ...Padding.makeTokens(f.spacing, c.variants.min),
      ...Padding.makeTokens2(f.scale, c.variants.min),
    },
    sm: {
      // ...Gap.makeTokens(f.spacing, c.variants.sm),
      ...Gap.makeTokens2(f.scale, c.variants.sm),
      // ...Padding.makeTokens(f.spacing, c.variants.sm),
      ...Padding.makeTokens2(f.scale, c.variants.sm),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "sm"),
    },
    md: {
      // ...Gap.makeTokens(f.spacing, c.variants.md),
      ...Gap.makeTokens2(f.scale, c.variants.md),
      // ...Padding.makeTokens(f.spacing, c.variants.md),
      ...Padding.makeTokens2(f.scale, c.variants.md),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "md"),
    },
    lg: {
      // ...Gap.makeTokens(f.spacing, c.variants.lg),
      ...Gap.makeTokens2(f.scale, c.variants.lg),
      // ...Padding.makeTokens(f.spacing, c.variants.lg),
      ...Padding.makeTokens2(f.scale, c.variants.lg),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "lg"),
    },
  },
})

export const defaultConfig: Config = {
  element: {
    border: "none",
    colorway: "background.base",
    font: "body1",
    radius: "normal",
  },
  focus: "focus",
  hover: {
    colorway: "background.hover",
  },
  active: {
    colorway: "background.active",
  },
  variants: {
    primary: {
      base: {
        border: "medium",
        backgroundColor: ["brand1", "05"],
        borderColor: ["brand1", "04"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: ["brand1", "04"],
        borderColor: ["brand1", "03"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: ["brand1", "03"],
        borderColor: ["brand1", "02"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      base: {
        border: "thick",
        backgroundColor: "transparent",
        borderColor: ["brand2", "05"],
        color: ["brand2", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        // border: "thick",
        backgroundColor: "transparent",
        borderColor: ["brand2", "04"],
        color: ["brand2", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        // border: "thick",
        backgroundColor: "transparent",
        borderColor: ["brand2", "03"],
        color: ["brand2", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      base: {
        border: "thin",
        backgroundColor: ["brand3", "05"],
        borderColor: ["brand3", "04"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: ["brand3", "04"],
        borderColor: ["brand3", "03"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: ["brand3", "03"],
        borderColor: ["brand3", "02"],
        color: "readable",
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    enabled: {
      base: {
        colorway: "enabled.base",
      },
      hover: {
        colorway: "enabled.hover",
      },
      active: {
        colorway: "enabled.active",
      },
    },
    disabled: {
      colorway: "disabled.base",
    },
    error: {
      colorway: "error.base",
    },
    min: {
      // gap: "00",
      gap: "min",
      padding: "min",
      // paddingTop: "00",
      // paddingBottom: "00",
      // paddingLeft: "00",
      // paddingRight: "00",
    },
    sm: {
      // gap: "01",
      gap: "sm",
      padding: "sm",
      // paddingTop: "01",
      // paddingBottom: "01",
      // paddingLeft: "02",
      // paddingRight: "02",
    },
    md: {
      // gap: "02",
      gap: "md",
      padding: "md",
      // paddingTop: "02",
      // paddingBottom: "02",
      // paddingLeft: "03",
      // paddingRight: "03",
    },
    lg: {
      // gap: "03",
      gap: "lg",
      padding: "lg",
      // paddingTop: "03",
      // paddingBottom: "03",
      // paddingLeft: "04",
      // paddingRight: "04",
    },
  },
}
