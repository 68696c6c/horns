import * as Colorway from "../colorway"
import * as Outline from "../outline"

import { Control, ControlStateVariants } from "../types"
import { Foundations } from "../foundations"

export type Element = Control<
  Colorway.Tokens,
  Outline.Tokens,
  Colorway.Tokens,
  IconVariants
>

export type Config = Control<
  Colorway.ElementConfig,
  Outline.Variant,
  Colorway.ElementConfig,
  IconVariants<Colorway.ElementConfig>
>

type IconVariants<T = Colorway.Tokens> = {
  primary: ControlStateVariants<T>
  secondary: ControlStateVariants<T>
  tertiary: ControlStateVariants<T>
  info: ControlStateVariants<T>
  success: ControlStateVariants<T>
  warning: ControlStateVariants<T>
  danger: ControlStateVariants<T>
  enabled: ControlStateVariants<T>
  selected: T
  disabled: T
  error: T
}

export type Variant = keyof IconVariants

export const makeElement = (f: Foundations, c: Config): Element => ({
  element: Colorway.makeTokens(f.colorway, c.element),
  focus: {
    ...Colorway.makeOutlineTokens(f.colorway),
    ...Outline.makeTokens(f.line, f.spacing, f.outline, c.focus),
  },
  hover: Colorway.makeTokens(f.colorway, c.hover),
  active: Colorway.makeTokens(f.colorway, c.active),
  variants: {
    primary: {
      base: Colorway.makeTokens(f.colorway, c.variants.primary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.primary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.primary.active),
    },
    secondary: {
      base: Colorway.makeTokens(f.colorway, c.variants.secondary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.secondary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.secondary.active),
    },
    tertiary: {
      base: Colorway.makeTokens(f.colorway, c.variants.tertiary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.tertiary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.tertiary.active),
    },
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
    enabled: {
      base: Colorway.makeTokens(f.colorway, c.variants.enabled.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.enabled.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.enabled.active),
    },
    disabled: Colorway.makeTokens(f.colorway, c.variants.disabled),
    error: Colorway.makeTokens(f.colorway, c.variants.error),
    selected: Colorway.makeTokens(f.colorway, c.variants.selected),
  },
})

export const defaultConfig: Config = {
  element: {
    colorway: "background.base",
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
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand1", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand1", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand1", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand2", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand2", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand2", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand3", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand3", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["brand3", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    info: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["info", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["info", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["info", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    success: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["success", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["success", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["success", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    warning: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["warning", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["warning", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["warning", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    danger: {
      base: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["danger", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["danger", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "inherit",
        borderColor: "inherit",
        color: ["danger", "03"],
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
    selected: {
      colorway: "selected.base",
    },
  },
}
