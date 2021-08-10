import ColorObject from 'color'

import { mergeConfig } from '../utils'

import { Color } from './types'
import { Config, defaultConfig, Shaders } from './config'

export enum Shade {
  Darker = 'darker',
  Dark = 'dark',
  Base = 'base',
  Light = 'light',
  Lighter = 'lighter',
}

export type Shades = {
  [key in Shade]: ColorObject
}

export type ColorShades = {
  [Color.Primary]: Shades
  [Color.Secondary]: Shades
  [Color.Tertiary]: Shades
  [Color.Dark]: Shades
  [Color.Neutral]: Shades
  [Color.Light]: Shades
  [Color.Success]: Shades
  [Color.Info]: Shades
  [Color.Warning]: Shades
  [Color.Danger]: Shades
}

const makeDarkShades = (colorValue: string, shaders: Shaders): Shades => {
  const { lightest: lightestShade } = shaders
  const base = new ColorObject(colorValue)
  const diff = lightestShade / 4
  return {
    [Shade.Darker]: base,
    [Shade.Dark]: base.lightness(lightestShade - diff * 3),
    [Shade.Base]: base.lightness(lightestShade - diff * 2),
    [Shade.Light]: base.lightness(lightestShade - diff),
    [Shade.Lighter]: base.lightness(lightestShade),
  }
}

const makeLightShades = (colorValue: string, shaders: Shaders): Shades => {
  const { darkest: darkestShade } = shaders
  const base = new ColorObject(colorValue)
  const diff = (100 - darkestShade) / 4
  return {
    [Shade.Darker]: base.lightness(darkestShade),
    [Shade.Dark]: base.lightness(darkestShade + diff),
    [Shade.Base]: base.lightness(darkestShade + diff * 2),
    [Shade.Light]: base.lightness(darkestShade + diff * 3),
    [Shade.Lighter]: base,
  }
}

const makeShades = (colorValue: string, shaders: Shaders): Shades => {
  const base = new ColorObject(colorValue)

  const luminosity = base.luminosity()
  if (luminosity > 0.8) {
    return makeLightShades(colorValue, shaders)
  }
  if (luminosity < 0.001) {
    return makeDarkShades(colorValue, shaders)
  }

  const { dark: darkShade, light: lightShade } = shaders
  return {
    base,
    [Shade.Dark]: base.darken(darkShade.min),
    [Shade.Darker]: base.darken(darkShade.max),
    [Shade.Light]: base.lighten(lightShade.min),
    [Shade.Lighter]: base.lighten(lightShade.max),
  }
}

export const makeColorShades = (config?: Partial<Config>): ColorShades => {
  const { pallet, shaders } = mergeConfig<Config>(defaultConfig, config)
  return {
    [Color.Primary]: makeShades(pallet.primary, shaders),
    [Color.Secondary]: makeShades(pallet.secondary, shaders),
    [Color.Tertiary]: makeShades(pallet.tertiary, shaders),
    [Color.Dark]: makeDarkShades(pallet.dark, shaders),
    [Color.Neutral]: makeShades(pallet.neutral, shaders),
    [Color.Light]: makeLightShades(pallet.light, shaders),
    [Color.Success]: makeShades(pallet.success, shaders),
    [Color.Info]: makeShades(pallet.info, shaders),
    [Color.Warning]: makeShades(pallet.warning, shaders),
    [Color.Danger]: makeShades(pallet.danger, shaders),
  }
}
