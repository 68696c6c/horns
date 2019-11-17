import { isUndefined } from '../utils'
import ColorFactors from './color-factors'
import ColorPallet, { palletColors } from './color-pallet'
import { safeGetValue } from './utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_DARK

// @TODO get default values from a config file.
const defaultColors = {
  mode: MODE_DEFAULT,
  prominent: 'primary',
  hover: 'secondary',
  active: 'tertiary',
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
  if (swatch === 'inherit' || isUndefined(swatch)) {
    return 'inherit'
  }
  const path = getSwatchPath(swatch)
  return swatches[path.color][path.shade][path.swatch]
}

const getColorShade = (swatches, shade) => {
  if (shade === '' || isUndefined(shade)) {
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

const makeSwatch = (color, copy, factors) => {
  const negative = color.negate()
  const isDark = color.isDark()
  let hover
  let active
  if (isDark) {
    hover = color.lighten(factors.light)
    active = color.lighten(factors.lighter)
  } else {
    hover = color.darken(factors.dark)
    active = color.darken(factors.darker)
  }
  return {
    base: getColorValue(color),
    readable: isDark ? copy.light : copy.dark,
    negative: getColorValue(negative),
    negativeReadable: negative.isDark() ? copy.light : copy.dark,
    hover: getColorValue(hover),
    hoverReadable: hover.isDark() ? copy.light : copy.dark,
    active: getColorValue(active),
    activeReadable: active.isDark() ? copy.light : copy.dark,
  }
}

const getColorSwatches = (colorShades, copy, factors) => {
  const swatches = {}
  Object.keys(colorShades).forEach(colorShade => {
    if (colorShade !== 'hover' && colorShade !== 'active') {
      const shadeColor = colorShades[colorShade]
      swatches[colorShade] = {}
      Object.keys(shadeColor).forEach(shade => {
        if (colorShade === 'prominent') {
          const color = shadeColor[shade]
          const hover = colorShades.hover[shade]
          const active = colorShades.active[shade]
          const r = makeSwatch(color, copy, factors)
          r.hover = getColorValue(hover)
          r.hoverReadable = hover.isDark() ? copy.light : copy.dark
          r.active = getColorValue(active)
          r.activeReadable = active.isDark() ? copy.light : copy.dark
          swatches[colorShade][shade] = r
        } else {
          const color = shadeColor[shade]
          swatches[colorShade][shade] = makeSwatch(color, copy, factors)
        }
      })
    }
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
  shades.hover = {
    alpha: pallet.hover.alpha(factors.alpha),
    darker: pallet.hover.darken(factors.darker),
    dark: pallet.hover.darken(factors.dark),
    base: pallet.hover,
    light: pallet.hover.lighten(factors.light),
    lighter: pallet.hover.lighten(factors.lighter),
  }
  shades.active = {
    alpha: pallet.active.alpha(factors.alpha),
    darker: pallet.active.darken(factors.darker),
    dark: pallet.active.darken(factors.dark),
    base: pallet.active,
    light: pallet.active.lighten(factors.light),
    lighter: pallet.active.lighten(factors.lighter),
  }
  return shades
}

class ColorsConfig {
  constructor(config = {}) {
    this.mode = safeGetValue(config, 'mode', defaultColors.mode)

    const configPallet = safeGetValue(config, 'pallet', {})
    const pallet = new ColorPallet(configPallet)

    const configFactors = safeGetValue(config, 'factors', {})
    const factors = new ColorFactors(configFactors)

    const shaded = getShadedColorPallet(pallet, factors)
    const { background, copy } = getModeColors(this.mode, shaded.dark, shaded.neutral, shaded.light)

    this.swatches = getColorSwatches(shaded, copy, factors)
    this.background = background
    this.copy = copy

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
