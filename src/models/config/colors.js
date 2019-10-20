import ColorFactors from './color-factors'
import ColorPallet from './color-pallet'
import {
  MODE_DEFAULT,
  MODE_DARK,
  MODE_LIGHT,
  safeGetValue,
  getModeColors,
  getShadedColorPallet,
  getColorSwatches,
  getColorSwatch,
} from './utils'

class ColorsConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    this.mode = safeGetValue(config, 'mode', MODE_DEFAULT)

    const pallet = safeGetValue(config, 'pallet', new ColorPallet())
    const factors = safeGetValue(config, 'factors', new ColorFactors())
    const hover = safeGetValue(config, 'hover', 'primary')
    const active = safeGetValue(config, 'active', 'secondary')
    const disabled = safeGetValue(config, 'disabled', 'neutral')

    const shaded = getShadedColorPallet(pallet, factors)
    const { background, copy } = getModeColors(this.mode, shaded.dark, shaded.neutral, shaded.light)

    this.swatches = getColorSwatches(shaded, copy)
    this.background = background
    this.copy = copy
    this.hover = getColorSwatch(this.swatches, hover)
    this.active = getColorSwatch(this.swatches, active)
    this.disabled = getColorSwatch(this.swatches, disabled)

    console.log('ColorsConfig', this)
  }

  darkMode() {
    return this.mode === MODE_DARK
  }

  lightMode() {
    return this.mode === MODE_LIGHT
  }
}

export default ColorsConfig
