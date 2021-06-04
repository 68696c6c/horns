import Color from 'color'

import { Config, Shaders } from './config'
import { Colorway } from './types'

enum Shade {
  Darker = 'darker',
  Dark = 'dark',
  Base = 'base',
  Light = 'light',
  Lighter = 'lighter',
}

export type Shades = {
  [key in Shade]: Color
}

export type ColorShades = {
  [Colorway.Primary]: Shades
  [Colorway.Secondary]: Shades
  [Colorway.Tertiary]: Shades
  [Colorway.Dark]: Shades
  [Colorway.Neutral]: Shades
  [Colorway.Light]: Shades
  [Colorway.Success]: Shades
  [Colorway.Info]: Shades
  [Colorway.Warning]: Shades
  [Colorway.Danger]: Shades
  [Colorway.Prominent]: Shades
  [Colorway.Selected]: Shades
}

const makeDarkShades = (colorValue: string, shaders: Shaders): Shades => {
  const { lightest: lightestShade } = shaders
  const base = Color(colorValue)
  const diff = lightestShade / 4
  return {
    darker: base,
    dark: base.lightness(lightestShade - diff * 3),
    base: base.lightness(lightestShade - diff * 2),
    light: base.lightness(lightestShade - diff),
    lighter: base.lightness(lightestShade),
  }
}

const makeLightShades = (colorValue: string, shaders: Shaders): Shades => {
  const { darkest: darkestShade } = shaders
  const base = Color(colorValue)
  const diff = (100 - darkestShade) / 4
  return {
    darker: base.lightness(darkestShade),
    dark: base.lightness(darkestShade + diff),
    base: base.lightness(darkestShade + diff * 2),
    light: base.lightness(darkestShade + diff * 3),
    lighter: base,
  }
}

export const makeShades = (colorValue: string, shaders: Shaders): Shades => {
  const base = Color(colorValue)

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
    dark: base.darken(darkShade.min),
    darker: base.darken(darkShade.max),
    light: base.lighten(lightShade.min),
    lighter: base.lighten(lightShade.max),
  }
}

export const makeColorShades = (config: Config): ColorShades => {
  const { pallet, shaders } = config
  const primary = makeShades(pallet.primary, shaders)
  const secondary = makeShades(pallet.secondary, shaders)
  const tertiary = makeShades(pallet.tertiary, shaders)
  let prominent
  switch (config.prominent) {
    default:
      prominent = primary
      break
    case Colorway.Secondary:
      prominent = secondary
      break
    case Colorway.Tertiary:
      prominent = tertiary
      break
  }
  let selected
  switch (config.selected) {
    default:
      selected = primary
      break
    case Colorway.Secondary:
      selected = secondary
      break
    case Colorway.Tertiary:
      selected = tertiary
      break
  }
  return {
    primary,
    secondary,
    tertiary,
    dark: makeDarkShades(pallet.dark, shaders),
    neutral: makeShades(pallet.neutral, shaders),
    light: makeLightShades(pallet.light, shaders),
    success: makeShades(pallet.success, shaders),
    info: makeShades(pallet.info, shaders),
    warning: makeShades(pallet.warning, shaders),
    danger: makeShades(pallet.danger, shaders),
    prominent,
    selected,
  }
}
