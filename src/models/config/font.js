import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultFontFamilies = {
  base: 'Helvetica',
  fallback: 'sans-serif',
}
const defaultFontWeights = {
  base: 400,
  lighter: 100,
  light: 200,
  semiBold: 600,
  bold: 700,
}
const defaultFontSizes = {
  base: '14px',
  large: '1.5em',
  min: '12px',
  max: '16px',
  h1: '3.21rem',
  h2: '2.36rem',
  h3: '1.64rem',
  h4: '1.29rem',
  h5: '1.15rem',
  h6: '1rem',
}

const getFontConfig = (config = {}) => {
  const cff = safeGetValue(config, 'fontFamilies', {})
  const cfw = safeGetValue(config, 'fontSizes', {})
  const cfs = safeGetValue(config, 'fontSizes', {})
  return {
    families: {
      base: safeGetValue(cff, 'base', defaultFontFamilies.base),
      fallback: safeGetValue(cff, 'fallback', defaultFontFamilies.fallback),
    },
    weights: {
      base: safeGetValue(cfw, 'base', defaultFontWeights.base),
      lighter: safeGetValue(cfw, 'lighter', defaultFontWeights.lighter),
      light: safeGetValue(cfw, 'light', defaultFontWeights.light),
      semiBold: safeGetValue(cfw, 'semiBold', defaultFontWeights.semiBold),
      bold: safeGetValue(cfw, 'bold', defaultFontWeights.bold),
    },
    sizes: {
      base: safeGetValue(cfs, 'base', defaultFontSizes.base),
      large: safeGetValue(cfs, 'large', defaultFontSizes.large),
      min: safeGetValue(cfs, 'min', defaultFontSizes.min),
      max: safeGetValue(cfs, 'max', defaultFontSizes.max),
      h1: safeGetValue(cfs, 'h1', defaultFontSizes.h1),
      h2: safeGetValue(cfs, 'h2', defaultFontSizes.h2),
      h3: safeGetValue(cfs, 'h3', defaultFontSizes.h3),
      h4: safeGetValue(cfs, 'h4', defaultFontSizes.h4),
      h5: safeGetValue(cfs, 'h5', defaultFontSizes.h5),
      h6: safeGetValue(cfs, 'h6', defaultFontSizes.h6),
    },
  }
}

export default getFontConfig
