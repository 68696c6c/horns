/* eslint-disable prefer-destructuring */
import TypographyConfig from './typography'
import { valueToInt } from '../utils/utils'
import { safeGetValue } from './utils'

const pxToEM = (base, px) => `${valueToInt(px) / valueToInt(base)}em`
const emToPX = (base, em) => `${valueToInt(em) / valueToInt(base)}px`

// @TODO get default values from a config file.
// To work correctly, these ratios need to be maintained exactly, e.g. xxSmall must be 2x tiny etc.

const defaultSpacing = {
  min: '0',
  tiny: '2px',
  xxSmall: '4px',
  xSmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '48px',
  giant: '64px',
  max: '88px',
}

export const spacingSizes = [
  'min',
  'tiny',
  'xxSmall',
  'xSmall',
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge',
  'giant',
  'max',
]

class SpacingConfig {
  constructor(typographyConfig, config = {}) {
    if (!(typographyConfig instanceof TypographyConfig)) {
      throw new Error('SpacingConfig: invalid TypographyConfig')
    }
    const baseFontSize = typographyConfig.sizes.base

    spacingSizes.forEach(size => {
      const configValue = safeGetValue(config, size, '')
      let em
      let px
      if (configValue.includes('px')) {
        em = pxToEM(baseFontSize, configValue)
        px = configValue
      } else if (configValue.includes('em')) {
        em = configValue
        px = emToPX(baseFontSize, configValue)
      } else {
        const def = safeGetValue(config, size, defaultSpacing[size])
        em = pxToEM(baseFontSize, def)
        px = def
      }
      this[size] = { em, px }
    })

    console.log('SpacingConfig', this)
  }

  getSpacing(size) {
    if (this[size]) {
      return this[size].px
    }
    return ''
  }
}

export default SpacingConfig
