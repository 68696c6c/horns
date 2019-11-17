/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import { palletColors } from './color-pallet'
import { safeGetValue } from './utils'

const defaultInteractiveColors = {
  base: 'copy',
  hover: 'secondary',
  active: 'primary',
}

const makeConfig = color => {
  return {
    color: color.base,
    hover: {
      color: color.hover,
    },
    active: {
      color: color.active,
    },
  }
}

class ColorsTextInteractiveConfig {
  constructor(colorsConfig, config = {}) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('ColorsTextInteractiveConfig: invalid ColorsConfig')
    }
    const swatches = colorsConfig.swatches

    let hShade = 'dark'
    let aShade = 'darker'
    if (colorsConfig.darkMode()) {
      hShade = 'light'
      aShade = 'lighter'
    }
    this.colorways = {}
    palletColors.forEach(palletColor => {
      const color = {
        base: swatches[palletColor].base.base,
        hover: swatches[palletColor][hShade].base,
        active: swatches[palletColor][aShade].base,
      }
      this.colorways[palletColor] = makeConfig(color)
    })

    // Default interactive text colors.
    let color = colorsConfig.copy.primary
    let hColor = colorsConfig.hover
    let aColor = colorsConfig.active
    const configColors = safeGetValue(config, 'colors', {})

    const configColor = safeGetValue(configColors, 'base', '')
    if (configColor) {
      color = colorsConfig.getSwatch(configColor)
    }

    const configHColor = safeGetValue(configColors, 'hover', '')
    if (configHColor) {
      hColor = colorsConfig.getSwatch(configHColor)
    }

    const configAColor = safeGetValue(configColors, 'active', '')
    if (configAColor) {
      aColor = colorsConfig.getSwatch(configAColor)
    }
    this.colorways.copy = {
      base: color,
      hover: {
        color: hColor,
      },
      active: {
        color: aColor,
      },
    }

    console.log('ColorsTextInteractiveConfig', this)
  }

  getColorway(colorway) {
    if (!colorway) {
      return this.colorways.copy
    }
    return this.colorways[colorway]
  }
}

export default ColorsTextInteractiveConfig
