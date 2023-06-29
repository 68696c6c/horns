import * as Colorway from "../colorway"
import * as Typography from "../typography"
import { Foundations } from "../foundations"
import { ScaleVariants } from "../types"
import * as Typography2 from "../typography2"
import * as Scale from "../scale"
import { BodyFont, Font } from "../typography2"

export type Element = {
  element: Colorway.Tokens
  variants: {
    [key in Typography.BodyFont]: Typography.Tokens & {
      sizes: ScaleVariants<Typography.ScaleTokens>
    }
  }
}

export const makeElement = (f: Foundations): Element => ({
  element: Colorway.makeTokens(f.colorway, {
    colorway: "background.base",
  }),
  variants: {
    body1: {
      ...Typography.makeTokens(f.typography, "body1"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "body1", "sm"),
        md: Typography.makeScaleTokens(f.typography, "body1", "md"),
        lg: Typography.makeScaleTokens(f.typography, "body1", "lg"),
      },
    },
    body2: {
      ...Typography.makeTokens(f.typography, "body2"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "body2", "sm"),
        md: Typography.makeScaleTokens(f.typography, "body2", "md"),
        lg: Typography.makeScaleTokens(f.typography, "body2", "lg"),
      },
    },
    body3: {
      ...Typography.makeTokens(f.typography, "body3"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "body3", "sm"),
        md: Typography.makeScaleTokens(f.typography, "body3", "md"),
        lg: Typography.makeScaleTokens(f.typography, "body3", "lg"),
      },
    },
    emphasis: {
      ...Typography.makeTokens(f.typography, "emphasis"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "emphasis", "sm"),
        md: Typography.makeScaleTokens(f.typography, "emphasis", "md"),
        lg: Typography.makeScaleTokens(f.typography, "emphasis", "lg"),
      },
    },
    label: {
      ...Typography.makeTokens(f.typography, "label"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "label", "sm"),
        md: Typography.makeScaleTokens(f.typography, "label", "md"),
        lg: Typography.makeScaleTokens(f.typography, "label", "lg"),
      },
    },
    legal: {
      ...Typography.makeTokens(f.typography, "legal"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "legal", "sm"),
        md: Typography.makeScaleTokens(f.typography, "legal", "md"),
        lg: Typography.makeScaleTokens(f.typography, "legal", "lg"),
      },
    },
    legalHeading: {
      ...Typography.makeTokens(f.typography, "legalHeading"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "legalHeading", "sm"),
        md: Typography.makeScaleTokens(f.typography, "legalHeading", "md"),
        lg: Typography.makeScaleTokens(f.typography, "legalHeading", "lg"),
      },
    },
    strong: {
      ...Typography.makeTokens(f.typography, "strong"),
      sizes: {
        sm: Typography.makeScaleTokens(f.typography, "label", "sm"),
        md: Typography.makeScaleTokens(f.typography, "strong", "md"),
        lg: Typography.makeScaleTokens(f.typography, "strong", "lg"),
      },
    },
  },
})

type VariantTokens = Typography2.Tokens &
  Scale.TextTokens &
  Scale.TextSpaceTokens

type VariantConfigTokens = Typography2.ConfigTokens & Scale.TextElementConfig

export type Element2 = {
  element: Colorway.Tokens & Scale.TextTokens
  variants: {
    [key in Typography2.BodyFont]: VariantTokens
  }
}

export type Config = {
  element: Colorway.ElementConfig
  variants: {
    [key in Typography2.BodyFont]: VariantConfigTokens
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
  element: {
    ...Colorway.makeTokens(f.colorway, c.element),
    fontSize: f.scale.root.fontSize,
    lineHeight: f.scale.root.lineHeight,
  },
  variants: {
    body: makeVariant(f, c.variants.body),
    code: makeVariant(f, c.variants.code),
    control: makeVariant(f, c.variants.control),
    em: makeVariant(f, c.variants.em),
    label: makeVariant(f, c.variants.label),
    legal: makeVariant(f, c.variants.legal),
    strong: makeVariant(f, c.variants.strong),
    title: makeVariant(f, c.variants.title),
  },
})

export const defaultConfig: Config = {
  element: {
    colorway: "background.base",
  },
  variants: {
    body: {
      typeface: "base",
      scale: "01",
      spaceBottom: "single",
    },
    code: {
      typeface: "mono",
      scale: "01",
      spaceBottom: "single",
    },
    control: {
      typeface: "base",
      scale: "01",
    },
    em: {
      typeface: "base",
      fontStyle: "italic",
      scale: "01",
    },
    label: {
      typeface: "base",
      scale: "01",
    },
    legal: {
      typeface: "alt",
      scale: "00",
    },
    strong: {
      typeface: "base",
      fontWeight: "600",
      scale: "01",
    },
    title: {
      typeface: "base",
      fontWeight: "600",
      scale: "01",
    },
    // body: makeVariant(f, c.variants.body),
    // code: makeVariant(f, c.variants.code),
    // control: makeVariant(f, c.variants.control),
    // display: makeVariant(f, c.variants.display),
    // heading: makeVariant(f, c.variants.heading),
    // title: makeVariant(f, c.variants.title),
    // strong: makeVariant(f, c.variants.strong),
    // em: makeVariant(f, c.variants.em),
    // label: makeVariant(f, c.variants.label),
    // legal: makeVariant(f, c.variants.legal),
  },
}
