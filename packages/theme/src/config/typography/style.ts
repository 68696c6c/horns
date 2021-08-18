import { mergeConfig } from '../../utils'

import { Config } from './config'
import { FontConfig } from './fonts'
import { FontFamilyStyle, FontSize, HeadingLevel } from './types'

const computeFontFamily = (style: FontFamilyStyle): string =>
  [style.base, style.fallback].join(', ')

export interface FontStyle {
  family: string // font-family
  style: string // font-style
  weight: number // font-weight
  size: string // font-size
  align: string // text-align
  transform: string // text-transform
  decoration: {
    line: string
    style: string
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
    },
    kerning: font.kerning,
    spacing: spacing[font.spacing],
    indent: font.indent,
    letting: letting[font.letting],
    tracking: font.tracking,
  }
}

export interface FontStateArgs {
  fontStyle: Partial<FontConfig>
  fontBase: Readonly<FontConfig>
  config: Readonly<Config>
  size?: HeadingLevel
}

export const evalFontStyle = ({
  fontStyle,
  fontBase,
  config,
  size,
}: FontStateArgs): FontStyle => {
  const base = mergeConfig<FontConfig>(fontBase, fontStyle)
  return makeFontStyle(base, config, size)
}
