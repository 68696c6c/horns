import ColorFactors from './color-factors'
import ColorPallet from './color-pallet'
import { palletColors, safeGetValue } from './utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_DARK

// @TODO get default values from a config file.
const defaultColors = {
  mode: MODE_DEFAULT,
  hover: 'primary',
  active: 'secondary',
  disabled: 'neutral',
}

const getColorValue = c => c.rgb().string()

const getSwatchPath = colorSwatch => {
  const parts = colorSwatch.split('-')
  switch (parts.length) {
    case 1:
      return {
        color: parts[0],
        shade: 'base',
        swatch: 'base',
      }
    case 2:
      return {
        color: parts[0],
        shade: parts[1],
        swatch: 'base',
      }
    default:
      return {
        color: parts[0],
        shade: parts[1],
        swatch: parts[2],
      }
  }
}

const getColorSwatch = (swatches, swatch) => {
  if (swatch === 'inherit') {
    return 'inherit'
  }
  const path = getSwatchPath(swatch)
  return swatches[path.color][path.shade][path.swatch]
}

const getColorShade = (swatches, shade) => {
  if (shade === '') {
    return 'inherit'
  }
  const path = getSwatchPath(shade)
  return swatches[path.color][path.shade]
}

const getModeColors = (mode, dark, neutral, light) => {
  const darkBase = getColorValue(dark.base)
  const lightBase = getColorValue(light.base)

  if (mode === MODE_LIGHT) {
    const lightDark = getColorValue(dark.base)
    const lightDarker = getColorValue(dark.base)
    return {
      background: {
        primary: lightBase,
        secondary: lightDark,
        tertiary: lightDarker,
        active: getColorValue(neutral.lighter),
        inactive: getColorValue(neutral.light),
      },
      copy: {
        primary: darkBase,
        dark: darkBase,
        light: lightBase,
      },
    }
  }

  const darkLight = getColorValue(dark.base)
  const darkLighter = getColorValue(dark.base)
  return {
    background: {
      primary: darkBase,
      secondary: darkLight,
      tertiary: darkLighter,
      active: getColorValue(neutral.darker),
      inactive: getColorValue(neutral.dark),
    },
    copy: {
      primary: lightBase,
      dark: darkBase,
      light: lightBase,
    },
  }
}

const getColorSwatches = (colorShades, copy) => {
  const copyLight = copy.light
  const copyDark = copy.dark
  const swatches = {}
  Object.keys(colorShades).forEach(colorShade => {
    const shadeColor = colorShades[colorShade]
    swatches[colorShade] = {}
    Object.keys(shadeColor).forEach(shade => {
      const color = shadeColor[shade]
      const negative = color.negate()

      swatches[colorShade][shade] = {
        base: getColorValue(color),
        readable: color.isDark() ? copyLight : copyDark,
        negative: getColorValue(negative),
        negativeReadable: negative.isDark() ? copyLight : copyDark,
      }
    })
  })
  return swatches
}

const getShadedColorPallet = (pallet, factors) => {
  const shades = {}
  palletColors.forEach(palletColor => {
    const color = pallet[palletColor]
    if (palletColor === 'dark') {
      shades[palletColor] = {
        alpha: color.alpha(factors.alpha),
        darker: color.darken(factors.darker),
        dark: color.darken(factors.dark),
        base: color,
        light: color.lighten(25),
        lighter: color.lighten(50),
      }
    } else if (palletColor === 'light') {
      shades[palletColor] = {
        alpha: color.alpha(factors.alpha),
        darker: color.darken(0.15),
        dark: color.darken(0.08),
        base: color,
        light: color.lighten(factors.light),
        lighter: color.lighten(factors.lighter),
      }
    } else {
      shades[palletColor] = {
        alpha: color.alpha(factors.alpha),
        darker: color.darken(factors.darker),
        dark: color.darken(factors.dark),
        base: color,
        light: color.lighten(factors.light),
        lighter: color.lighten(factors.lighter),
      }
    }
  })
  return shades
}

class ColorsConfig {
  constructor(config = {}) {
    this.mode = safeGetValue(config, 'mode', defaultColors.mode)
    const hover = safeGetValue(config, 'hover', defaultColors.hover)
    const active = safeGetValue(config, 'active', defaultColors.active)
    const disabled = safeGetValue(config, 'disabled', defaultColors.disabled)

    const configPallet = safeGetValue(config, 'pallet', {})
    const pallet = new ColorPallet(configPallet)

    const configFactors = safeGetValue(config, 'factors', {})
    const factors = new ColorFactors(configFactors)

    const shaded = getShadedColorPallet(pallet, factors)
    const { background, copy } = getModeColors(this.mode, shaded.dark, shaded.neutral, shaded.light)

    this.swatches = getColorSwatches(shaded, copy)
    this.background = background
    this.copy = copy
    this.hover = getColorSwatch(this.swatches, hover)
    this.active = getColorSwatch(this.swatches, active)
    this.disabled = getColorSwatch(this.swatches, disabled)

    console.log('ColorsConfig', this)
  }

  darkMode() {
    return this.mode === MODE_DARK
  }

  lightMode() {
    return this.mode === MODE_LIGHT
  }

  getSwatch(swatchKey) {
    return getColorSwatch(this.swatches, swatchKey)
  }

  getShade(shadeKey) {
    return getColorShade(this.swatches, shadeKey)
  }
}

export default ColorsConfig
