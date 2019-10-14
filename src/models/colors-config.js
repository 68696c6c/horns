import { MODE_DEFAULT, MODE_LIGHT } from '../themes/mode'

const safeGetValue = (config, key, defaultValue) => {
  return typeof config[key] === 'undefined' ? defaultValue : config[key]
}

const getColorShades = (color, colorFactors) => ({
  darker: color.darken(colorFactors.darker),
  dark: color.darken(colorFactors.dark),
  base: color,
  light: color.lighten(colorFactors.light),
  lighter: color.lighten(colorFactors.lighter),
  alpha: color.alpha(colorFactors.alpha),
})

const getNeutralColors = ({ dark, neutral, light }, colorFactors) => ({
  dark: getColorShades(dark, colorFactors),
  neutral: getColorShades(neutral, colorFactors),
  light: getColorShades(light, colorFactors),
})

const getModeColors = (mode, dark, light) => {
  if (mode === MODE_LIGHT) {
    return {
      background: {
        primary: light.base.rgb().string(),
        secondary: light.dark.rgb().string(),
        tertiary: light.darker.rgb().string(),
      },
      copy: {
        primary: dark.base.rgb().string(),
        dark: dark.base.rgb().string(),
        light: light.base.rgb().string(),
      },
    }
  }
  return {
    background: {
      primary: dark.base.rgb().string(),
      secondary: dark.light.rgb().string(),
      tertiary: dark.lighter.rgb().string(),
    },
    copy: {
      primary: light.base.rgb().string(),
      dark: dark.base.rgb().string(),
      light: light.base.rgb().string(),
    },
  }
}

const getBrandColors = ({ primary, secondary, tertiary }, colorFactors) => ({
  primary: getColorShades(primary, colorFactors),
  secondary: getColorShades(secondary, colorFactors),
  tertiary: getColorShades(tertiary, colorFactors),
})

const getActionColors = ({ success, info, warning, danger }, colorFactors) => ({
  success: getColorShades(success, colorFactors),
  info: getColorShades(info, colorFactors),
  warning: getColorShades(warning, colorFactors),
  danger: getColorShades(danger, colorFactors),
})

class ColorsConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    this.mode = safeGetValue(config, 'mode', MODE_DEFAULT)

    const colors = safeGetValue(config, 'colors', {})
    this.swatches = colors
    console.log('swatches', this.swatches)
    this.shades = ['darker', 'dark', 'base', 'light', 'lighter']

    const configColorFactors = safeGetValue(config, 'colorFactors', {})
    this.colorFactors = {
      alpha: safeGetValue(configColorFactors, 'alpha', 0.3),
      light: safeGetValue(configColorFactors, 'light', 0.2),
      lighter: safeGetValue(configColorFactors, 'lighter', 0.5),
      dark: safeGetValue(configColorFactors, 'dark', 0.2),
      darker: safeGetValue(configColorFactors, 'darker', 0.5),
    }

    const { dark, neutral, light } = getNeutralColors(this.swatches, this.colorFactors)
    const { background, copy } = getModeColors(this.mode, dark, light)
    const { primary, secondary, tertiary } = getBrandColors(this.swatches, this.colorFactors)
    const { success, info, warning, danger } = getActionColors(this.swatches, this.colorFactors)

    this.background = background
    this.copy = copy
    this.swatches = {
      dark,
      neutral,
      light,
      primary,
      secondary,
      tertiary,
      success,
      info,
      warning,
      danger,
    }

    console.log('colors config', this)
  }
}

export default ColorsConfig
