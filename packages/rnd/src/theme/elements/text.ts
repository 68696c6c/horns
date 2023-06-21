import {
  BodyFont,
  FontScaleTokens,
  FontTokens,
  makeFontScaleTokens,
  makeFontTokens,
  ScaleProperties,
  TextColorway,
  TypographyConfig,
  Variants,
} from "../utils"

export type TextVariants = {
  [key in BodyFont]: FontTokens & { sizes: ScaleProperties<FontScaleTokens> }
}
export type Text = {
  element: TextColorway
} & Variants<TextVariants>
export const makeBodyTextTokens = (f: TypographyConfig): Text => ({
  element: {
    color: "currentColor",
    textDecorationColor: "currentColor",
    fill: "currentColor",
    stroke: "currentColor",
  },
  variants: {
    body1: {
      ...makeFontTokens(f, f.fonts.body1),
      sizes: {
        sm: makeFontScaleTokens(f, "body1", "sm"),
        md: makeFontScaleTokens(f, "body1", "md"),
        lg: makeFontScaleTokens(f, "body1", "lg"),
      },
    },
    body2: {
      ...makeFontTokens(f, f.fonts.body2),
      sizes: {
        sm: makeFontScaleTokens(f, "body2", "sm"),
        md: makeFontScaleTokens(f, "body2", "md"),
        lg: makeFontScaleTokens(f, "body2", "lg"),
      },
    },
    body3: {
      ...makeFontTokens(f, f.fonts.body3),
      sizes: {
        sm: makeFontScaleTokens(f, "body3", "sm"),
        md: makeFontScaleTokens(f, "body3", "md"),
        lg: makeFontScaleTokens(f, "body3", "lg"),
      },
    },
    label: {
      ...makeFontTokens(f, f.fonts.label),
      sizes: {
        sm: makeFontScaleTokens(f, "label", "sm"),
        md: makeFontScaleTokens(f, "label", "md"),
        lg: makeFontScaleTokens(f, "label", "lg"),
      },
    },
    caption: {
      ...makeFontTokens(f, f.fonts.caption),
      sizes: {
        sm: makeFontScaleTokens(f, "caption", "sm"),
        md: makeFontScaleTokens(f, "caption", "md"),
        lg: makeFontScaleTokens(f, "caption", "lg"),
      },
    },
    captionHeading: {
      ...makeFontTokens(f, f.fonts.captionHeading),
      sizes: {
        sm: makeFontScaleTokens(f, "captionHeading", "sm"),
        md: makeFontScaleTokens(f, "captionHeading", "md"),
        lg: makeFontScaleTokens(f, "captionHeading", "lg"),
      },
    },
  },
})
