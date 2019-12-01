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
  elements: false,
  inputs: true,
}

class BordersConfig {
  constructor(spacingConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('BordersConfig: invalid SpacingConfig')
    }
    const configWidth = safeGetValue(config, 'width', defaultBorders.width)
    this.width = spacingConfig.getSpacing(configWidth)
    this.style = safeGetValue(config, 'style', defaultBorders.style)
    this.elements = safeGetValue(config, 'elements', defaultBorders.elements)
    this.inputs = safeGetValue(config, 'inputs', defaultBorders.inputs)

    console.log('BordersConfig', this)
  }
}

export default BordersConfig
