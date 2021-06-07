import { Colorway } from '../colors'
import { mergeConfig, UIState } from '../utils'

import { Config } from './config'
import { FontConfig, FontStatesConfig } from './fonts'
import { FontFamilyStyle, FontSize, HeadingLevel } from './types'

const computeFontFamily = (style: FontFamilyStyle): string =>
  [style.base, style.fallback].join(', ')

interface FontStyle {
  family: string // font-family
  style: string // font-style
  weight: number // font-weight
  size: string // font-size
  align: string // text-align
  transform: string // text-transform
  decoration: {
    line: string
    style: string
    color: Colorway
  } // text-decoration
  kerning: string // font-kerning
  spacing: string // margin; the space before and after typographic block-level elements
  indent: string // text-indent
  letting: string // line-height - overrides font-family value
  tracking: string // word-spacing - overrides font-family value
}

const makeFontStyle = (
  font: FontConfig,
  config: Config,
  size?: FontSize,
): FontStyle => {
  const { families, decorations, weights, spacing, sizes, letting } = config
  const fontDecoration = decorations[font.decoration]
  return {
    family: computeFontFamily(families[font.family]),
    style: font.style,
    weight: weights[font.weight],
    size: sizes[size || font.size],
    align: font.align,
    transform: font.transform,
    decoration: {
      line: fontDecoration.line,
      style: fontDecoration.style || '',
      color: fontDecoration.color || Colorway.Typography,
    },
    kerning: font.kerning,
    spacing: spacing[font.spacing],
    indent: font.indent,
    letting: letting[font.letting],
    tracking: font.tracking,
  }
}

export type FontStates = {
  [key in UIState]: FontStyle
}

export interface FontStateArgs {
  fontStyle: FontStatesConfig
  fontBase: Readonly<FontConfig>
  config: Readonly<Config>
  size?: HeadingLevel
}

export const makeFontStates = ({
  fontStyle,
  fontBase,
  config,
  size,
}: FontStateArgs): FontStates => {
  const { base: inputBase, hover, active, inactive } = fontStyle
  const base = mergeConfig<FontConfig>(fontBase, inputBase)
  return {
    base: makeFontStyle(base, config, size),
    hover: makeFontStyle(mergeConfig<FontConfig>(base, hover), config, size),
    active: makeFontStyle(mergeConfig<FontConfig>(base, active), config, size),
    inactive: makeFontStyle(
      mergeConfig<FontConfig>(base, inactive),
      config,
      size,
    ),
  }
}
