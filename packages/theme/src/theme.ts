import { BreakpointsConfig, Breakpoints, makeBreakpoints } from './breakpoints'
import { ColorsConfig, Colors, makeColors } from './colors'
import { SizesConfig, Sizes, makeSizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'
import {
  ElementTheme,
  ElementConfig,
  NavTheme,
  NavConfig,
  makeButtons,
  makeControls,
  makeLinks,
  makeNav,
  makeTables,
} from './elements'
import { GridConfig, Grid, makeGrid } from './grid'

export interface Config {
  name?: string
  buttons?: Partial<ElementConfig>
  breakpoints?: Partial<BreakpointsConfig>
  colors?: Partial<ColorsConfig>
  controls?: Partial<ElementConfig>
  links?: Partial<ElementConfig>
  grid?: Partial<GridConfig>
  sizes?: Partial<SizesConfig>
  nav?: Partial<NavConfig>
  tables?: Partial<ElementConfig>
  typography?: Partial<TypographyConfig>
}

interface Elements {
  readonly buttons: ElementTheme
  readonly controls: ElementTheme
  readonly grid: Grid
  readonly links: ElementTheme
  readonly nav: NavTheme
  readonly tables: ElementTheme
}

export interface Theme {
  readonly name: string
  readonly breakpoints: Breakpoints
  readonly colors: Colors
  readonly elements: Elements
  readonly sizes: Sizes
  readonly typography: Typography
}

export const makeTheme = (themeConfig?: Config): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    breakpoints: makeBreakpoints(config.breakpoints),
    colors: makeColors(config.colors),
    sizes: makeSizes(config.sizes),
    typography: makeTypography(config.typography),
    elements: {
      buttons: makeButtons(config.buttons),
      controls: makeControls(config.controls),
      grid: makeGrid(config.grid),
      links: makeLinks(config.links),
      nav: makeNav(config.nav),
      tables: makeTables(config.tables),
    },
  }
}
