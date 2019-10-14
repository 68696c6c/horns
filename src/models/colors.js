import ColorsConfig from './colors-config'

const safeGetValue = (config, key, defaultValue) => {
  return typeof config[key] === 'undefined' ? defaultValue : config[key]
}

const getColorShadeValues = (colorShade, { light, dark }) => {
  const colorN = colorShade.negate()
  return {
    base: colorShade.rgb().string(),
    readable: colorShade.isDark() ? light : dark,
    negative: colorN.rgb().string(),
    negativeReadable: colorN.isDark() ? light : dark,
  }
}

class Swatch {
  constructor(color, copy) {
    this.darker = getColorShadeValues(color.darker, copy)
    this.dark = getColorShadeValues(color.dark, copy)
    this.base = getColorShadeValues(color.base, copy)
    this.light = getColorShadeValues(color.light, copy)
    this.lighter = getColorShadeValues(color.lighter, copy)
    this.alpha = getColorShadeValues(color.alpha, copy)
  }
}

class Colors {
  constructor(config = {}) {
    const c = new ColorsConfig(config)

    this.background = c.background
    this.copy = c.copy
    Object.keys(c.swatches).forEach(swatch => {
      if (swatch !== 'background' && swatch !== 'copy') {
        const color = c.swatches[swatch]

        this[swatch] = new Swatch(color, this.copy)
      }
    })

    console.log('colors', this)
  }
}

export default Colors
