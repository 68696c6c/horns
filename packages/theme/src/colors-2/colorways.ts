import ColorObject from 'color'

import { HoverState, StatusState } from '../utils'

import { Config } from './config'
import { colorPallet } from './pallet'
import { ColorShades, Shades } from './shades'
import { BaseColor, Color, Mode, Swatches } from './types'

export type States = {
  [key in HoverState | StatusState.Inactive]: Swatches
}

export type Colorways = {
  [key in Color]: States
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

const makeColorStates = (baseStates: BaseColorwayStates): States => {
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

const makeColorway = (shades: Shades, isDark: boolean): States => {
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
  return makeColorStates(baseStates)
}

const makeDarkColorway = (shades: Shades): States => {
  const { base, light, lighter } = shades
  return makeColorStates({
    base: { base, alt: lighter },
    hover: { base: light, alt: lighter },
    active: { base: lighter, alt: light },
  })
}

const makeLightColorway = (shades: Shades): States => {
  const { base, dark, darker } = shades
  return makeColorStates({
    base: { base, alt: darker },
    hover: { base: dark, alt: darker },
    active: { base: darker, alt: dark },
  })
}

export const makeBgPrimaryColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): States => {
  if (isDark) {
    const { base, dark, darker, lighter } = colorShades.dark
    return makeColorStates({
      base: { base: darker, alt: lighter },
      hover: { base: dark, alt: lighter },
      active: { base, alt: lighter },
    })
  }
  const { base, darker, light, lighter } = colorShades.light
  return makeColorStates({
    base: { base: lighter, alt: darker },
    hover: { base: light, alt: darker },
    active: { base, alt: darker },
  })
}

const makeBgSecondaryColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): States => {
  if (isDark) {
    const { base, dark, light, lighter } = colorShades.dark
    return makeColorStates({
      base: { base: dark, alt: base },
      hover: { base, alt: light },
      active: { base: light, alt: lighter },
    })
  }
  const { base, dark, darker, light } = colorShades.light
  return makeColorStates({
    base: { base: light, alt: base },
    hover: { base, alt: dark },
    active: { base: dark, alt: darker },
  })
}

const makeTypographyColorway = (
  colorShades: ColorShades,
  isDark: boolean,
): States => {
  if (isDark) {
    const { lighter } = colorShades.light
    return makeColorStates({
      base: { base: lighter, alt: lighter },
      hover: { base: lighter, alt: lighter },
      active: { base: lighter, alt: lighter },
    })
  }
  const { darker } = colorShades.dark
  return makeColorStates({
    base: { base: darker, alt: darker },
    hover: { base: darker, alt: darker },
    active: { base: darker, alt: darker },
  })
}

type BrandColorways = {
  [Color.Primary]: States
  [Color.Secondary]: States
  [Color.Tertiary]: States
}

const determineBrandColorway = (
  input: BaseColor,
  { primary, secondary, tertiary }: BrandColorways,
): States => {
  switch (input) {
    default:
      return primary
    case Color.Secondary:
      return secondary
    case Color.Tertiary:
      return tertiary
  }
}

export const makeColorways = (
  config: Config,
  shades: ColorShades,
): Colorways => {
  const isDark = config.mode === Mode.Dark
  const brandColorways: BrandColorways = {
    [Color.Primary]: makeColorway(shades.primary, isDark),
    [Color.Secondary]: makeColorway(shades.secondary, isDark),
    [Color.Tertiary]: makeColorway(shades.tertiary, isDark),
  }
  return {
    ...brandColorways,
    [Color.Action]: determineBrandColorway(config.action, brandColorways),
    [Color.Prominent]: determineBrandColorway(config.action, brandColorways),
    [Color.Selected]: determineBrandColorway(config.selected, brandColorways),
    [Color.Success]: makeColorway(shades.success, isDark),
    [Color.Info]: makeColorway(shades.info, isDark),
    [Color.Warning]: makeColorway(shades.warning, isDark),
    [Color.Danger]: makeColorway(shades.danger, isDark),
    [Color.Dark]: makeDarkColorway(shades.dark),
    [Color.Neutral]: makeColorway(shades.neutral, isDark),
    [Color.Light]: makeLightColorway(shades.light),
    [Color.BgPrimary]: makeBgPrimaryColorway(shades, isDark),
    [Color.BgSecondary]: makeBgSecondaryColorway(shades, isDark),
    [Color.Typography]: makeTypographyColorway(shades, isDark),
  }
}
