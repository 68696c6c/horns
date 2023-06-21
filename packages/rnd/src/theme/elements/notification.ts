import {
  BlockScaleConfig,
  BlockScaleTokens,
  Foundations,
  makeBodyFontTokens,
  makeBorderTokens,
  makeFontScaleTokens,
  makeGap,
  makePadding,
  makeRadiusTokens,
  makeSurfaceColorway,
  StatusColor,
  Surface,
  SurfaceColorway,
  SurfaceColorwayConfig,
  surfaceConfig,
  SurfaceConfig,
} from "../utils"

export type Variant = StatusColor

export type Variants<C = SurfaceColorway> = {
  [key in Variant]: C
}

export type Element = Surface<Variants>

export type Config = SurfaceConfig<Variants<SurfaceColorwayConfig>>

export const makeTokens = (f: Foundations, c: Config): Element => ({
  element: {
    ...makeSurfaceColorway(f.colorway, c.element.colorway),
    ...makeBorderTokens(f.border, c.element.border || "medium"),
    ...makeBodyFontTokens(f.typography, c.element.font),
    ...makeRadiusTokens(f.radius, c.element.radius),
  },
  variants: {
    info: makeSurfaceColorway(f.colorway, c.variants.info),
    success: makeSurfaceColorway(f.colorway, c.variants.success),
    warning: makeSurfaceColorway(f.colorway, c.variants.warning),
    danger: makeSurfaceColorway(f.colorway, c.variants.danger),
    sm: {
      ...makeGap(f.spacing, c.variants.sm.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "sm"),
      ...makePadding(f.spacing, c.variants.sm),
    },
    md: {
      ...makeGap(f.spacing, c.variants.md.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "md"),
      ...makePadding(f.spacing, c.variants.md),
    },
    lg: {
      ...makeGap(f.spacing, c.variants.lg.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "lg"),
      ...makePadding(f.spacing, c.variants.lg),
    },
  },
})

export const defaultConfig: Config = {
  element: surfaceConfig.element,
  variants: {
    ...surfaceConfig.variants,
    info: {
      backgroundColor: ["info", "05"],
      borderColor: ["info", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    success: {
      backgroundColor: ["success", "05"],
      borderColor: ["success", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    warning: {
      backgroundColor: ["warning", "05"],
      borderColor: ["warning", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
    danger: {
      backgroundColor: ["danger", "05"],
      borderColor: ["danger", "04"],
      color: "readable",
      textDecorationColor: "currentColor",
      fill: "currentColor",
      stroke: "currentColor",
    },
  },
}
