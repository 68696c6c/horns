/* eslint-disable prefer-destructuring */
import SpacingConfig, { spacingSizes } from './spacing'
import { safeGetValue } from './utils'

export const breakpoints = [
  '',
  'min',
  'small',
  'mobile',
  'mobile',
  'medium',
  'large',
  'container',
  'max',
]

// @TODO get default values from a config file.
const defaultGrid = {
  gap: 'medium',
  columnMin: '280px',
  breakpoints: {
    min: '320px',
    small: '480px',
    mobile: '480px',
    medium: '768px',
    large: '992px',
    container: '1200px',
    max: '1200px',
  },
}

export const getBreakpoint = (points, breakpoint) => {
  if (!Object.hasOwnProperty.call(points, breakpoint)) {
    return defaultGrid.breakpoints.mobile
  }
  return points[breakpoint]
}

class GridConfig {
  constructor(spacingConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('GridConfig: invalid SpacingConfig')
    }
    let gap = safeGetValue(config, 'gap', defaultGrid.gap)
    if (!spacingSizes.includes(gap)) {
      gap = defaultGrid.gap
    }
    this.gap = spacingConfig[gap].px

    this.columnMin = safeGetValue(config, 'columnMin', defaultGrid.columnMin)

    const configBreakpoints = safeGetValue(config, 'breakpoints', defaultGrid.breakpoints)
    this.breakpoints = {
      min: safeGetValue(configBreakpoints, 'min', defaultGrid.breakpoints.min),
      small: safeGetValue(configBreakpoints, 'small', defaultGrid.breakpoints.small),
      mobile: safeGetValue(configBreakpoints, 'mobile', defaultGrid.breakpoints.mobile),
      medium: safeGetValue(configBreakpoints, 'medium', defaultGrid.breakpoints.medium),
      large: safeGetValue(configBreakpoints, 'large', defaultGrid.breakpoints.large),
      container: safeGetValue(configBreakpoints, 'container', defaultGrid.breakpoints.container),
      max: safeGetValue(configBreakpoints, 'max', defaultGrid.breakpoints.max),
    }

    console.log('GridConfig', this)
  }

  getBreakpoint(breakpoint) {
    return getBreakpoint(this.breakpoints, breakpoint)
  }

  getContainer() {
    return getBreakpoint(this.breakpoints, 'container')
  }
}

export default GridConfig
