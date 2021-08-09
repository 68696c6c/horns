import Color from 'color'

import { colorPallet } from './pallet'
import { ColorShades, Shades } from './shades'

import { HoverState, StatusState } from '../utils'

enum BaseSwatch {
  Base = 'base',
  Border = 'border',
}

enum FinalSwatch {
  Readable = 'readable',
}

type ColorwayStateSwatches = {
  [BaseSwatch.Base]: string
  [BaseSwatch.Border]: string
  [FinalSwatch.Readable]: string
}

export type ColorwayStates = {
  [key in HoverState | StatusState.Inactive]: ColorwayStateSwatches
}

const getColorValue = (c: Color): string => c.rgb().string()

const makeColorwayStateSwatches = (
  base: Color,
  border: Color,
): ColorwayStateSwatches => {
  const readable = base.isDark() ? colorPallet.white : colorPallet.black
  return {
    base: getColorValue(base),
    readable: getColorValue(readable),
    border: getColorValue(border),
  }
}

type BaseColorwayStates = {
  [stateKey in HoverState]: {
    [swatchKey in BaseSwatch]: Color
  }
}

const makeColorwayStates = (baseStates: BaseColorwayStates): ColorwayStates => {
  const { base, hover, active } = baseStates
  const inactive = {
    base: base.base.mix(colorPallet.gray, 0.5),
    border: base.base.mix(colorPallet.gray, 0.7),
  }
  return {
    base: makeColorwayStateSwatches(base.base, base.border),
    hover: makeColorwayStateSwatches(hover.base, hover.border),
    active: makeColorwayStateSwatches(active.base, active.border),
    inactive: makeColorwayStateSwatches(inactive.base, inactive.border),
  }
}

export const makeColorStates = (
  shades: Shades,
  isDark: boolean,
): ColorwayStates => {
  const { base, dark, darker, light, lighter } = shades
  if (isDark) {
    return makeColorwayStates({
      base: { base, border: light },
      hover: { base: light, border: base },
      active: { base: lighter, border: light },
    })
  }
  return makeColorwayStates({
    base: { base, border: dark },
    hover: { base: dark, border: base },
    active: { base: darker, border: dark },
  })
}

export const makeDarkColorStates = (shades: Shades): ColorwayStates => {
  const { base, light, lighter } = shades
  return makeColorwayStates({
    base: { base, border: lighter },
    hover: { base: light, border: lighter },
    active: { base: lighter, border: light },
  })
}

export const makeLightColorStates = (shades: Shades): ColorwayStates => {
  const { base, dark, darker } = shades
  return makeColorwayStates({
    base: { base, border: darker },
    hover: { base: dark, border: darker },
    active: { base: darker, border: dark },
  })
}

export const makeBackgroundColorStates = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { base, dark, darker, lighter } = colorShades.dark
    return makeColorwayStates({
      base: { base: darker, border: lighter },
      hover: { base: dark, border: lighter },
      active: { base, border: lighter },
    })
  }
  const { base, darker, light, lighter } = colorShades.light
  return makeColorwayStates({
    base: { base: lighter, border: darker },
    hover: { base: light, border: darker },
    active: { base, border: darker },
  })
}

export const makeBackgroundAltColorStates = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { base, dark, light, lighter } = colorShades.dark
    return makeColorwayStates({
      base: { base: dark, border: base },
      hover: { base, border: light },
      active: { base: light, border: lighter },
    })
  }
  const { base, dark, darker, light } = colorShades.light
  return makeColorwayStates({
    base: { base: light, border: base },
    hover: { base, border: dark },
    active: { base: dark, border: darker },
  })
}

export const makeTypographyColorStates = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { lighter } = colorShades.light
    return makeColorwayStates({
      base: { base: lighter, border: lighter },
      hover: { base: lighter, border: lighter },
      active: { base: lighter, border: lighter },
    })
  }
  const { darker } = colorShades.dark
  return makeColorwayStates({
    base: { base: darker, border: darker },
    hover: { base: darker, border: darker },
    active: { base: darker, border: darker },
  })
}
