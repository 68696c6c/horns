import * as Border from "../border"
import * as Colorway from "../colorway"
import * as Outline from "../outline"
import * as Radius from "../radius"
import * as Typography from "../typography"

import * as Gap from "../tokens/gap"
import * as Padding from "../tokens/padding"
import { Control, ControlStateVariants, ScaleVariants } from "../types"
import { Foundations } from "../foundations"

export type Element = Control<
  Border.Tokens & Colorway.Tokens & Radius.Tokens & Typography.Tokens,
  Outline.Tokens,
  Colorway.Tokens,
  ControlVariants &
    ScaleVariants<Gap.Tokens & Padding.Tokens & Typography.ScaleTokens>
>

export type Config = Control<
  Colorway.ElementConfig &
    Border.ElementConfig &
    Radius.ElementConfig &
    Typography.ElementConfig,
  Outline.Variant,
  Colorway.ElementConfig,
  ControlVariants<Colorway.ElementConfig> &
    ScaleVariants<Gap.ConfigTokens & Padding.ConfigTokens>
>

type ControlVariants<T = Colorway.Tokens> = {
  enabled: ControlStateVariants<T>
  selected: T
  disabled: T
  error: T
}

export type Variant = keyof ControlVariants

export const makeElement = (f: Foundations, c: Config): Element => ({
  element: {
    ...Border.makeTokens(f.line, f.border, c.element),
    ...Colorway.makeTokens(f.colorway, c.element),
    ...Radius.makeTokens(f.radius, c.element),
    ...Typography.makeTokens(f.typography, c.element),
  },
  focus: {
    ...Colorway.makeOutlineTokens(f.colorway),
    ...Outline.makeTokens(f.line, f.spacing, f.outline, c.focus),
  },
  hover: Colorway.makeTokens(f.colorway, c.hover),
  active: Colorway.makeTokens(f.colorway, c.active),
  variants: {
    enabled: {
      base: Colorway.makeTokens(f.colorway, c.variants.enabled.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.enabled.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.enabled.active),
    },
    disabled: Colorway.makeTokens(f.colorway, c.variants.disabled),
    error: Colorway.makeTokens(f.colorway, c.variants.error),
    selected: Colorway.makeTokens(f.colorway, c.variants.selected),
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
  focus: "focus",
  hover: {
    colorway: "background.hover",
  },
  active: {
    colorway: "background.active",
  },
  variants: {
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
    selected: {
      colorway: "selected.base",
    },
    sm: {
      gap: "01",
      paddingTop: "01",
      paddingBottom: "01",
      paddingLeft: "02",
      paddingRight: "02",
    },
    md: {
      gap: "02",
      paddingTop: "02",
      paddingBottom: "02",
      paddingLeft: "03",
      paddingRight: "03",
    },
    lg: {
      gap: "03",
      paddingTop: "03",
      paddingBottom: "03",
      paddingLeft: "04",
      paddingRight: "04",
    },
  },
}
