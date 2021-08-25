import { DeepPartial, mergeConfig } from '../utils'

import * as Breakpoints from './breakpoints'
import * as Colors from './colors'
import * as Fonts from './fonts'
import * as Shadows from './shadows'
import * as Sizes from './sizes'

export interface Config {
  breakpoints: Breakpoints.Config
  colors: Colors.Config
  fonts: Fonts.Config
  shadows: Shadows.Config
  sizes: Sizes.Config
}

export interface Theme {
  readonly breakpoints: Breakpoints.Theme
  readonly colors: Colors.Theme
  readonly fonts: Fonts.Theme
  readonly shadows: Shadows.Theme
  readonly sizes: Sizes.Theme
}

export const defaultConfig = {
  breakpoints: Breakpoints.defaultConfig,
  colors: Colors.defaultConfig,
  fonts: Fonts.defaultConfig,
  shadows: Shadows.defaultConfig,
  sizes: Sizes.defaultConfig,
}

export const make = (input?: DeepPartial<Config>): Theme => {
  const config = mergeConfig<Config>(defaultConfig, input)
  return {
    breakpoints: Breakpoints.make(config.breakpoints),
    colors: Colors.make(config.colors),
    fonts: Fonts.make(config.fonts),
    shadows: Shadows.make(config.shadows),
    sizes: Sizes.make(config.sizes),
  }
}
