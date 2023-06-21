import {
  BlockTokens,
  BodyFont,
  BorderConfig,
  BorderTokens,
  // ControlVariant,
  // ControlVariants,
  // controlVariantsConfig,
  // ControlVariantsConfig,
  Foundations,
  Interactive,
  interactiveConfig,
  InteractiveConfig,
  makeBorderTokens,
  // makeControlVariants,
  makeInteractiveTokens,
  makeSurfaceColorway,
  Ordinal,
  SurfaceColorway,
  SurfaceColorwayConfig,
  Variants,
} from "../utils"
import {
  ControlVariant,
  ControlVariants,
  controlVariantsConfig,
  ControlVariantsConfig,
  makeControlVariants,
} from "./control"

export type ButtonVariant = ControlVariant | Ordinal | "background"
export type ButtonVariantStateConfig = Partial<BorderConfig> &
  SurfaceColorwayConfig
export type ButtonVariantConfig = {
  enabled: ButtonVariantStateConfig
  hover: ButtonVariantStateConfig
  active: ButtonVariantStateConfig
}
export type ButtonVariantTokens = {
  enabled: (BorderTokens & SurfaceColorway) | SurfaceColorway
  hover: (BorderTokens & SurfaceColorway) | SurfaceColorway
  active: (BorderTokens & SurfaceColorway) | SurfaceColorway
}
export type ButtonVariants = ControlVariants & {
  primary: ButtonVariantTokens
  secondary: ButtonVariantTokens
  tertiary: ButtonVariantTokens
  background: ButtonVariantTokens
}
export type ButtonVariantsConfig = ControlVariantsConfig & {
  primary: ButtonVariantConfig
  secondary: ButtonVariantConfig
  tertiary: ButtonVariantConfig
  background: ButtonVariantConfig
}
export type Button = Interactive<BlockTokens> &
  Variants<ControlVariants & ButtonVariants>
export type ButtonConfig = InteractiveConfig & Variants<ButtonVariantsConfig>
export const makeButtonVariants = (
  f: Foundations,
  c: ButtonVariantsConfig,
  font: BodyFont
): ButtonVariants => ({
  ...makeControlVariants(f, c, font),
  background: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.background.enabled),
      ...makeBorderTokens(f.border, c.background.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.background.hover),
      ...makeBorderTokens(f.border, c.background.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.background.active),
      ...makeBorderTokens(f.border, c.background.active?.border || "medium"),
    },
  },
  primary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.primary.enabled),
      ...makeBorderTokens(f.border, c.primary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.primary.hover),
      ...makeBorderTokens(f.border, c.primary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.primary.active),
      ...makeBorderTokens(f.border, c.primary.active?.border || "medium"),
    },
  },
  secondary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.secondary.enabled),
      ...makeBorderTokens(f.border, c.secondary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.secondary.hover),
      ...makeBorderTokens(f.border, c.secondary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.secondary.active),
      ...makeBorderTokens(f.border, c.secondary.active?.border || "medium"),
    },
  },
  tertiary: {
    enabled: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.enabled),
      ...makeBorderTokens(f.border, c.tertiary.enabled?.border || "medium"),
    },
    hover: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.hover),
      ...makeBorderTokens(f.border, c.tertiary.hover?.border || "medium"),
    },
    active: {
      ...makeSurfaceColorway(f.colorway, c.tertiary.active),
      ...makeBorderTokens(f.border, c.tertiary.active?.border || "medium"),
    },
  },
})
export const buttonVariantsConfig: ButtonVariantsConfig = {
  ...controlVariantsConfig,
  background: {
    enabled: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: "currentColor",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    hover: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: "currentColor",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      opacity: "0.7",
    },
    active: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: "currentColor",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      opacity: "0.5",
    },
  },
  primary: {
    enabled: {
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
    enabled: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "05"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
    hover: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "04"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
    active: {
      backgroundColor: "transparent",
      borderColor: "currentColor",
      color: ["brand2", "03"],
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
      border: "thick",
    },
  },
  tertiary: {
    enabled: {
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
}
export const buttonConfig: ButtonConfig = {
  ...interactiveConfig,
  variants: buttonVariantsConfig,
}
export const makeButtonTokens = (f: Foundations, c: ButtonConfig): Button => ({
  ...makeInteractiveTokens(f, c),
  variants: makeButtonVariants(f, c.variants, c.element.font),
})
