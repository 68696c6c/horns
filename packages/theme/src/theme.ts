import { BreakpointsConfig, Breakpoints, makeBreakpoints } from './breakpoints'
import { ColorsConfig, Colors, makeColors } from './colors'
import { defaultSizes, Sizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'
import { defaultButtons, defaultControls, ControlsConfig } from './controls'
import { defaultGrid, Grid } from './grid'
import { defaultTables, Tables } from './tables'
import { mergeConfig } from './utils'

export interface Config {
  name?: string
  buttons?: Partial<ControlsConfig>
  breakpoints?: Partial<BreakpointsConfig>
  colors?: Partial<ColorsConfig>
  controls?: ControlsConfig
  grid?: Partial<Grid>
  sizes?: Partial<Sizes>
  tables?: Partial<Tables>
  typography?: Partial<TypographyConfig>
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
    buttons: mergeConfig<ControlsConfig>(defaultButtons, config.buttons),
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    controls: mergeConfig<ControlsConfig>(defaultControls, config.controls),
    sizes: mergeConfig<Sizes>(defaultSizes, config.sizes),
    grid: mergeConfig<Grid>(defaultGrid, config.grid),
    tables: mergeConfig<Tables>(defaultTables, config.tables),
    typography: makeTypography(config.typography),
  }
}
