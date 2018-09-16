import ThemeConfig from './config'

class Theme {
  constructor(config) {

    this.swatches = [
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

    this.config = new ThemeConfig(config)

    // @TODO add support for imports.
    this.imports = []
    this.breakpoints = this.config.breakpoints
    this.colors = this.getColors()
    this.grid = this.getGrid()
    this.typography = this.getTypography()

    // These use values set above and must be called last.
    this.buttons = this.getButtons()
    this.links = this.getLinks()
  }

  getColors() {
    const { colors, colorFactors } = this.config
    let result = {}
    this.swatches.forEach(swatch => {
      if (colors.hasOwnProperty(swatch)) {
        // @TODO use a color config class
        const color = colors[swatch]
        result[swatch] = {
          default: color,
          light: color.lighten(colorFactors.light),
          dark: color.darken(colorFactors.dark),
        }
      }
    })
    const copyDefault = colors.copy
    let copyLight, copyDark = null
    if (copyDefault.isDark()) {
      copyLight = copyDefault.negate()
      copyDark = copyDefault
    } else {
      copyLight = copyDefault
      copyDark = copyDefault.negate()
    }
    result.copy = {
      default: copyDefault,
      light: copyLight,
      dark: copyDark,
    }
    return result
  }

  getGrid() {
    return {
      gap: this.config.gap,
      container: this.breakpoints.max,
    }
  }

  getTypography() {
    return {
      // @TODO support custom fonts
      fonts: {
        default: this.makeFont('default'),
        // montBook: this.getFont('montRegular', 'lighter'),
        // montLight: this.getFont('montRegular', 'light'),
        // montRegular: this.getFont('montRegular'),
        // montSemiBold: this.getFont('montSemiBold', 'semiBold'),
        // montBold: this.getFont('montBold', 'bold'),
      },
      headings: this.getHeadings(),
    }
  }

  // @TODO use a font config class
  makeFont(family, weight = 'default') {
    const families = this.config.fontFamilies
    const weights = this.config.fontWeights
    return {
      family: `${families[family]}, ${families.fallback}`,
      weight: weights[weight],
    }
  }

  // @TODO use a heading config class
  getHeadings() {
    const sizes = this.config.fontSizes
    const levels = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ]
    let result = {}
    levels.forEach(level => {
      result[level] = {
        size: sizes[level],
        margin: this.config.headingMargin,
      }
    })
    return result
  }

  getLinks() {
    const { primary, secondary, copy } = this.colors
    return {
      default: this.makeLink(copy.default, primary.default, secondary.default),
      dark: this.makeLink(copy.dark, primary.default, secondary.default),
      light: this.makeLink(copy.light, primary.default, secondary.default),
    }
  }

  // @TODO use a link config class
  makeLink(color, hover, active) {
    const { linkDecorations } = this.config
    return {
      color: color,
      decoration: linkDecorations.default,
      hover: {
        color: hover,
        decoration: linkDecorations.hover,
      },
      active: {
        color: active,
        decoration: linkDecorations.active,
      },
    }
  }

  getButtons() {
    const colors = this.colors
    let result = {}
    this.swatches.forEach(swatch => {
      if (colors.hasOwnProperty(swatch)) {
        const color = colors[swatch]
        const shade = color.default.isDark() ? 'light' : 'dark'
        result[swatch] = this.makeButton(color.default, color[shade], color[shade])
      }
    })
    return result
  }

  // @TODO use a button config class
  makeButton(defaultBG, hoverBG, activeBG) {
    const { copy } = this.colors
    return {
      background: defaultBG,
      color: defaultBG.isDark() ? copy.light : copy.dark,
      radius: this.config.radius,
      border: 'none',
      hover: {
        background: hoverBG,
        color: hoverBG.isDark() ? copy.light : copy.dark,
        border: 'none',
      },
      active: {
        background: activeBG,
        color: activeBG.isDark() ? copy.light : copy.dark,
        border: 'none',
      },
    }
  }
}

export default Theme
