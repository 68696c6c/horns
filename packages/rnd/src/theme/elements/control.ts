import {
  BlockScaleConfig,
  BlockScaleTokens,
  BlockTokens,
  BodyFont,
  Foundations,
  Interactive,
  interactiveConfig,
  InteractiveConfig,
  InteractiveSurfaceColor,
  makeFontScaleTokens,
  makeGap,
  makeInteractiveTokens,
  makePadding,
  makeSurfaceColorway,
  ScaleProperties,
  SurfaceColorway,
  Variants,
} from "../utils"

export type ControlVariant = "disabled" | "error"
export type ControlVariants<C = SurfaceColorway, S = BlockScaleTokens> = {
  [key in ControlVariant]: C
} & ScaleProperties<S>
export type ControlVariantsConfig = ControlVariants<
  InteractiveSurfaceColor,
  BlockScaleConfig
>
export const controlVariantsConfig: ControlVariantsConfig = {
  disabled: "disabled",
  error: "error",
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
}
export const makeControlVariants = (
  f: Foundations,
  c: ControlVariantsConfig,
  font: BodyFont
): ControlVariants => ({
  disabled: makeSurfaceColorway(f.colorway, c.disabled),
  error: makeSurfaceColorway(f.colorway, c.error),
  sm: {
    ...makeGap(f.spacing, c.sm.gap),
    ...makeFontScaleTokens(f.typography, font, "sm"),
    ...makePadding(f.spacing, c.sm),
  },
  md: {
    ...makeGap(f.spacing, c.md.gap),
    ...makeFontScaleTokens(f.typography, font, "md"),
    ...makePadding(f.spacing, c.md),
  },
  lg: {
    ...makeGap(f.spacing, c.lg.gap),
    ...makeFontScaleTokens(f.typography, font, "lg"),
    ...makePadding(f.spacing, c.lg),
  },
})
export type ControlConfig = InteractiveConfig & Variants<ControlVariantsConfig>
export const controlConfig: ControlConfig = {
  ...interactiveConfig,
  variants: controlVariantsConfig,
}
export type Control = Interactive<BlockTokens> & Variants<ControlVariants>
export const makeControlTokens = (
  f: Foundations,
  c: ControlConfig
): Control => ({
  ...makeInteractiveTokens(f, c),
  variants: makeControlVariants(f, c.variants, c.element.font),
})
