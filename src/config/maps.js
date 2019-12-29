/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import { palletColors } from './color-pallet'
import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultMap = {
  backgroundColor: 'neutral',
  stateColor: 'primary',
  stateColorHover: 'tertiary-light',
  stateColorActive: 'tertiary-dark',
  stateLineColor: 'neutral',
  stateLineColorHover: 'neutral',
  stateLineColorActive: 'neutral',
  labelColor: 'light',
  labelColorHover: 'dark',
  labelColorActive: 'dark',
}

const makeMap = (bg, stateFills, stateStrokes, labelFills) => {
  return {
    background: bg,
    labels: labelFills.base,
    states: {
      fill: stateFills.base,
      stroke: stateStrokes.base,
    },
    hover: {
      labels: labelFills.hover,
      states: {
        fill: stateFills.hover,
        stroke: stateStrokes.hover,
      },
    },
    active: {
      labels: labelFills.active,
      states: {
        fill: stateFills.active,
        stroke: stateStrokes.active,
      },
    },
  }
}

const makeBaseMap = (colors, config) => {
  const backgroundColor = safeGetValue(
    config,
    'backgroundColor',
    defaultMap.backgroundColor
  )
  const stateColor = safeGetValue(config, 'stateColor', defaultMap.stateColor)
  const stateColorHover = safeGetValue(
    config,
    'stateColorHover',
    defaultMap.stateColorHover
  )
  const stateColorActive = safeGetValue(
    config,
    'stateColorActive',
    defaultMap.stateColorActive
  )
  const stateLineColor = safeGetValue(
    config,
    'stateLineColor',
    defaultMap.stateLineColor
  )
  const stateLineColorHover = safeGetValue(
    config,
    'stateLineColorHover',
    defaultMap.stateLineColorHover
  )
  const stateLineColorActive = safeGetValue(
    config,
    'stateLineColorActive',
    defaultMap.stateLineColorActive
  )
  const labelColor = safeGetValue(config, 'labelColor', defaultMap.labelColor)
  const labelColorHover = safeGetValue(
    config,
    'labelColorHover',
    defaultMap.labelColorHover
  )
  const labelColorActive = safeGetValue(
    config,
    'labelColorActive',
    defaultMap.labelColorActive
  )

  const bg = colors.getSwatch(backgroundColor)
  const stateFill = {
    base: colors.getSwatch(stateColor),
    hover: colors.getSwatch(stateColorHover),
    active: colors.getSwatch(stateColorActive),
  }
  const stateStroke = {
    base: colors.getSwatch(stateLineColor),
    hover: colors.getSwatch(stateLineColorHover),
    active: colors.getSwatch(stateLineColorActive),
  }
  const labelFill = {
    base: colors.getSwatch(labelColor),
    hover: colors.getSwatch(labelColorHover),
    active: colors.getSwatch(labelColorActive),
  }
  return makeMap(bg, stateFill, stateStroke, labelFill)
}

class MapsConfig {
  constructor(colorsConfig, config = {}) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('MapsConfig: invalid ColorsConfig')
    }
    const swatches = colorsConfig.swatches

    // Default style.
    this.base = makeBaseMap(colorsConfig, config)

    // Themed styles.
    let hShade = 'dark'
    let aShade = 'darker'
    if (colorsConfig.darkMode()) {
      hShade = 'light'
      aShade = 'lighter'
    }
    this.colorways = {}
    palletColors.forEach(palletColor => {
      if (!['background', 'copy'].includes(palletColor)) {
        const bg = swatches[palletColor].base.readable
        const stateFill = {
          base: swatches[palletColor].base.base,
          hover: swatches[palletColor][hShade].base,
          active: swatches[palletColor][aShade].base,
        }
        const stateStroke = {
          base: bg,
          hover: bg,
          active: bg,
        }
        const labelFill = {
          base: bg,
          hover: bg,
          active: bg,
        }
        this.colorways[palletColor] = makeMap(
          bg,
          stateFill,
          stateStroke,
          labelFill
        )
      }
    })

    console.log('MapsConfig', this)
  }
}

export default MapsConfig
