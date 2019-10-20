/* eslint-disable prefer-destructuring */
import { valueToInt } from '../../themes'
import { safeGetValue } from './utils'

const pxToEM = (base, px) => `${valueToInt(px) / valueToInt(base)}em`
const emToPX = (base, em) => `${valueToInt(em) / valueToInt(base)}px`

// @TODO get default values from a config file.
const defaultSpacing = {
  none: '0',
  tiny: {
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

const getSpacingConfig = (baseFontSize, config = {}) => {
  if (!baseFontSize) {
    // eslint-disable-next-line no-console
    console.warn(
      'getSpacingConfig: missing baseFontSize, using default spacing values'
    )
    return defaultSpacing
  }
  const cs = safeGetValue(config, 'spacing', {})
  const result = {
    none: safeGetValue(cs, 'none', defaultSpacing.none),
  }
  const sizes = ['tiny', 'xSmall', 'small', 'medium', 'large', 'xLarge']
  sizes.forEach(size => {
    const configValue = safeGetValue(cs, size, '')
    let em
    let px
    if (configValue.includes('px')) {
      em = pxToEM(baseFontSize, configValue)
      px = configValue
    } else if (configValue.includes('em')) {
      em = configValue
      px = emToPX(baseFontSize, configValue)
    } else {
      const def = safeGetValue(cs, size, defaultSpacing[size])
      em = def.em
      px = def.px
    }
    result[size] = { em, px }
  })

  console.log('spacing config', this)
  return result
}

export default getSpacingConfig
