import _merge from 'lodash.merge'

import { ColorsConfig, Colors, makeColors } from './colors'
import { defaultSizes, Sizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'
import { defaultButtons, defaultControls, ControlsConfig } from './controls'
import { Breakpoints, makeBreakpoints } from './breakpoints'
import { defaultGrid, Grid } from './grid'
import { defaultTables, Tables } from './tables'

export interface Config {
  name?: string
  buttons?: ControlsConfig
  breakpoints?: Breakpoints
  colors?: Partial<ColorsConfig>
  controls?: ControlsConfig
  grid?: Partial<Grid>
  sizes?: Sizes
  tables?: Tables
  typography?: TypographyConfig
}

export interface Theme {
  name: string
  buttons: ControlsConfig
  breakpoints: Breakpoints
  colors: Colors
  controls: ControlsConfig
  grid: Grid
  sizes: Sizes
  tables: Tables
  typography: Typography
}

export const makeTheme = (themeConfig?: Config): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    buttons: _merge(defaultButtons, config.buttons),
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    controls: _merge(defaultControls, config.controls),
    sizes: _merge(defaultSizes, config.sizes),
    grid: _merge(defaultGrid, config.grid),
    tables: _merge(defaultTables, config.tables),
    typography: makeTypography(config.typography),
  }
}
