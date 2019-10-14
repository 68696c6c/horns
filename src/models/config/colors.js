import ColorFactors from './color-factors'
import ColorPallet from './color-pallet'
import { MODE_DEFAULT, safeGetValue, getModeColors, getShadedColorPallet, getColorSwatches } from './utils'

class ColorsConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    this.mode = safeGetValue(config, 'mode', MODE_DEFAULT)

    const pallet = safeGetValue(config, 'pallet', new ColorPallet())
    const factors = safeGetValue(config, 'factors', new ColorFactors())

    const shaded = getShadedColorPallet(pallet, factors)
    const { background, copy } = getModeColors(this.mode, shaded.dark, shaded.light)

    this.swatches = getColorSwatches(shaded, copy)
    this.background = background
    this.copy = copy

    console.log('colors config', this)
  }
}

export default ColorsConfig
