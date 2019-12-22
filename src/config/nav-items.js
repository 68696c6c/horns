/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import SpacingConfig, { spacingSizes } from './spacing'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultNavItems = {
  spacing: 'small',
  current: {
    effect: 'line',
    background: 'inherit',
    color: 'inherit',
    lineSize: 'tiny',
    lineColor: 'primary',
  },
}

const makeNavItem = (padding, border, currentBorder) => {
  return {
    padding,
    border,
    current: {
      border: currentBorder,
    },
  }
}

class NavItemsConfig {
  constructor(colorsConfig, spacingConfig, config = {}) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('NavItemsConfig: invalid ColorsConfig')
    }

    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('NavItemsConfig: invalid SpacingConfig')
    }

    let spacing = safeGetValue(config, 'spacing', defaultNavItems.spacing)
    if (!spacingSizes.includes(spacing)) {
      spacing = defaultNavItems.spacing
    }
    const padding = spacingConfig.getSpacing(spacing)

    const configCurrent = safeGetValue(config, 'current', defaultNavItems.current)
    const currentEffect = safeGetValue(configCurrent, 'effect', defaultNavItems.current.effect)
    const lineColor = safeGetValue(configCurrent, 'lineColor', defaultNavItems.current.lineColor)
    const configLineSize = safeGetValue(configCurrent, 'lineSize', defaultNavItems.current.lineSize)
    const lineSize = spacingConfig.getSpacing(configLineSize)

    let inlinePadding = ''
    let inlineBorder = ''
    let stackedPadding = ''
    let stackedBorder = ''
    let currentBorder = ''
    switch (currentEffect) {
      case 'line':
        inlinePadding = `${padding} ${padding} calc(${padding} - ${lineSize})`
        inlineBorder = `${lineSize} solid transparent;`
        stackedPadding = `${padding} ${padding} ${padding} calc(${padding} - ${lineSize})`
        stackedBorder = `${lineSize} solid transparent;`
        currentBorder = `${lineSize} solid ${colorsConfig.getSwatch(lineColor)};`
        break
      case 'highlight':
        break
      default:
        break
    }

    this.inline = makeNavItem(inlinePadding, inlineBorder, currentBorder)
    this.stacked = makeNavItem(stackedPadding, stackedBorder, currentBorder)

    console.log('NavItemsConfig', this)
  }
}

export default NavItemsConfig
