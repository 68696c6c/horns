/* eslint-disable import/prefer-default-export */
export const MODE_LIGHT = 'light'
export const MODE_DARK = 'dark'
export const MODE_DEFAULT = MODE_DARK

export const safeGetValue = (config, key, defaultValue) => {
  return typeof config[key] === 'undefined' ? defaultValue : config[key]
}

export const palletColors = [
  'primary',
  'secondary',
  'tertiary',
  'light',
  'neutral',
  'dark',
  'success',
  'info',
  'warning',
  'danger',
]

export const colorFactors = [
  'alpha',
  'darker',
  'dark',
  'light',
  'lighter',
]

export const getShadedColorPallet = (pallet, factors) => {
  const shades = {}
  palletColors.forEach(palletColor => {
    const color = pallet[palletColor]
    shades[palletColor] = {
      alpha: color.alpha(factors.alpha),
      darker: color.darken(factors.darker),
      dark: color.darken(factors.dark),
      base: color,
      light: color.lighten(factors.light),
      lighter: color.lighten(factors.lighter),
    }
  })
  return shades
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

export const getColorSwatch = (swatches, swatch) => {
  if (swatch === 'inherit') {
    return 'inherit'
  }
  const path = getSwatchPath(swatch)
  return swatches[path.color][path.shade][path.swatch]
}

export const getModeColors = (mode, dark, neutral, light) => {
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

export const getColorSwatches = (colorShades, copy) => {
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
