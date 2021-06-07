import { mergeConfig } from '../utils'

import { Config, defaultConfig } from './config'
import { Font, FontConfig } from './fonts'
import { FontStates, makeFontStates } from './style'
import {
  BaseFontSize,
  Decoration,
  FontFamily,
  FontKerning,
  FontStyleCss,
  FontWeight,
  HeadingLevel,
  Letting,
  TextAlign,
  TextSpacing,
  TextTransform,
} from './types'

export const makeDefaultFontConfig = (config: Config): FontConfig => ({
  family: FontFamily.Primary,
  style: FontStyleCss.Normal,
  weight: FontWeight.Base,
  size: BaseFontSize.Base,
  align: config.direction === 'rtl' ? TextAlign.Right : TextAlign.Left,
  transform: TextTransform.None,
  decoration: Decoration.Base,
  kerning: FontKerning.Normal,
  spacing: TextSpacing.Base,
  indent: '',
  letting: Letting.Base,
  tracking: '',
})

export type Typography = {
  [key in Font | HeadingLevel]: Readonly<FontStates>
}

export const makeTypography = (
  input?: Partial<Config>,
): Readonly<Typography> => {
  const config = mergeConfig<Config>(defaultConfig, input)
  const fontBase = makeDefaultFontConfig(config)

  const result: Partial<Typography> = {}
  Object.values(Font).forEach((font) => {
    const fontStyle = config.styles[font]
    result[font] = makeFontStates({
      fontStyle,
      fontBase,
      config,
    })
  })
  const fontStyle = config.styles.heading
  result.h1 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H1,
  })
  result.h2 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H2,
  })
  result.h3 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H3,
  })
  result.h4 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H4,
  })
  result.h5 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H5,
  })
  result.h6 = makeFontStates({
    fontStyle,
    fontBase,
    config,
    size: HeadingLevel.H6,
  })

  return result as Readonly<Typography>
}
