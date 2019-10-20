/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import SpacingConfig, { spacingSizes } from './spacing'
import { getColorSwatch, safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultNavItems = {
  spacing: 'tiny',
  background: 'inherit',
  color: 'inherit',
  hover: {
    background: 'inherit',
    color: 'inherit',
  },
  active: {
    background: 'inherit',
    color: 'inherit',
  },
  current: {
    effect: 'line',
    background: 'inherit',
    color: 'inherit',
    lineSize: 'tiny',
    lineColor: 'primary',
  },
}

const getConfigState = (swatches, config, state = 'base') => {
  let color
  let background
  if (!['hover', 'active'].includes(state)) {
    const stateColor = safeGetValue(config, 'color', defaultNavItems.color)
    color = getColorSwatch(swatches, stateColor)
    const stateBG = safeGetValue(config, 'background', defaultNavItems.background)
    background = getColorSwatch(swatches, stateBG)
  } else {
    const stateConfig = safeGetValue(config, state, defaultNavItems[state])
    const stateColor = safeGetValue(stateConfig, 'color', defaultNavItems[state].color)
    color = getColorSwatch(swatches, stateColor)
    const stateBG = safeGetValue(stateConfig, 'background', defaultNavItems[state].background)
    background = getColorSwatch(swatches, stateBG)
  }
  return { color, background }
}

const makeNavItem = (base, padding, border, currentBorder) => {
  return {
    color: base.color,
    background: base.background,
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
    const swatches = colorsConfig.swatches

    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('NavItemsConfig: invalid SpacingConfig')
    }

    const cn = safeGetValue(config, 'navItems', {})

    let spacing = safeGetValue(cn, 'spacing', defaultNavItems.spacing)
    if (!spacingSizes.includes(spacing)) {
      spacing = defaultNavItems.spacing
    }
    const padding = spacingConfig[spacing].px

    const { color, background } = getConfigState(swatches, cn)
    const { color: hColor, background: hBG } = getConfigState(swatches, cn, 'hover')
    const { color: aColor, background: aBG } = getConfigState(swatches, cn, 'active')
    const base = {
      color,
      background,
      hover: {
        color: hColor,
        background: hBG,
      },
      active: {
        color: aColor,
        background: aBG,
      },
    }

    const configCurrent = safeGetValue(cn, 'current', defaultNavItems.current)
    const currentEffect = safeGetValue(configCurrent, 'effect', defaultNavItems.current.effect)
    const lineSize = safeGetValue(configCurrent, 'lineSize', defaultNavItems.current.lineSize)
    const lineColor = safeGetValue(configCurrent, 'lineColor', defaultNavItems.current.lineColor)

    let inlinePadding
    let inlineBorder
    let stackedPadding
    let stackedBorder
    let currentBorder
    switch (currentEffect) {
      case 'underline':
        inlinePadding = `${padding} ${padding} calc(${padding} - ${lineSize})`
        inlineBorder = `border-bottom: ${lineSize} solid transparent;`
        stackedPadding = `${padding} ${padding} ${padding} calc(${padding} - ${lineSize})`
        stackedBorder = `border-left: ${lineSize} solid transparent;`
        currentBorder = `border-color: ${getColorSwatch(swatches, lineColor)};`
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
