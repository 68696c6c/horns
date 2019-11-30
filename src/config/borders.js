import SpacingConfig from './spacing'
import { safeGetValue } from './utils'

export const borderStyles = [
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'none',
  'hidden',
]

// @TODO get default values from a config file.
const defaultBorders = {
  width: 'tiny',
  style: 'solid',
}

class BordersConfig {
  constructor(spacingConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('BordersConfig: invalid SpacingConfig')
    }
    const configWidth = safeGetValue(config, 'width', defaultBorders.width)
    const configStyle = safeGetValue(config, 'style', defaultBorders.style)

    this.width = spacingConfig.getSpacing(configWidth)
    this.style = configStyle

    console.log('BordersConfig', this)
  }
}

export default BordersConfig
