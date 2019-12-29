import { isUndefined } from '../utils'
import ColorFactors from './color-factors'
import ColorPallet, { palletColors, modeColorShades } from './color-pallet'
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
    return {
      base: 'inherit',
      readable: 'inherit',
      border: 'inherit',
      negative: 'inherit',
      negativeReadable: 'inherit',
      hover: 'inherit',
      hoverReadable: 'inherit',
      hoverBorder: 'inherit',
      active: 'inherit',
      activeReadable: 'inherit',
      activeBorder: 'inherit',
    }
  }
  const path = getSwatchPath(shade)
  return swatches[path.color][path.shade]
}

const getModeColors = (mode, dark, neutral, light) => {
  if (mode === MODE_LIGHT) {
    return {
      background: light.base,
      'background:primary': light.base,
      'background:secondary': light.dark,
      'background:tertiary': light.darker,
      'background:active': neutral.lighter,
      'background:inactive': neutral.light,
      copy: dark.base,
      'copy:primary': dark.base,
      'copy:dark': dark.base,
      'copy:light': light.base,
    }
  }
  return {
    background: dark.base,
    'background:primary': dark.base,
    'background:secondary': dark.light,
    'background:tertiary': dark.lighter,
    'background:active': neutral.darker,
    'background:inactive': neutral.dark,
    copy: light.base,
    'copy:primary': light.base,
    'copy:dark': dark.base,
    'copy:light': light.base,
  }
}

const makeSwatch = (color, copyLight, copyDark, factors) => {
  const negative = color.negate()
  const isDark = color.isDark()
  let borderLight
  let borderDark
  let hover
  let active
  if (isDark) {
    borderLight = color.lighten(factors.light)
    borderDark = color.darken(factors.dark)
    hover = color.lighten(factors.light)
    active = color.lighten(factors.lighter)
  } else {
    borderLight = color.lighten(factors.light)
    borderDark = color.darken(factors.dark)
    hover = color.darken(factors.dark)
    active = color.darken(factors.darker)
  }
  const hoverLight = hover.lighten(factors.light)
  const hoverDark = hover.darken(factors.dark)
  const activeLight = active.lighten(factors.light)
  const activeDark = active.lighten(factors.dark)
  return {
    base: getColorValue(color),
    readable: isDark ? copyLight : copyDark,
    border: getColorValue(isDark ? borderLight : borderDark),
    negative: getColorValue(negative),
    negativeReadable: negative.isDark() ? copyLight : copyDark,
    hover: getColorValue(hover),
    hoverReadable: hover.isDark() ? copyLight : copyDark,
    hoverBorder: getColorValue(isDark ? hoverLight : hoverDark),
    active: getColorValue(active),
    activeReadable: active.isDark() ? copyLight : copyDark,
    activeBorder: getColorValue(isDark ? activeLight : activeDark),
  }
}

const getColorSwatches = (colorShades, factors) => {
  const copyLight = getColorValue(colorShades['copy:light'].base)
  const copyDark = getColorValue(colorShades['copy:dark'].base)
  const swatches = {}
  Object.keys(colorShades).forEach(colorShade => {
    if (colorShade !== 'hover' && colorShade !== 'active') {
      const shadeColor = colorShades[colorShade]
      swatches[colorShade] = {}
      Object.keys(shadeColor).forEach(shade => {
        if (colorShade === 'prominent') {
          const color = shadeColor[shade]
          const hover = colorShades.hover[shade]
          const hoverLight = hover.lighten(factors.light)
          const hoverDark = hover.darken(factors.dark)
          const active = colorShades.active[shade]
          const activeLight = active.lighten(factors.light)
          const activeDark = active.lighten(factors.dark)
          const r = makeSwatch(color, copyLight, copyDark, factors)
          r.hover = getColorValue(hover)
          r.hoverReadable = hover.isDark() ? copyLight : copyDark
          r.hoverBorder = getColorValue(hover.isDark() ? hoverLight : hoverDark)
          r.active = getColorValue(active)
          r.activeReadable = active.isDark() ? copyLight : copyDark
          r.activeBorder = getColorValue(
            active.isDark() ? activeLight : activeDark
          )
          swatches[colorShade][shade] = r
        } else {
          const color = shadeColor[shade]
          swatches[colorShade][shade] = makeSwatch(color, copyLight, copyDark, factors)
        }
      })
    }
  })
  return swatches
}

const getSwatches = (color, factors) => {
  return {
    alpha: color.alpha(factors.alpha),
    darker: color.darken(factors.darker),
    dark: color.darken(factors.dark),
    base: color,
    light: color.lighten(factors.light),
    lighter: color.lighten(factors.lighter),
  }
}

const getShadedColorPallet = (pallet, factors, mode) => {
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
    } else if (!modeColorShades.includes(palletColor)) {
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
  const modePallet = getModeColors(
    mode,
    shades.dark,
    shades.neutral,
    shades.light
  )
  shades.background = getSwatches(modePallet.background, factors)
  shades['background:primary'] = getSwatches(modePallet['background:primary'], factors)
  shades['background:secondary'] = getSwatches(modePallet['background:secondary'], factors)
  shades['background:tertiary'] = getSwatches(modePallet['background:tertiary'], factors)
  shades['background:active'] = getSwatches(modePallet['background:active'], factors)
  shades['background:inactive'] = getSwatches(modePallet['background:inactive'], factors)
  shades.copy = getSwatches(modePallet.copy, factors)
  shades['copy:primary'] = getSwatches(modePallet['copy:primary'], factors)
  shades['copy:dark'] = getSwatches(modePallet['copy:dark'], factors)
  shades['copy:light'] = getSwatches(modePallet['copy:light'], factors)
  return shades
}

class ColorsConfig {
  constructor(config = {}) {
    this.mode = safeGetValue(config, 'mode', defaultColors.mode)

    const configPallet = safeGetValue(config, 'pallet', {})
    const pallet = new ColorPallet(configPallet)

    const configFactors = safeGetValue(config, 'factors', {})
    const factors = new ColorFactors(configFactors)

    const shaded = getShadedColorPallet(pallet, factors, this.mode)
    this.swatches = getColorSwatches(shaded, factors)

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
