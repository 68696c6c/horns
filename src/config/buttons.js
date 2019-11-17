import SpacingConfig from './spacing'
import TypographyConfig from './typography'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultButtons = {
  spacingX: 'medium',
  spacingY: 'small',
  fontWeight: 'bold',
}

class ButtonsConfig {
  constructor(spacingConfig, radiusConfig, typographyConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('ButtonsConfig: invalid SpacingConfig')
    }
    const configY = safeGetValue(config, 'spacingY', defaultButtons.spacingY)
    const paddingY = spacingConfig.getSpacing(configY)
    const configX = safeGetValue(config, 'spacingX', defaultButtons.spacingY)
    const paddingX = spacingConfig.getSpacing(configX)
    const padding = `${paddingY} ${paddingX}`

    if (!(typographyConfig instanceof TypographyConfig)) {
      throw new Error('ButtonsConfig: invalid TypographyConfig')
    }
    const configWeight = safeGetValue(
      config,
      'fontWeight',
      defaultButtons.fontWeight
    )
    const weight = typographyConfig.getWeight(configWeight)

    this.padding = padding
    this.fontWeight = weight

    console.log('ButtonsConfig', this)
  }
}

export default ButtonsConfig
