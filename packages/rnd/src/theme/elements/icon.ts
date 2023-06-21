import {
  ColorTextColorway,
  ColorTextColorwayConfig,
  DimensionConfig,
  DimensionProperties,
  Foundations,
  makeColorTextColorway,
  makeDimensionTokens,
  Ordinal,
  Outline,
  outlineConfig,
  OutlineVariant,
  Scale,
  StateColor,
  StatusColor,
} from "../utils"

export type ColorwayVariant =
  | Ordinal
  | StatusColor
  | Exclude<StateColor, "enabled">

export type IconColorwayVariant<T = ColorTextColorway> = {
  base: T
  hover: T
  active: T
}

type Base<B, C, D, O> = {
  base: B
  hover: C
  active: C
  focus: O
  variants: {
    [key in Ordinal | StatusColor]: IconColorwayVariant<C>
  } & {
    [key in Exclude<StateColor, "enabled">]: C
  } & {
    [key in Scale]: D
  }
}

// export type Element = Base<
//   ColorTextColorway & DimensionProperties,
//   ColorTextColorway,
//   DimensionProperties,
//   Outline
// >
export type Element = {
  base: ColorTextColorway & DimensionProperties
  hover: ColorTextColorway
  active: ColorTextColorway
  focus: Outline
  variants: {
    primary: IconColorwayVariant
    secondary: IconColorwayVariant
    tertiary: IconColorwayVariant
    info: IconColorwayVariant
    success: IconColorwayVariant
    warning: IconColorwayVariant
    danger: IconColorwayVariant
    disabled: ColorTextColorway
    error: ColorTextColorway
    selected: ColorTextColorway
    sm: DimensionProperties
    md: DimensionProperties
    lg: DimensionProperties
  }
}

export type Config = {
  base: ConfigColorway & DimensionConfig
  hover: ColorTextColorwayConfig
  active: ColorTextColorwayConfig
  focus: OutlineVariant
  variants: {
    primary: IconColorwayVariant<ColorTextColorwayConfig>
    secondary: IconColorwayVariant<ColorTextColorwayConfig>
    tertiary: IconColorwayVariant<ColorTextColorwayConfig>
    info: IconColorwayVariant<ColorTextColorwayConfig>
    success: IconColorwayVariant<ColorTextColorwayConfig>
    warning: IconColorwayVariant<ColorTextColorwayConfig>
    danger: IconColorwayVariant<ColorTextColorwayConfig>
    disabled: ConfigColorway
    error: ConfigColorway
    selected: ConfigColorway
    sm: DimensionConfig
    md: DimensionConfig
    lg: DimensionConfig
  }
}

type ConfigColorway = {
  colorway: ColorTextColorwayConfig
}

// export type Config = Base<
//   DimensionConfig & {
//     colorway: ColorTextColorwayConfig
//   },
//   | ColorTextColorwayConfig
//   | {
//       colorway: ColorTextColorwayConfig
//     },
//   DimensionConfig,
//   OutlineVariant
// >

export const makeTokens = (f: Foundations, c: Config): Element => ({
  base: {
    ...makeColorTextColorway(f.colorway, c.base.colorway, "background"),
    ...makeDimensionTokens(f.spacing, c.base),
  },
  focus: outlineConfig[c.focus],
  hover: makeColorTextColorway(f.colorway, c.hover, "background"),
  active: makeColorTextColorway(f.colorway, c.active, "background"),
  variants: {
    primary: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.primary.base,
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
    },
    secondary: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.secondary.base,
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
    },
    tertiary: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.tertiary.base,
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
    },
    info: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.info.base,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.info.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.info.active,
        "background"
      ),
    },
    success: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.success.base,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.success.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.success.active,
        "background"
      ),
    },
    warning: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.warning.base,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.warning.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.warning.active,
        "background"
      ),
    },
    danger: {
      base: makeColorTextColorway(
        f.colorway,
        c.variants.danger.base,
        "background"
      ),
      hover: makeColorTextColorway(
        f.colorway,
        c.variants.danger.hover,
        "background"
      ),
      active: makeColorTextColorway(
        f.colorway,
        c.variants.danger.active,
        "background"
      ),
    },
    disabled: makeColorTextColorway(
      f.colorway,
      c.variants.disabled.colorway,
      "background"
    ),
    error: makeColorTextColorway(
      f.colorway,
      c.variants.error.colorway,
      "background"
    ),
    selected: makeColorTextColorway(
      f.colorway,
      c.variants.selected.colorway,
      "background"
    ),
    sm: makeDimensionTokens(f.spacing, c.variants.sm),
    md: makeDimensionTokens(f.spacing, c.variants.md),
    lg: makeDimensionTokens(f.spacing, c.variants.lg),
  },
})

export const defaultConfig: Config = {
  base: {
    colorway: "background",
    height: "03",
    width: "03",
  },
  hover: "hover",
  active: "active",
  focus: "focus",
  variants: {
    disabled: {
      colorway: "disabled",
    },
    error: {
      colorway: "error",
    },
    selected: {
      colorway: "selected",
    },
    primary: {
      base: {
        color: ["brand1", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["brand1", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["brand1", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    secondary: {
      base: {
        color: ["brand2", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["brand2", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["brand2", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    tertiary: {
      base: {
        color: ["brand3", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["brand3", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["brand3", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    info: {
      base: {
        color: ["info", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["info", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["info", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    success: {
      base: {
        color: ["success", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["success", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["success", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    warning: {
      base: {
        color: ["warning", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["warning", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["warning", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    danger: {
      base: {
        color: ["danger", "05"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      hover: {
        color: ["danger", "04"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
      active: {
        color: ["danger", "03"],
        textDecorationColor: "currentColor",
        fill: "currentColor",
        stroke: "currentColor",
      },
    },
    sm: {
      height: "03",
      width: "03",
    },
    md: {
      height: "04",
      width: "04",
    },
    lg: {
      height: "05",
      width: "05",
    },
  },
}
