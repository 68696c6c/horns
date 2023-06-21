import {
  FontScaleTokens,
  FontTokens,
  Foundations,
  HeadingFont,
  makeFontScaleTokens,
  makeHeadingFontTokens,
  Margin,
  TextColorway,
  Variants,
} from "../utils"

export type HeadingVariants = {
  [key in HeadingFont]: FontTokens & FontScaleTokens & Margin
}
export type Heading = {
  element: TextColorway
} & Variants<HeadingVariants>
export const makeHeadingVariant = (
  f: Foundations,
  font: HeadingFont
): FontTokens & FontScaleTokens & Margin => ({
  ...makeHeadingFontTokens(f.typography, font),
  ...makeFontScaleTokens(f.typography, font),
  marginTop: f.typography.fonts[font].marginTop,
  marginBottom: f.typography.fonts[font].marginBottom,
  marginLeft: "0",
  marginRight: "0",
})
export const makeHeadingTokens = (f: Foundations): Heading => ({
  element: {
    color: "currentColor",
    textDecorationColor: "currentColor",
    fill: "currentColor",
    stroke: "currentColor",
  },
  variants: {
    display: makeHeadingVariant(f, "display"),
    h1: makeHeadingVariant(f, "h1"),
    h2: makeHeadingVariant(f, "h2"),
    h3: makeHeadingVariant(f, "h3"),
    h4: makeHeadingVariant(f, "h4"),
    h5: makeHeadingVariant(f, "h5"),
    h6: makeHeadingVariant(f, "h6"),
  },
})
