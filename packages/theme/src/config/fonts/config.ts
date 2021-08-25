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
    text: {},
    compact: {
      letting: Letting.Min,
    },
    heading: {
      weight: FontWeight.Bold,
      spacing: TextSpacing.Max,
    },
    paragraph: {
      align: TextAlign.Justify,
      spacing: TextSpacing.Max,
    },
    control: {
      letting: Letting.Min,
    },
    label: {
      weight: FontWeight.Bold,
      letting: Letting.Min,
    },
    legal: {
      family: FontFamily.Secondary,
      style: FontStyleCss.Italic,
      size: BaseFontSize.Small,
    },
    link: {
      decoration: Decoration.Underline,
    },
    emphasized: {
      style: FontStyleCss.Italic,
    },
    strong: {
      weight: FontWeight.Bold,
    },
    quote: {
      style: FontStyleCss.Italic,
    },
    code: {
      family: FontFamily.Tertiary,
    },
  },
}
