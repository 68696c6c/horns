/* eslint-disable prefer-destructuring */
import ColorsConfig from './colors'
import { palletColors, getColorSwatch, safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultLinks = {
  // Default link colors are only included here as a reference.
  // The ColorsConfig will be used for actual default values.
  colors: {
    base: 'copy',
    active: 'primary',
    hover: 'secondary',
  },
  decorations: {
    base: 'none',
    active: 'none',
    hover: 'none',
  },
}

const makeLink = (colors, decorations) => {
  return {
    color: colors.base,
    decoration: decorations.base,
    hover: {
      color: colors.hover,
      decoration: decorations.hover,
    },
    active: {
      color: colors.active,
      decoration: decorations.active,
    },
  }
}

class LinksConfig {
  constructor(colorsConfig, config = {}) {
    if (!(colorsConfig instanceof ColorsConfig)) {
      throw new Error('LinksConfig: invalid ColorsConfig')
    }

    let color = colorsConfig.copy.primary
    let hColor = colorsConfig.hover
    let aColor = colorsConfig.active
    const configColors = safeGetValue(config, 'colors', {})

    const configColor = safeGetValue(configColors, 'base', '')
    if (configColor) {
      color = colorsConfig.getSwatch(configColor)
    }

    const configHColor = safeGetValue(configColors, 'hover', '')
    if (configHColor) {
      hColor = colorsConfig.getSwatch(configHColor)
    }

    const configAColor = safeGetValue(configColors, 'active', '')
    if (configAColor) {
      aColor = colorsConfig.getSwatch(configAColor)
    }

    const colors = {
      base: color,
      hover: hColor,
      active: aColor,
    }

    const cd = safeGetValue(config, 'decorations', defaultLinks.decorations)
    const decorations = {
      base: safeGetValue(cd, 'base', defaultLinks.decorations.base),
      hover: safeGetValue(cd, 'hover', defaultLinks.decorations.hover),
      active: safeGetValue(cd, 'active', defaultLinks.decorations.active),
    }

    // Default link style.
    this.copy = makeLink(colors, decorations)

    // Themed link styles.
    let hShade = 'dark'
    let aShade = 'darker'
    if (colorsConfig.darkMode()) {
      hShade = 'light'
      aShade = 'lighter'
    }
    this.colorways = {}
    palletColors.forEach(palletColor => {
      const c = {
        base: colorsConfig.getSwatch(`${palletColor}-base-base`),
        hover: colorsConfig.getSwatch(`${palletColor}-${hShade}-base`),
        active: colorsConfig.getSwatch(`${palletColor}-${aShade}-base`),
      }
      this.colorways[palletColor] = makeLink(c, decorations)
    })

    console.log('LinksConfig', this)
  }
}

export default LinksConfig
