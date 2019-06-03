import { pallet } from '../themes/utils'

const safeGetValue = (config, key, defaultValue) => {
  return typeof config[key] === 'undefined' ? defaultValue : config[key]
}

class ThemeConfig {
  constructor(config = {}) {

    // @TODO get default values from a config file.
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

    const configColors = safeGetValue(config, 'colors', {})
    this.colors = {
      primary: safeGetValue(configColors, 'primary', pallet.violet),
      secondary: safeGetValue(configColors, 'secondary', pallet.indigo),
      tertiary: safeGetValue(configColors, 'tertiary', pallet.yellow),
      light: safeGetValue(configColors, 'light', pallet.gray.lightest),
      neutral: safeGetValue(configColors, 'neutral', pallet.gray.medium),
      dark: safeGetValue(configColors, 'dark', pallet.gray.darkest),
      success: safeGetValue(configColors, 'success', pallet.green),
      info: safeGetValue(configColors, 'info', pallet.blue),
      warning: safeGetValue(configColors, 'warning', pallet.orange),
      danger: safeGetValue(configColors, 'danger', pallet.red),
      background: safeGetValue(configColors, 'background', pallet.white),
      copy: safeGetValue(configColors, 'copy', pallet.black),
    }

    const configColorFactors = safeGetValue(config, 'colorFactors', {})
    this.colorFactors = {
      alpha: safeGetValue(configColorFactors, 'alpha', .3),
      light: safeGetValue(configColorFactors, 'light', .2),
      dark: safeGetValue(configColorFactors, 'dark', .2),
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
  }
}

export default ThemeConfig
