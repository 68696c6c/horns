import { BreakpointsConfig, Breakpoints, makeBreakpoints } from './breakpoints'
import { ColorsConfig, Colors, makeColors } from './colors'
import { SizesConfig, Sizes, makeSizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'
import {
  ElementTheme,
  ElementConfig,
  makeButtons,
  makeControls,
  makeTables,
} from './elements'
import { GridConfig, Grid, makeGrid } from './grid'

export interface Config {
  name?: string
  buttons?: Partial<ElementConfig>
  breakpoints?: Partial<BreakpointsConfig>
  colors?: Partial<ColorsConfig>
  controls?: Partial<ElementConfig>
  grid?: Partial<GridConfig>
  sizes?: Partial<SizesConfig>
  tables?: Partial<ElementConfig>
  typography?: Partial<TypographyConfig>
}

export interface Theme {
  readonly name: string
  readonly buttons: ElementTheme
  readonly breakpoints: Breakpoints
  readonly colors: Colors
  readonly controls: ElementTheme
  readonly grid: Grid
  readonly sizes: Sizes
  readonly tables: ElementTheme
  readonly typography: Typography
}

export const makeTheme = (themeConfig?: Config): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  const sizes = makeSizes(config.sizes)
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    buttons: makeButtons(sizes, config.buttons),
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    controls: makeControls(sizes, config.controls),
    sizes,
    grid: makeGrid(sizes, config.grid),
    tables: makeTables(sizes, config.tables),
    typography: makeTypography(config.typography),
  }
}
