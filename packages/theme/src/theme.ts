import { BreakpointsConfig, Breakpoints, makeBreakpoints } from './breakpoints'
import { ColorsConfig, Colors, makeColors } from './colors'
import { ShadowsConfig, Shadows, makeShadows } from './shadows'
import { SizesConfig, Sizes, makeSizes } from './sizes'
import { TypographyConfig, Typography, makeTypography } from './typography'
import {
  ThemeElement,
  ElementProps,
  NavTheme,
  NavProps,
  makeButtons,
  makeControls,
  makeLinks,
  makeNav,
  makeTables,
} from './elements'
import { GridConfig, Grid, makeGrid } from './grid'

export interface Config {
  name?: string
  buttons?: ElementProps
  breakpoints?: Partial<BreakpointsConfig>
  colors?: Partial<ColorsConfig>
  controls?: ElementProps
  grid?: Partial<GridConfig>
  links?: ElementProps
  nav?: NavProps
  shadows?: ShadowsConfig
  sizes?: Partial<SizesConfig>
  tables?: ElementProps
  typography?: Partial<TypographyConfig>
}

interface Elements {
  readonly buttons: ThemeElement
  readonly controls: ThemeElement
  readonly grid: Grid
  readonly links: ThemeElement
  readonly nav: NavTheme
  readonly tables: ThemeElement
}

export interface Theme {
  readonly name: string
  readonly breakpoints: Breakpoints
  readonly colors: Colors
  readonly elements: Elements
  readonly shadows: Shadows
  readonly sizes: Sizes
  readonly typography: Typography
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
