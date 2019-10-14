import ColorsConfig from './colors'
import { safeGetValue } from './utils'

class ThemeConfig {
  constructor(config = {}) {
    // @TODO get default values from a config file.
    // Read values from config object and initialize sub-configs.
    const configColors = safeGetValue(config, 'colors', {})
    this.colors = new ColorsConfig(configColors)
    /** ============================================================================================================= */

    this.headingMargin = safeGetValue(config, 'headingMargin', '.75rem 0')
    this.gap = safeGetValue(config, 'gap', '15px')
    this.lineHeight = safeGetValue(config, 'lineHeight', '1.6em')
    this.radius = safeGetValue(config, 'radius', '3px')

    // @TODO make this configurable
    // To work correctly, these ratios need to be maintained exactly, e.g. xsmal must be 2x tiny etc.
    this.spacing = {
      tiny: '4px',
      xsmall: '8px',
      small: '12px',
      medium: '16px',
      large: '20px',
      xlarge: '32px',
    }

    const configBreakpoints = safeGetValue(config, 'breakpoints', {})
    this.breakpoints = {
      min: safeGetValue(configBreakpoints, 'min', '320px'),
      small: safeGetValue(configBreakpoints, 'small', '480px'),
      medium: safeGetValue(configBreakpoints, 'medium', '768px'),
      large: safeGetValue(configBreakpoints, 'large', '992px'),
      max: safeGetValue(configBreakpoints, 'max', '1200px'),
    }

    const configFontFamilies = safeGetValue(config, 'fontFamilies', {})
    this.fontFamilies = {
      default: safeGetValue(configFontFamilies, 'default', 'Helvetica'),
      fallback: safeGetValue(configFontFamilies, 'fallback', 'sans-serif'),
    }

    const configFontWeights = safeGetValue(config, 'fontWeights', {})
    this.fontWeights = {
      default: safeGetValue(configFontWeights, 'default', 400),
      lighter: safeGetValue(configFontWeights, 'lighter', 100),
      light: safeGetValue(configFontWeights, 'light', 200),
      semiBold: safeGetValue(configFontWeights, 'semiBold', 600),
      bold: safeGetValue(configFontWeights, 'bold', 700),
    }

    const configFontSizes = safeGetValue(config, 'fontSizes', {})
    this.fontSizes = {
      default: safeGetValue(configFontSizes, 'default', '14px'),
      large: safeGetValue(configFontSizes, 'large', '1.5em'),
      min: safeGetValue(configFontSizes, 'min', '12px'),
      max: safeGetValue(configFontSizes, 'max', '16px'),
      h1: safeGetValue(configFontSizes, 'h1', '3.21rem'),
      h2: safeGetValue(configFontSizes, 'h2', '2.36rem'),
      h3: safeGetValue(configFontSizes, 'h3', '1.64rem'),
      h4: safeGetValue(configFontSizes, 'h4', '1.29rem'),
      h5: safeGetValue(configFontSizes, 'h5', '1.15rem'),
      h6: safeGetValue(configFontSizes, 'h6', '1rem'),
    }

    const configLinkDecorations = safeGetValue(config, 'linkDecorations', {})
    this.linkDecorations = {
      default: safeGetValue(configLinkDecorations, 'default', 'none'),
      hover: safeGetValue(configLinkDecorations, 'hover', 'none'),
      active: safeGetValue(configLinkDecorations, 'active', 'none'),
    }

    const configNavItems = safeGetValue(config, 'navItems', {})
    this.navItems = {
      padding: safeGetValue(configNavItems, 'padding', '1em'),
      hover: safeGetValue(configNavItems, 'hover', 'none'),
      activeEffect: safeGetValue(configNavItems, 'activeEffect', 'border'),
      activeBorderWidth: safeGetValue(configNavItems, 'activeBorderWidth', '2px'),
      activeBorderColor: safeGetValue(configNavItems, 'activeBorderColor', 'primary'),
    }

    const inputs = safeGetValue(config, 'inputs', {})
    this.inputs = {
      borderWidth: safeGetValue(inputs, 'borderWidth', '2px'),
      borderColor: safeGetValue(inputs, 'borderColor', 'neutral'),
      color: safeGetValue(inputs, 'color', 'copy'),
      backgroundColor: safeGetValue(inputs, 'backgroundColor', 'light'),
      highlight: safeGetValue(inputs, 'highlight', 'neutral'),
      active: safeGetValue(inputs, 'highlight', 'primary'),
      disabled: safeGetValue(inputs, 'highlight', 'neutral'),
    }

    const map = safeGetValue(config, 'map', {})
    this.map = {
      backgroundColor: safeGetValue(map, 'backgroundColor', 'neutral'),
      stateColor: safeGetValue(map, 'stateColor', 'primary'),
      stateColorHover: safeGetValue(map, 'stateColorHover', 'tertiary-light'),
      stateColorActive: safeGetValue(map, 'stateColorActive', 'tertiary-dark'),
      stateLineColor: safeGetValue(map, 'stateLineColor', 'background'),
      stateLineColorHover: safeGetValue(map, 'stateLineColorHover', 'background'),
      stateLineColorActive: safeGetValue(map, 'stateLineColorActive', 'background'),
      labelColor: safeGetValue(map, 'labelColor', 'light'),
      labelColorHover: safeGetValue(map, 'labelColorHover', 'dark'),
      labelColorActive: safeGetValue(map, 'labelColorActive', 'dark'),
    }
  }
}

export default ThemeConfig
