import { isUndefined } from '..'
import { MODE_LIGHT } from '../themes/mode'
import Colors from './colors'
import ThemeConfig from './config/theme'
import { rgb } from '../themes/utils'
import { getSwatchPath, MODE_DARK } from './config/utils'

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

    this.configBase = config
    this.config = new ThemeConfig(config)

    this.colors = this.config.colors

    // @TODO add support for imports.
    this.imports = []
    this.breakpoints = this.config.breakpoints
    this.mode = this.config.mode

    // this.grid = this.getGrid()
    // this.spacing = this.getSpacing()
    // this.typography = this.getTypography()
    // this.inputs = this.getInputs()
    //
    // // These use values set above and must be called last.
    // this.mapVariants = this.getMapVariants()
    // this.buttons = this.getButtons()
    // this.links = this.getLinks()
    // this.navItems = this.getNavItems()
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
      borderColor: this.colors.background.secondary,
      color: this.colors.copy.primary,
      backgroundColor: this.colors.background.primary,
      highlight: this.colors.hover,
      active: this.colors.active,
      disabled: this.colors.disabled,
    }
  }

  getMapVariants() {
    const { map } = this.config
    const result = {
      custom: {
        backgroundFill: getSwatchPath(map.backgroundColor),
        states: {
          fill: getSwatchPath(map.stateColor),
          fillHover: getSwatchPath(map.stateColorHover),
          fillActive: getSwatchPath(map.stateColorActive),
          stroke: getSwatchPath(map.stateLineColor),
          strokeHover: getSwatchPath(map.stateLineColorHover),
          strokeActive: getSwatchPath(map.stateLineColorActive),
        },
        labels: {
          fill: getSwatchPath(map.labelColor),
          fillHover: getSwatchPath(map.labelColorHover),
          fillActive: getSwatchPath(map.labelColorActive),
        },
      },
    }
    const { colors } = this
    Object.keys(colors.swatches).forEach(color => {
      result[color] = this.makeMapVariant(color)
    })
    return result
  }

  makeMapVariant(swatch) {
    const colorSwatch = this.colors.swatches[swatch]
    const { background, copy, mode } = this.colors
    const isDark = mode === MODE_DARK
    const { light, neutral, dark } = this.colors.swatches
    let backgroundFill
    let copySwatch
    let fill
    let fillHover
    let fillActive
    switch (swatch) {
      case 'light':
        backgroundFill = dark.base
        copySwatch = neutral.base
        fill = colorSwatch.base
        fillHover = colorSwatch.dark
        fillActive = colorSwatch.dark
        break
      case 'dark':
        backgroundFill = light.base
        copySwatch = neutral.base
        fill = colorSwatch.base
        fillHover = colorSwatch.lighter
        fillActive = colorSwatch.light
        break
      default:
        backgroundFill = background.primary
        copySwatch = isDark ? copy.light : copy.dark
        fill = colorSwatch.base
        fillHover = colorSwatch.light
        fillActive = colorSwatch.dark
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
    const { colors } = this
    const result = {}
    Object.keys(colors.swatches).forEach(color => {
      const c = colors.swatches[color]
      const isDark = colors.mode === MODE_DARK
      const hover = isDark ? c.light.base : c.dark.base
      const active = isDark ? c.lighter.base : c.darker.base
      result[color] = this.makeLink(c.base.base, hover, active, linkDecorations)
    })
    result.copy = this.makeLink(colors.copy.primary, colors.hover, colors.active, linkDecorations)
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
    const { colors } = this
    const {
      padding,
      activeEffect,
      activeBorderWidth,
      activeBorderColor,
    } = this.config.navItems
    let inline = {
      padding,
      border: 'border: none',
      active: { border: 'border: none' },
    }
    let stacked = {
      padding,
      border: 'border: none',
      active: { border: 'border: none' },
    }
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
