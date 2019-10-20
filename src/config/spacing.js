/* eslint-disable prefer-destructuring */
import TypographyConfig from './typography'
import { valueToInt } from '../utils/utils'
import { safeGetValue } from './utils'

const pxToEM = (base, px) => `${valueToInt(px) / valueToInt(base)}em`
const emToPX = (base, em) => `${valueToInt(em) / valueToInt(base)}px`

// @TODO get default values from a config file.
// To work correctly, these ratios need to be maintained exactly, e.g. xxSmall must be 2x tiny etc.
const defaultSpacing = {
  none: {
    em: '0',
    px: '0',
  },
  tiny: {
    em: '0.143',
    px: '2px',
  },
  xxSmall: {
    em: '0.286em',
    px: '4px',
  },
  xSmall: {
    em: '0.571em',
    px: '8px',
  },
  small: {
    em: '0.857em',
    px: '12px',
  },
  medium: {
    em: '1.142em',
    px: '16px',
  },
  large: {
    em: '1.429em',
    px: '20px',
  },
  xLarge: {
    em: '2.286em',
    px: '32px',
  },
}

export const spacingSizes = [
  'none',
  'tiny',
  'xxSmall',
  'xSmall',
  'small',
  'medium',
  'large',
  'xLarge',
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
        em = def.em
        px = def.px
      }
      this[size] = { em, px }
    })

    console.log('SpacingConfig', this)
  }

  getSpacing(size) {
    if (this[size]) {
      return this[size].px
    }
    return 'auto'
  }
}

export default SpacingConfig
