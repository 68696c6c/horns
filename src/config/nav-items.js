/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import SpacingConfig, { spacingSizes } from './spacing'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultNavItems = {
  spacing: 'tiny',
  background: 'inherit',
  color: 'inherit',
  decoration: 'none',
  hover: {
    background: 'inherit',
    color: 'inherit',
    decoration: 'none',
  },
  active: {
    background: 'inherit',
    color: 'inherit',
    decoration: 'none',
  },
  current: {
    effect: 'line',
    background: 'inherit',
    color: 'inherit',
    decoration: 'none',
    lineSize: 'tiny',
    lineColor: 'primary',
  },
}

const getConfigState = (colorsConfig, config, state = 'base') => {
  let color
  let background
  let decoration
  if (!['hover', 'active'].includes(state)) {
    const stateColor = safeGetValue(config, 'color', defaultNavItems.color)
    color = colorsConfig.getSwatch(stateColor)
    const stateBG = safeGetValue(config, 'background', defaultNavItems.background)
    background = colorsConfig.getSwatch(stateBG)
    decoration = safeGetValue(config, 'decoration', defaultNavItems.decoration)
  } else {
    const stateConfig = safeGetValue(config, state, defaultNavItems[state])
    const stateColor = safeGetValue(stateConfig, 'color', defaultNavItems[state].color)
    color = colorsConfig.getSwatch(stateColor)
    const stateBG = safeGetValue(stateConfig, 'background', defaultNavItems[state].background)
    background = colorsConfig.getSwatch(stateBG)
    decoration = safeGetValue(stateConfig, 'decoration', defaultNavItems[state].decoration)
  }
  return { color, background, decoration }
}

const makeNavItem = (base, padding, border, currentBorder) => {
  return {
    color: base.color,
    background: base.background,
    decoration: base.decoration,
    padding,
    border,
    hover: base.hover,
    active: base.active,
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

    const { color, background, decoration } = getConfigState(colorsConfig, config)
    const { color: hColor, background: hBG, decoration: hDecoration } = getConfigState(colorsConfig, config, 'hover')
    const { color: aColor, background: aBG, decoration: aDecoration } = getConfigState(colorsConfig, config, 'active')
    const base = {
      color,
      background,
      decoration,
      hover: {
        color: hColor,
        background: hBG,
        decoration: hDecoration,
      },
      active: {
        color: aColor,
        background: aBG,
        decoration: aDecoration,
      },
    }

    const configCurrent = safeGetValue(config, 'current', defaultNavItems.current)
    const currentEffect = safeGetValue(configCurrent, 'effect', defaultNavItems.current.effect)
    const lineSize = safeGetValue(configCurrent, 'lineSize', defaultNavItems.current.lineSize)
    const lineColor = safeGetValue(configCurrent, 'lineColor', defaultNavItems.current.lineColor)

    let inlinePadding = ''
    let inlineBorder = ''
    let stackedPadding = ''
    let stackedBorder = ''
    let currentBorder = ''
    switch (currentEffect) {
      case 'underline':
        inlinePadding = `${padding} ${padding} calc(${padding} - ${lineSize})`
        inlineBorder = `border-bottom: ${lineSize} solid transparent;`
        stackedPadding = `${padding} ${padding} ${padding} calc(${padding} - ${lineSize})`
        stackedBorder = `border-left: ${lineSize} solid transparent;`
        currentBorder = `border-color: ${colorsConfig.getSwatch(lineColor)};`
        break
      case 'highlight':
        break
      default:
        break
    }

    this.inline = makeNavItem(base, inlinePadding, inlineBorder, currentBorder)
    this.stacked = makeNavItem(base, stackedPadding, stackedBorder, currentBorder)

    console.log('NavItemsConfig', this)
  }
}

export default NavItemsConfig
