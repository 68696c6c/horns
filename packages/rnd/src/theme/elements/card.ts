import {
  BaseSurfaceColor,
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
  ScaleProperties,
  StatusColor,
  Surface,
  SurfaceColor,
  SurfaceColorway,
  SurfaceColorwayConfig,
  surfaceConfig,
  SurfaceConfig,
} from "../utils"

export type Variant = BaseSurfaceColor

export type Variants<C = SurfaceColorway> = {
  [key in Exclude<Variant, "background">]: C
}

export type Element = Surface<Variants>

export type Config = SurfaceConfig<
  Variants<SurfaceColorwayConfig | SurfaceColor>
>

export const makeTokens = (f: Foundations, c: Config): Element => ({
  element: {
    ...makeSurfaceColorway(f.colorway, c.element.colorway),
    ...makeBorderTokens(f.border, c.element.border || "medium"),
    ...makeBodyFontTokens(f.typography, c.element.font),
    ...makeRadiusTokens(f.radius, c.element.radius),
  },
  variants: {
    inverse: makeSurfaceColorway(f.colorway, c.variants.inverse),
    prominent: makeSurfaceColorway(f.colorway, c.variants.prominent),
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
    inverse: "inverse",
    prominent: "prominent",
  },
}
