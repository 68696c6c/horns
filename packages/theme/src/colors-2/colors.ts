import { Colorways, makeColorways } from './colorways'
import { Color, Swatches } from './types'
import { Config } from './config'
import { ColorShades } from './shades'

export type Colors = {
  [key in Color]: Swatches
}

export const makeColors = (
  config: Config,
  shades: ColorShades,
): {
  colors: Colors
  colorways: Colorways
} => {
  const colorways = makeColorways(config, shades)
  return {
    colors: {
      primary: colorways.primary.base,
      secondary: colorways.secondary.base,
      tertiary: colorways.tertiary.base,
      prominent: colorways.prominent.base,
      selected: colorways.selected.base,
      action: colorways.action.base,
      success: colorways.success.base,
      info: colorways.info.base,
      warning: colorways.warning.base,
      danger: colorways.danger.base,
      dark: colorways.dark.base,
      neutral: colorways.neutral.base,
      light: colorways.light.base,
      background: colorways.background.base,
      backgroundAlt: colorways.backgroundAlt.base,
      typography: colorways.typography.base,
    },
    colorways,
  }
}
