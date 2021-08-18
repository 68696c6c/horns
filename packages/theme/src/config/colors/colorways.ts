import ColorObject from 'color'

import { HoverState, UIState } from '../../utils'

import { colorPallet } from './pallet'
import { ColorShades, Shades } from './shades'
import { Swatches } from './types'

export type ColorwayStates = {
  [key in HoverState | UIState.Inactive]: Swatches
}

const getColorValue = (c: ColorObject): string => c.rgb().string()

const makeColorSwatches = (base: ColorObject, alt: ColorObject): Swatches => {
  const readable = base.isDark() ? colorPallet.white : colorPallet.black
  return {
    base: getColorValue(base),
    readable: getColorValue(readable),
    alt: getColorValue(alt),
  }
}

type BaseColorwayStates = {
  [key in HoverState]: {
    base: ColorObject
    alt: ColorObject
  }
}

const makeColorwayStates = (baseStates: BaseColorwayStates): ColorwayStates => {
  const { base, hover, active } = baseStates
  const inactive = {
    base: base.base.mix(colorPallet.gray, 0.5),
    alt: base.base.mix(colorPallet.gray, 0.7),
  }
  return {
    base: makeColorSwatches(base.base, base.alt),
    hover: makeColorSwatches(hover.base, hover.alt),
    active: makeColorSwatches(active.base, active.alt),
    inactive: makeColorSwatches(inactive.base, inactive.alt),
  }
}

export const makeColorway = (
  shades: Shades,
  isDark: boolean,
): ColorwayStates => {
  const { base, dark, darker, light, lighter } = shades
  const baseStates = isDark
    ? {
        base: { base, alt: light },
        hover: { base: light, alt: base },
        active: { base: lighter, alt: light },
      }
    : {
        base: { base, alt: dark },
        hover: { base: dark, alt: base },
        active: { base: darker, alt: dark },
      }
  return makeColorwayStates(baseStates)
}

export const makeDarkColorway = (shades: Shades): ColorwayStates => {
  const { base, light, lighter } = shades
  return makeColorwayStates({
    base: { base, alt: lighter },
    hover: { base: light, alt: lighter },
    active: { base: lighter, alt: light },
  })
}

export const makeLightColorway = (shades: Shades): ColorwayStates => {
  const { base, dark, darker } = shades
  return makeColorwayStates({
    base: { base, alt: darker },
    hover: { base: dark, alt: darker },
    active: { base: darker, alt: dark },
  })
}

export const makeBgPrimaryColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { base, dark, darker, lighter } = colorShades.dark
    return makeColorwayStates({
      base: { base: darker, alt: lighter },
      hover: { base: dark, alt: lighter },
      active: { base, alt: lighter },
    })
  }
  const { base, darker, light, lighter } = colorShades.light
  return makeColorwayStates({
    base: { base: lighter, alt: darker },
    hover: { base: light, alt: darker },
    active: { base, alt: darker },
  })
}

export const makeBgSecondaryColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { base, dark, light, lighter } = colorShades.dark
    return makeColorwayStates({
      base: { base: dark, alt: base },
      hover: { base, alt: light },
      active: { base: light, alt: lighter },
    })
  }
  const { base, dark, darker, light } = colorShades.light
  return makeColorwayStates({
    base: { base: light, alt: base },
    hover: { base, alt: dark },
    active: { base: dark, alt: darker },
  })
}

export const makeBgInverseColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): ColorwayStates => {
  if (isDark) {
    const { lighter } = colorShades.light
    return makeColorwayStates({
      base: { base: lighter, alt: lighter },
      hover: { base: lighter, alt: lighter },
      active: { base: lighter, alt: lighter },
    })
  }
  const { darker } = colorShades.dark
  return makeColorwayStates({
    base: { base: darker, alt: darker },
    hover: { base: darker, alt: darker },
    active: { base: darker, alt: darker },
  })
}
