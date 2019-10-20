/* eslint-disable prefer-destructuring */
import SpacingConfig, { spacingSizes } from './spacing'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultGrid = {
  gap: 'medium',
  columnMin: '280px',
  breakpoints: {
    min: '320px',
    small: '480px',
    medium: '768px',
    large: '992px',
    max: '1200px',
  },
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
      medium: safeGetValue(configBreakpoints, 'medium', defaultGrid.breakpoints.medium),
      large: safeGetValue(configBreakpoints, 'large', defaultGrid.breakpoints.large),
      max: safeGetValue(configBreakpoints, 'max', defaultGrid.breakpoints.max),
    }

    console.log('GridConfig', this)
  }
}

export default GridConfig
