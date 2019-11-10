/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import RadiusConfig from './radius'
import SpacingConfig from './spacing'
import TypographyConfig from './typography'
import { palletColors } from './color-pallet'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultButtons = {
  spacingX: 'medium',
  spacingY: 'small',
  fontWeight: 'bold',
}

const makeButton = (color, bg, padding, fontWeight, radius) => {
  return {
    background: bg.base,
    color: color.base,
    radius,
    padding,
    fontWeight,
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

class ButtonsConfig {
  constructor(
    colorsConfig,
    spacingConfig,
    radiusConfig,
    typographyConfig,
    config = {}
  ) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('ButtonsConfig: invalid ColorsConfig')
    }
    const swatches = colorsConfig.swatches

    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('ButtonsConfig: invalid SpacingConfig')
    }
    const configY = safeGetValue(config, 'spacingY', defaultButtons.spacingY)
    const paddingY = spacingConfig.getSpacing(configY)
    const configX = safeGetValue(config, 'spacingX', defaultButtons.spacingY)
    const paddingX = spacingConfig.getSpacing(configX)
    const padding = `${paddingY} ${paddingX}`

    if (!(radiusConfig instanceof RadiusConfig)) {
      throw new Error('ButtonsConfig: invalid RadiusConfig')
    }
    const radius = radiusConfig.getRadius()

    if (!(typographyConfig instanceof TypographyConfig)) {
      throw new Error('ButtonsConfig: invalid TypographyConfig')
    }
    const configWeight = safeGetValue(
      config,
      'fontWeight',
      defaultButtons.fontWeight
    )
    const weight = typographyConfig.getWeight(configWeight)

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
        base: swatches[palletColor].base.readable,
        hover: swatches[palletColor][hShade].readable,
        active: swatches[palletColor][aShade].readable,
      }
      this.colorways[palletColor] = makeButton(
        color,
        bg,
        padding,
        weight,
        radius
      )
    })

    console.log('ButtonsConfig', this)
  }
}

export default ButtonsConfig
