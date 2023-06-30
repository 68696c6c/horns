import * as Colorway from "../colorway"
import * as Scale from "../scale"
import * as Typography from "../typography"
import * as Typography2 from "../typography2"

import * as Margin from "../tokens/margin"
import { Foundations } from "../foundations"
import { ElementConfig } from "../typography2"
import { makeTextSpaceTokens, TextElementConfig } from "../scale"

export type Element = {
  element: Colorway.Tokens
  variants: {
    [key in Typography.HeadingFont]: Typography.Tokens &
      Typography.ScaleTokens &
      Margin.Tokens
  }
}

export const makeElement = (f: Foundations): Element => ({
  element: Colorway.makeTokens(f.colorway, {
    colorway: "background.base",
  }),
  variants: {
    display: {
      ...Typography.makeTokens(f.typography, "display"),
      ...Typography.makeScaleTokens(f.typography, "display"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.display),
    },
    h1: {
      ...Typography.makeTokens(f.typography, "h1"),
      ...Typography.makeScaleTokens(f.typography, "h1"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h1),
    },
    h2: {
      ...Typography.makeTokens(f.typography, "h2"),
      ...Typography.makeScaleTokens(f.typography, "h2"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h2),
    },
    h3: {
      ...Typography.makeTokens(f.typography, "h3"),
      ...Typography.makeScaleTokens(f.typography, "h3"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h3),
    },
    h4: {
      ...Typography.makeTokens(f.typography, "h4"),
      ...Typography.makeScaleTokens(f.typography, "h4"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h4),
    },
    h5: {
      ...Typography.makeTokens(f.typography, "h5"),
      ...Typography.makeScaleTokens(f.typography, "h5"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h5),
    },
    h6: {
      ...Typography.makeTokens(f.typography, "h6"),
      ...Typography.makeScaleTokens(f.typography, "h6"),
      ...Margin.makeTokens(f.spacing, f.typography.fonts.h6),
    },
  },
})

type VariantTokens = Typography2.Tokens &
  Scale.TextTokens &
  Scale.TextSpaceTokens

export type Element2 = {
  element: Colorway.Tokens
  variants: {
    [key in Typography.HeadingFont]: VariantTokens
  }
}

const makeVariant = (
  f: Foundations,
  c: VariantConfigTokens
): VariantTokens => ({
  ...Scale.makeTextTokens(f.scale, c),
  ...Scale.makeTextSpaceTokens(f.scale, c),
  ...Typography2.makeTokens(f.typography2, c),
})

export const makeElement2 = (f: Foundations, c: Config): Element2 => ({
  element: Colorway.makeTokens(f.colorway, c.element),
  variants: {
    display: makeVariant(f, c.variants.display),
    h1: makeVariant(f, c.variants.h1),
    h2: makeVariant(f, c.variants.h2),
    h3: makeVariant(f, c.variants.h3),
    h4: makeVariant(f, c.variants.h4),
    h5: makeVariant(f, c.variants.h5),
    h6: makeVariant(f, c.variants.h6),
  },
})

type VariantConfigTokens = Typography2.ConfigTokens & Scale.TextElementConfig

export type Config = {
  element: Colorway.ElementConfig
  variants: {
    [key in Typography.HeadingFont]: VariantConfigTokens
  }
}

export const defaultConfig: Config = {
  element: {
    colorway: "background.base",
  },
  variants: {
    display: {
      typeface: "base",
      fontWeight: "700",
      // scale: "05",
      scale: "10",
      spaceTop: "double",
      spaceBottom: "double",
    },
    h1: {
      typeface: "base",
      fontWeight: "600",
      // scale: "04",
      scale: "09",
      spaceTop: "single",
      spaceBottom: "double",
    },
    h2: {
      typeface: "base",
      fontWeight: "600",
      // scale: "03",
      scale: "08",
      spaceTop: "single",
      spaceBottom: "single",
    },
    h3: {
      typeface: "base",
      fontWeight: "600",
      // scale: "02",
      scale: "07",
      spaceTop: "single",
      spaceBottom: "single",
    },
    h4: {
      typeface: "base",
      fontWeight: "600",
      // textTransform: "uppercase",
      // scale: "01",
      scale: "06",
      spaceTop: "single",
      // spaceBottom: "none",
    },
    h5: {
      typeface: "base",
      fontWeight: "600",
      // textTransform: "uppercase",
      // scale: "01",
      scale: "06",
      spaceTop: "single",
      // spaceBottom: "none",
    },
    h6: {
      typeface: "base",
      fontWeight: "600",
      // textTransform: "uppercase",
      // scale: "01",
      scale: "06",
      spaceTop: "single",
      // spaceBottom: "none",
    },
  },
}
