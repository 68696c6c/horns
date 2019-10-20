import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultTypography = {
  lineHeight: '1.6em',
  headingMargin: '.75em 0',
  families: {
    base: 'Helvetica',
    fallback: 'sans-serif',
  },
  weights: {
    base: 400,
    lighter: 100,
    light: 200,
    semiBold: 600,
    bold: 700,
  },
  sizes: {
    base: '14px',
    small: '0.75rem',
    large: '1.5rem',
    min: '12px',
    max: '16px',
    h1: '3.21rem',
    h2: '2.36rem',
    h3: '1.64rem',
    h4: '1.29rem',
    h5: '1.15rem',
    h6: '1rem',
  },
}

class TypographyConfig {
  constructor(config = {}) {
    this.lineHeight = safeGetValue(config, 'lineHeight', defaultTypography.lineHeight)
    this.headingMargin = safeGetValue(config, 'headingMargin', defaultTypography.headingMargin)

    const cf = safeGetValue(config, 'families', {})
    this.families = {
      base: safeGetValue(cf, 'base', defaultTypography.families.base),
      fallback: safeGetValue(cf, 'fallback', defaultTypography.families.fallback),
    }

    const cw = safeGetValue(config, 'weights', {})
    this.weights = {
      base: safeGetValue(cw, 'base', defaultTypography.weights.base),
      lighter: safeGetValue(cw, 'lighter', defaultTypography.weights.lighter),
      light: safeGetValue(cw, 'light', defaultTypography.weights.light),
      semiBold: safeGetValue(cw, 'semiBold', defaultTypography.weights.semiBold),
      bold: safeGetValue(cw, 'bold', defaultTypography.weights.bold),
    }

    const cs = safeGetValue(config, 'sizes', {})
    this.sizes = {
      base: safeGetValue(cs, 'base', defaultTypography.sizes.base),
      small: safeGetValue(cs, 'small', defaultTypography.sizes.small),
      large: safeGetValue(cs, 'large', defaultTypography.sizes.large),
      min: safeGetValue(cs, 'min', defaultTypography.sizes.min),
      max: safeGetValue(cs, 'max', defaultTypography.sizes.max),
      h1: safeGetValue(cs, 'h1', defaultTypography.sizes.h1),
      h2: safeGetValue(cs, 'h2', defaultTypography.sizes.h2),
      h3: safeGetValue(cs, 'h3', defaultTypography.sizes.h3),
      h4: safeGetValue(cs, 'h4', defaultTypography.sizes.h4),
      h5: safeGetValue(cs, 'h5', defaultTypography.sizes.h5),
      h6: safeGetValue(cs, 'h6', defaultTypography.sizes.h6),
    }

    console.log('TypographyConfig', this)
  }
}

export default TypographyConfig
