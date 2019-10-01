import { isUndefined } from '..'
import ThemeConfig from './theme-config'
import { rgb } from '../themes/utils'

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
    this.spacing = this.getSpacing()
    this.typography = this.getTypography()
    this.inputs = this.getInputs()

    // These use values set above and must be called last.
    this.mapVariants = this.getMapVariants()
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
      lighter: color.lighten(colorFactors.lighter),
      dark: color.darken(colorFactors.dark),
      darker: color.darken(colorFactors.darker),
    }
  }

  getGrid() {
    return {
      gap: this.config.gap,
      container: this.breakpoints.max,
    }
  }

  getSpacing() {
    return this.config.spacing
  }

  getTypography() {
    const { lineHeight, fontSizes } = this.config
    return {
      lineHeight,
      sizes: {
        min: fontSizes.min,
        default: fontSizes.default,
        large: fontSizes.large,
        max: fontSizes.max,
      },
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

  getInputs() {
    const { inputs } = this.config
    return {
      borderWidth: inputs.borderWidth,
      borderColor: this.colors[inputs.borderColor].default,
      color: this.colors[inputs.color].default,
      backgroundColor: this.colors[inputs.backgroundColor].default,
      highlight: this.colors[inputs.highlight].alpha,
      active: this.colors[inputs.active].default,
      disabled: this.colors[inputs.disabled].default,
    }
  }

  getMapVariants() {
    const { map, colors } = this.config
    const getColorSwatch = variant => {
      const [v, s] = variant.split('-')
      const swatch = isUndefined(s) ? 'default' : s
      return this.colors[v][swatch]
    }
    const result = {
      custom: {
        backgroundFill: getColorSwatch(map.backgroundColor),
        states: {
          fill: getColorSwatch(map.stateColor),
          fillHover: getColorSwatch(map.stateColorHover),
          fillActive: getColorSwatch(map.stateColorActive),
          stroke: getColorSwatch(map.stateLineColor),
          strokeHover: getColorSwatch(map.stateLineColorHover),
          strokeActive: getColorSwatch(map.stateLineColorActive),
        },
        labels: {
          fill: getColorSwatch(map.labelColor),
          fillHover: getColorSwatch(map.labelColorHover),
          fillActive: getColorSwatch(map.labelColorActive),
        },
      },
    }
    this.swatches.forEach(swatch => {
      if (colors.hasOwnProperty(swatch)) {
        // @TODO use a color config class
        result[swatch] = this.makeMapVariant(swatch)
      }
    })
    return result
  }

  makeMapVariant(swatch) {
    const { background, copy, light, neutral, dark } = this.colors
    let backgroundFill
    let copySwatch
    let fill
    let fillHover
    let fillActive
    switch (swatch) {
      case 'light':
        backgroundFill = dark.default
        copySwatch = neutral.default
        fill = this.colors[swatch].default
        fillHover = this.colors[swatch].dark
        fillActive = this.colors[swatch].dark
        break
      case 'dark':
        backgroundFill = light.default
        copySwatch = neutral.default
        fill = this.colors[swatch].default
        fillHover = this.colors[swatch].lighter
        fillActive = this.colors[swatch].light
        break
      default:
        backgroundFill = background.default
        copySwatch = backgroundFill.isDark() ? copy.light : copy.dark
        fill = this.colors[swatch].default
        fillHover = this.colors[swatch].light
        fillActive = this.colors[swatch].dark
        break
    }
    return {
      backgroundFill,
      states: {
        fill,
        fillHover,
        fillActive,
        stroke: backgroundFill,
        strokeHover: backgroundFill,
        strokeActive: backgroundFill,
      },
      labels: {
        fill: copySwatch,
        fillHover: copySwatch,
        fillActive: copySwatch,
      },
    }
  }

  // @TODO use a font config class
  makeFont(family, weight = 'default') {
    const { fontFamilies, fontWeights } = this.config
    return {
      family: `${fontFamilies[family]}, ${fontFamilies.fallback}`,
      weight: fontWeights[weight],
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
      color,
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
  // @TODO make border size match input border for alignment in GroupInline
  makeButton(defaultBG, hoverBG, activeBG) {
    const { copy } = this.colors
    return {
      background: defaultBG,
      color: defaultBG.isDark() ? copy.light : copy.dark,
      radius: this.config.radius,
      font: 'bold',
      border: '2px solid transparent',
      decoration: 'none',
      hover: {
        background: hoverBG,
        color: hoverBG.isDark() ? copy.light : copy.dark,
        border: '2px solid transparent',
        decoration: 'none',
      },
      active: {
        background: activeBG,
        color: activeBG.isDark() ? copy.light : copy.dark,
        border: '2px solid transparent',
        decoration: 'none',
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
