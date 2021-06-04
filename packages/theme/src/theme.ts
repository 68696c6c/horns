import _merge from 'lodash.merge'

import { ColorsConfig, Colors, makeColors } from './colors'
import { defaultSizes, Sizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'

export interface Config {
  name?: string
  colors?: Partial<ColorsConfig>
  sizes?: Sizes
  typography?: TypographyConfig
}

export interface Theme {
  name: string
  colors: Colors
  sizes: Sizes
  typography: Typography
}

export const makeTheme = (themeConfig?: Config): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    colors: makeColors(config.colors),
    sizes: _merge(defaultSizes, config.sizes),
    typography: makeTypography(config.typography),
  }
}
