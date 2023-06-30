import * as Colorway from "../colorway"
import * as Outline from "../outline"
import * as Typography from "../typography"

import * as Decoration from "../tokens/decoration"
import * as Gap from "../tokens/gap"
import {
  Anchor,
  AnchorStateVariants,
  Ordinal,
  OrdinalVariants,
  ScaleVariants,
} from "../types"
import { Foundations } from "../foundations"

export type Variant = Ordinal

type VariantTokens = Colorway.Tokens & Decoration.Tokens

export type Element = Anchor<
  VariantTokens & Typography.Tokens,
  Outline.Tokens,
  VariantTokens,
  OrdinalVariants<AnchorStateVariants<Colorway.Tokens>> &
    ScaleVariants<Typography.ScaleTokens & Gap.Tokens>
>

type VariantConfigTokens = Colorway.ElementConfig & Decoration.ConfigTokens

export type Config = Anchor<
  VariantConfigTokens & Typography.ElementConfig,
  Outline.Variant,
  VariantConfigTokens,
  OrdinalVariants<AnchorStateVariants<Colorway.ElementConfig>> &
    ScaleVariants<Gap.ElementConfig>
>

export const makeElement = (f: Foundations, c: Config): Element => ({
  element: {
    ...Colorway.makeTokens(f.colorway, c.element),
    ...Typography.makeTokens(f.typography, c.element),
    ...Decoration.makeTokens(f.line, c.element),
  },
  focus: {
    ...Colorway.makeOutlineTokens(f.colorway),
    ...Outline.makeTokens(f.line, f.spacing, f.outline, c.focus),
  },
  hover: {
    ...Colorway.makeTokens(f.colorway, c.hover),
    ...Decoration.makeTokens(f.line, c.hover),
  },
  active: {
    ...Colorway.makeTokens(f.colorway, c.active),
    ...Decoration.makeTokens(f.line, c.active),
  },
  visited: {
    ...Colorway.makeTokens(f.colorway, c.visited),
    ...Decoration.makeTokens(f.line, c.visited),
  },
  current: {
    ...Colorway.makeTokens(f.colorway, c.visited),
    ...Decoration.makeTokens(f.line, c.visited),
  },
  variants: {
    primary: {
      base: Colorway.makeTokens(f.colorway, c.variants.primary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.primary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.primary.active),
      visited: Colorway.makeTokens(f.colorway, c.variants.primary.visited),
    },
    secondary: {
      base: Colorway.makeTokens(f.colorway, c.variants.secondary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.secondary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.secondary.active),
      visited: Colorway.makeTokens(f.colorway, c.variants.secondary.visited),
    },
    tertiary: {
      base: Colorway.makeTokens(f.colorway, c.variants.tertiary.base),
      hover: Colorway.makeTokens(f.colorway, c.variants.tertiary.hover),
      active: Colorway.makeTokens(f.colorway, c.variants.tertiary.active),
      visited: Colorway.makeTokens(f.colorway, c.variants.tertiary.visited),
    },
    sm: {
      ...Gap.makeTokens2(f.scale, c.variants.sm),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "sm"),
    },
    md: {
      ...Gap.makeTokens2(f.scale, c.variants.md),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "md"),
    },
    lg: {
      ...Gap.makeTokens2(f.scale, c.variants.lg),
      ...Typography.makeScaleTokens(f.typography, c.element.font, "lg"),
    },
  },
})

export const defaultConfig: Config = {
  element: {
    colorway: "background.base",
    font: "body1",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "02",
  },
  focus: "focus",
  hover: {
    colorway: "background.hover",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "02",
  },
  active: {
    colorway: "background.active",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "02",
  },
  visited: {
    colorway: "background.active",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "02",
  },
  current: {
    colorway: "background.active",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "02",
  },
  variants: {
    primary: {
      base: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand1", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand1", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand1", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand1", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      base: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand2", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand2", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand2", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand2", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      base: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand3", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand3", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand3", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "currentColor",
        textDecorationColor: ["brand3", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    sm: {
      // gap: "01",
      gap: "sm",
    },
    md: {
      // gap: "02",
      gap: "md",
    },
    lg: {
      // gap: "03",
      gap: "lg",
    },
  },
}
