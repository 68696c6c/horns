import SpacingConfig from './spacing'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultButtons = {
  spacingX: 'medium',
  spacingY: 'small',
}

class ButtonsConfig {
  constructor(spacingConfig, radiusConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('ButtonsConfig: invalid SpacingConfig')
    }
    const configY = safeGetValue(config, 'spacingY', defaultButtons.spacingY)
    const paddingY = spacingConfig.getSpacing(configY)

    const configX = safeGetValue(config, 'spacingX', defaultButtons.spacingX)
    const paddingX = spacingConfig.getSpacing(configX)

    this.padding = `${paddingY} ${paddingX}`

    console.log('ButtonsConfig', this)
  }
}

export default ButtonsConfig
