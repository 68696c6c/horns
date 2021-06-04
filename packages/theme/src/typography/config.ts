import { FontStylesConfig } from './fonts'
import {
  defaultDecorations,
  Decorations,
  Direction,
  defaultFontFamilies,
  FontFamilies,
  defaultFontSizes,
  FontSizes,
  defaultFontWeights,
  FontWeights,
  defaultLettings,
  Lettings,
  defaultTextSpacings,
  TextSpacings,
  Decoration,
  FontWeight,
  TextSpacing,
  FontFamily,
  TextAlign,
  Letting,
  FontStyleCss,
  BaseFontSize,
} from './types'

export interface Config {
  direction: Direction
  families: FontFamilies
  decorations: Decorations
  weights: FontWeights
  sizes: FontSizes
  spacing: TextSpacings
  letting: Lettings
  styles: FontStylesConfig
}

export const defaultConfig: Config = {
  direction: Direction.LTR,
  families: defaultFontFamilies,
  decorations: defaultDecorations,
  weights: defaultFontWeights,
  sizes: defaultFontSizes,
  spacing: defaultTextSpacings,
  letting: defaultLettings,
  styles: {
    del: {
      base: {
        decoration: Decoration.StrikeThrough,
      },
    },
    heading: {
      base: {
        weight: FontWeight.Bold,
        spacing: TextSpacing.Max,
      },
    },
    kbd: {
      base: {
        family: FontFamily.Tertiary,
      },
    },
    pre: {
      base: {
        family: FontFamily.Tertiary,
      },
    },
    paragraph: {
      base: {
        align: TextAlign.Justify,
        spacing: TextSpacing.Max,
      },
    },
    quote: {
      base: {
        style: FontStyleCss.Italic,
      },
    },
    blockquote: {
      base: {
        style: FontStyleCss.Italic,
      },
    },
    text: {},
    s: {},
    samp: {},
    sub: {},
    sup: {},
    table: {
      base: {
        letting: Letting.Min,
      },
    },
    nav: {
      base: {
        letting: Letting.Min,
      },
    },
    control: {
      base: {
        letting: Letting.Min,
      },
    },
    label: {
      base: {
        weight: FontWeight.Bold,
        letting: Letting.Min,
      },
    },
    message: {
      base: {
        letting: Letting.Min,
      },
    },
    button: {
      base: {
        weight: FontWeight.Bold,
      },
    },
    link: {
      base: {
        decoration: Decoration.Underline,
      },
      hover: {
        style: FontStyleCss.Italic,
        decoration: Decoration.Underline,
      },
      active: {
        style: FontStyleCss.Italic,
        decoration: Decoration.UnderlineDouble,
      },
      inactive: {
        decoration: Decoration.Underline,
      },
    },
    caption: {
      base: {
        weight: FontWeight.Light,
      },
    },
    legal: {
      base: {
        family: FontFamily.Secondary,
        style: FontStyleCss.Italic,
        size: BaseFontSize.Small,
      },
    },
    code: {
      base: {
        family: FontFamily.Tertiary,
      },
    },
    emphasized: {
      base: {
        style: FontStyleCss.Italic,
      },
    },
    strong: {
      base: {
        weight: FontWeight.Light,
      },
    },
    variable: {
      base: {
        family: FontFamily.Tertiary,
        style: FontStyleCss.Italic,
      },
    },
    mistake: {
      base: {
        decoration: Decoration.Mistake,
      },
    },
    u: {
      base: {
        decoration: Decoration.Mistake,
      },
    },
  },
}
