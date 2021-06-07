import { mergeConfig } from '../utils'

import { defaultConfig, Config } from './config'
import {
  ColorwayStates,
  makeColorStates,
  makeDarkColorStates,
  makeLightColorStates,
  makeBackgroundColorStates,
  makeBackgroundAltColorStates,
  makeTypographyColorStates,
} from './colorways'
import { makeColorShades } from './shades'
import { Colorway, Mode } from './types'

export type Colors = {
  [key in Colorway]: ColorwayStates
}

export const makeColors = (config?: Partial<Config>): Colors => {
  const mergedConfig = mergeConfig<Config>(defaultConfig, config)
  const colorShades = makeColorShades(mergedConfig)
  const isDark = mergedConfig.mode === Mode.Dark
  return {
    primary: makeColorStates(colorShades.primary, isDark),
    secondary: makeColorStates(colorShades.secondary, isDark),
    tertiary: makeColorStates(colorShades.tertiary, isDark),
    dark: makeDarkColorStates(colorShades.dark),
    neutral: makeColorStates(colorShades.neutral, isDark),
    light: makeLightColorStates(colorShades.light),
    success: makeColorStates(colorShades.success, isDark),
    info: makeColorStates(colorShades.info, isDark),
    warning: makeColorStates(colorShades.warning, isDark),
    danger: makeColorStates(colorShades.danger, isDark),
    prominent: makeColorStates(colorShades.prominent, isDark),
    selected: makeColorStates(colorShades.selected, isDark),
    background: makeBackgroundColorStates(colorShades, isDark),
    backgroundAlt: makeBackgroundAltColorStates(colorShades, isDark),
    typography: makeTypographyColorStates(colorShades, isDark),
  }
}
