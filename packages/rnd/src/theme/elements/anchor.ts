import {
  BodyFont,
  ColorTextColorway,
  ColorTextColorwayConfig,
  FontScaleTokens,
  FontTokens,
  Foundations,
  Gap,
  makeBodyFontTokens,
  makeColorTextColorway,
  makeFontScaleTokens,
  makeGap,
  makeTextDecorationTokens,
  Ordinal,
  Outline,
  outlineConfig,
  OutlineVariant,
  Scale,
  TextDecorationConfig,
  TextDecorationTokens,
  TokenKey,
  Variants,
} from "../utils"

export type AnchorVariant = Ordinal

export type AnchorVariants<C = ColorTextColorway, S = FontScaleTokens & Gap> = {
  [key in AnchorVariant]: {
    enabled: C
    hover: C
    active: C
    visited: C
  }
} & {
  [key in Scale]: S
}

export type Element = {
  element: ColorTextColorway & FontTokens & TextDecorationTokens
  focus: Outline
  hover: ColorTextColorway & TextDecorationTokens
  active: ColorTextColorway & TextDecorationTokens
  visited: ColorTextColorway & TextDecorationTokens
} & Variants<AnchorVariants>

export type VariantConfig<T = unknown> = {
  colorway: ColorTextColorwayConfig
} & T

export type Config = {
  element: VariantConfig<TextDecorationConfig> & {
    font: BodyFont
  }
  focus: OutlineVariant
  hover: VariantConfig<TextDecorationConfig>
  active: VariantConfig<TextDecorationConfig>
  visited: VariantConfig<TextDecorationConfig>
} & Variants<AnchorVariants<ColorTextColorwayConfig, Gap<TokenKey>>>

export const defaultConfig: Config = {
  element: {
    colorway: "background",
    font: "body1",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "01",
  },
  focus: "focus",
  hover: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "01",
  },
  active: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationThickness: "01",
  },
  visited: {
    colorway: "background",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: "01",
  },
  variants: {
    primary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand1", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand1", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand1", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand1", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand2", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand2", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand2", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand2", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      enabled: {
        color: "currentColor",
        textDecorationColor: ["brand3", "05"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: "currentColor",
        textDecorationColor: ["brand3", "04"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: "currentColor",
        textDecorationColor: ["brand3", "03"],
        fill: "currentColor",
        stroke: "currentColor",
      },
      visited: {
        color: "currentColor",
        textDecorationColor: ["brand3", "02"],
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    sm: {
      gap: "01",
    },
    md: {
      gap: "02",
    },
    lg: {
      gap: "03",
    },
  },
}
export const makeAnchorTokens = (f: Foundations, c: Config): Element => ({
  element: {
    ...makeColorTextColorway(f.colorway, c.element.colorway, "background"),
    ...makeBodyFontTokens(f.typography, c.element.font),
    ...makeTextDecorationTokens(f.spacing, c.element),
  },
  focus: outlineConfig[c.focus],
  hover: {
    ...makeColorTextColorway(f.colorway, c.hover.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.hover),
  },
  active: {
    ...makeColorTextColorway(f.colorway, c.active.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.active),
  },
  visited: {
    ...makeColorTextColorway(f.colorway, c.visited.colorway, "background"),
    ...makeTextDecorationTokens(f.spacing, c.visited),
  },
  variants: {
    primary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.primary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.primary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.primary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.primary.visited,
        "background"
      ),
    },
    secondary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.visited,
        "background"
      ),
    },
    tertiary: {
      enabled: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.enabled,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.active,
        "background"
      ),
      visited: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.visited,
        "background"
      ),
    },
    sm: {
      ...makeGap(f.spacing, c.variants.sm.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "sm"),
    },
    md: {
      ...makeGap(f.spacing, c.variants.md.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "md"),
    },
    lg: {
      ...makeGap(f.spacing, c.variants.lg.gap),
      ...makeFontScaleTokens(f.typography, c.element.font, "lg"),
    },
  },
})
