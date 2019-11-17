/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import { palletColors } from './color-pallet'

const makeConfig = (color, bg, border) => {
  return {
    background: bg.base,
    color: color.base,
    border: border.base,
    decoration: 'none',
    hover: {
      background: bg.hover,
      color: color.hover,
      border: border.hover,
      decoration: 'none',
    },
    active: {
      background: bg.active,
      color: color.active,
      border: border.active,
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

    let bShade = 'dark'
    let bhShade = 'darker'
    let baShade = 'base'
    let hShade = 'dark'
    let aShade = 'darker'
    if (colorsConfig.darkMode()) {
      bShade = 'light'
      bhShade = 'lighter'
      baShade = 'base'
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
      const border = {
        base: swatches[palletColor][bShade].base,
        hover: swatches[palletColor][bhShade].base,
        active: swatches[palletColor][baShade].base,
      }
      this.colorways[palletColor] = makeConfig(color, bg, border)
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
