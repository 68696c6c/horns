import ThemeConfig from './config'
import { rgb } from '..'

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
    this.navItems = this.getNavItems()
  }

  getColors() {
    const { colors, colorFactors } = this.config
    let result = {}
    this.swatches.forEach(swatch => {
      if (colors.hasOwnProperty(swatch)) {
        // @TODO use a color config class
        const color = colors[swatch]
        result[swatch] = this.makeColor(color, colorFactors)
      }
    })
    result.background = this.makeColor(colors.background, colorFactors)
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
      alpha: copyDefault.alpha(colorFactors.alpha),
      light: copyLight,
      dark: copyDark,
    }
    return result
  }

  makeColor(color, colorFactors) {
    return {
      default: color,
      alpha: color.alpha(colorFactors.alpha),
      light: color.lighten(colorFactors.light),
      dark: color.darken(colorFactors.dark),
    }
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
        light: this.makeFont('default', 'light'),
        lighter: this.makeFont('default', 'lighter'),
        semiBold: this.makeFont('default', 'semiBold'),
        bold: this.makeFont('default', 'bold'),
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
    const { linkDecorations } = this.config
    const colors = this.colors
    let result = {}
    this.swatches.forEach(swatch => {
      if (swatch !== 'copy' && swatch !== 'background' && colors.hasOwnProperty(swatch)) {
        const color = colors[swatch]
        const shade = color.default.isDark() ? 'light' : 'dark'
        result[swatch] = this.makeLink(color.default, color[shade], color[shade], linkDecorations)
      }
    })
    result.copy = this.makeLink(colors.copy.default, colors.primary.default, colors.secondary.default, linkDecorations)
    return result
  }

  // @TODO use a link config class
  makeLink(color, hover, active, linkDecorations) {
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
      if (swatch !== 'copy' && swatch !== 'background' && colors.hasOwnProperty(swatch)) {
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

  getNavItems() {
    const { padding, activeEffect, activeBorderWidth, activeBorderColor } = this.config.navItems
    let inline = { padding, border: 'border: none', active: { border: 'border: none' } }
    let stacked = { padding, border: 'border: none', active: { border: 'border: none' } }
    // @TODO add support for more active effects
    switch (activeEffect) {
      case 'border':
        if (padding !== 'none') {
          inline = {
            padding: `${padding} ${padding} calc(${padding} - ${activeBorderWidth})`,
            border: `border-bottom: ${activeBorderWidth} solid transparent;`,
            active: {
              border: `border-color: ${rgb(this.colors[activeBorderColor].default)};`,
            },
          }
          stacked = {
            padding: `${padding} ${padding} ${padding} calc(${padding} - ${activeBorderWidth})`,
            border: `border-left: ${activeBorderWidth} solid transparent;`,
            active: {
              border: `border-color: ${rgb(this.colors[activeBorderColor].default)};`,
            },
          }
        }
        break
    }
    // @TODO add support for hover effects
    return {
      inline,
      stacked,
    }
  }
}

export default Theme
