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

const makeNavItem = (padding, lineSize, lineColor) => {
  return {
    padding,
    lineSize,
    lineColor,
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
    // @TODO add support for different effects for the current link
    // const currentEffect = safeGetValue(configCurrent, 'effect', defaultNavItems.current.effect)
    const lineColor = safeGetValue(configCurrent, 'lineColor', defaultNavItems.current.lineColor)
    const configLineSize = safeGetValue(configCurrent, 'lineSize', defaultNavItems.current.lineSize)
    const lineSize = spacingConfig.getSpacing(configLineSize)

    this.inline = makeNavItem(padding, lineSize, colorsConfig.getSwatch(lineColor))
    this.stacked = makeNavItem(padding, lineSize, colorsConfig.getSwatch(lineColor))

    console.log('NavItemsConfig', this)
  }
}

export default NavItemsConfig
