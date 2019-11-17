/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import { palletColors } from './color-pallet'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultButtons = {
  spacingX: 'medium',
  spacingY: 'small',
  fontWeight: 'bold',
}

const makeConfig = (color, bg) => {
  return {
    background: bg.base,
    color: color.base,
    border: 'none',
    decoration: 'none',
    hover: {
      background: bg.hover,
      color: color.hover,
      border: 'none',
      decoration: 'none',
    },
    active: {
      background: bg.active,
      color: color.active,
      border: 'none',
      decoration: 'none',
    },
  }
}

class ColorsInteractiveConfig {
  constructor(colorsConfig, config = {}) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('ColorsInteractiveConfig: invalid ColorsConfig')
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
        base: swatches[palletColor].base.readable,
        hover: swatches[palletColor][hShade].readable,
        active: swatches[palletColor][aShade].readable,
      }
      const bg = {
        base: swatches[palletColor].base.base,
        hover: swatches[palletColor][hShade].base,
        active: swatches[palletColor][aShade].base,
      }
      this.colorways[palletColor] = makeConfig(color, bg)
    })

    console.log('ColorsInteractiveConfig', this)
  }

  getColorway(colorway) {
    if (!colorway) {
      return this.colorways.neutral
    }
    return this.colorways[colorway]
  }
}

export default ColorsInteractiveConfig
