import { mergeConfig } from '../utils'

import {
  ColorwayStates,
  makeBgPrimaryColorway,
  makeColorway,
  makeDarkColorway,
  makeLightColorway,
  makeBgSecondaryColorway,
  makeBgInverseColorway,
} from './colorways'
import { defaultConfig, Config } from './config'
import { makeColorShades } from './shades'
import { BaseBrandColor, BaseColor, Color, Mode } from './types'
import DeepPartial from '../utils/deep-partial'

export type BrandColorways = {
  [key in BaseBrandColor]: ColorwayStates
}

export const determineBrandColorway = (
  input: BaseColor,
  { primary, secondary, tertiary }: BrandColorways,
): ColorwayStates => {
  switch (input) {
    default:
      return primary
    case Color.Secondary:
      return secondary
    case Color.Tertiary:
      return tertiary
  }
}

export type Colors = Required<
  {
    [key in Color]: ColorwayStates
  }
>

export const makeColors = (config?: DeepPartial<Config>): Colors => {
  const mergedConfig = mergeConfig<Config>(defaultConfig, config)
  const shades = makeColorShades(mergedConfig)
  const isDark = mergedConfig.mode === Mode.Dark
  const brandColorways: BrandColorways = {
    [Color.Primary]: makeColorway(shades.primary, isDark),
    [Color.Secondary]: makeColorway(shades.secondary, isDark),
    [Color.Tertiary]: makeColorway(shades.tertiary, isDark),
  }
  return {
    ...brandColorways,
    [Color.Action]: determineBrandColorway(mergedConfig.action, brandColorways),
    [Color.Prominent]: determineBrandColorway(
      mergedConfig.prominent,
      brandColorways,
    ),
    [Color.Selected]: determineBrandColorway(
      mergedConfig.selected,
      brandColorways,
    ),
    [Color.Success]: makeColorway(shades.success, isDark),
    [Color.Info]: makeColorway(shades.info, isDark),
    [Color.Warning]: makeColorway(shades.warning, isDark),
    [Color.Danger]: makeColorway(shades.danger, isDark),
    [Color.Dark]: makeDarkColorway(shades.dark),
    [Color.Neutral]: makeColorway(shades.neutral, isDark),
    [Color.Light]: makeLightColorway(shades.light),
    [Color.BgPrimary]: makeBgPrimaryColorway(shades, isDark),
    [Color.BgSecondary]: makeBgSecondaryColorway(shades, isDark),
    [Color.BgInverse]: makeBgInverseColorway(shades, isDark),
  }
}
