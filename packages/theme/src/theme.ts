import {
  BreakpointsConfig,
  Breakpoints,
  makeBreakpoints,
  ColorsConfig,
  Colors,
  makeColors,
  ShadowsConfig,
  Shadows,
  makeShadows,
  SizesConfig,
  Sizes,
  makeSizes,
  TypographyConfig,
  Typography,
  makeTypography,
} from './config'
import * as Elements from './elements'

export interface Config {
  name?: string
  breakpoints?: Partial<BreakpointsConfig>
  colors?: Partial<ColorsConfig>
  shadows?: ShadowsConfig
  sizes?: Partial<SizesConfig>
  typography?: Partial<TypographyConfig>
  elements?: Elements.Config
}

export interface Theme {
  readonly name: string
  readonly breakpoints: Breakpoints
  readonly colors: Colors
  readonly shadows: Shadows
  readonly sizes: Sizes
  readonly typography: Typography
  readonly elements: Elements.Theme
}

export const makeTheme = (themeConfig?: Config): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    shadows: makeShadows(config.shadows),
    sizes: makeSizes(config.sizes),
    typography: makeTypography(config.typography),
    elements: Elements.make(config.elements),
  }
}
