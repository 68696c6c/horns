import pallet from './pallet'

// @TODO get default values from a config file.
const baseConfig = {
  headingMargin: '.75rem 0',
  gap: '15px',
  radius: '3px',
  breakpoints: {
    min: '320px',
    small: '480px',
    medium: '768px',
    large: '992px',
    max: '1200px',
  },
  colors: {
    primary: pallet.violet,
    secondary: pallet.indigo,
    tertiary: pallet.yellow,
    light: pallet.gray.lightest,
    neutral: pallet.gray.medium,
    dark: pallet.gray.darkest,
    success: pallet.green,
    info: pallet.blue,
    warning: pallet.orange,
    danger: pallet.red,
    copy: pallet.black,
  },
  colorFactors: {
    light: .2,
    dark: .2,
  },
  fontFamilies: {
    default: 'Helvetica',
    fallback: 'sans-serif',
  },
  fontWeights: {
    default: 400,
    lighter: 100,
    light: 200,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    default: '12px',
    min: '12px',
    max: '16px',
    h1: '3.21rem',
    h2: '2.36rem',
    h3: '1.64rem',
    h4: '1.29rem',
    h5: '1.15rem',
    h6: '1rem',
  },
  linkDecorations: {
    default: 'none',
    hover: 'none',
    active: 'none',
  },
}

export const getConfig = (customConfig = {}) => {
  return {
    ...baseConfig,
    ...customConfig,
    breakpoints: {
      ...baseConfig.breakpoints,
      ...customConfig.breakpoints,
    },
    colors: {
      ...baseConfig.colors,
      ...customConfig.colors,
    },
    colorFactors: {
      ...baseConfig.colorFactors,
      ...customConfig.colorFactors,
    },
    fontFamilies: {
      ...baseConfig.fontFamilies,
      ...customConfig.fontFamilies,
    },
    fontWeights: {
      ...baseConfig.fontWeights,
      ...customConfig.fontWeights,
    },
    fontSizes: {
      ...baseConfig.fontSizes,
      ...customConfig.fontSizes,
    },
    linkDecorations: {
      ...baseConfig.linkDecorations,
      ...customConfig.linkDecorations,
    },
  }
}
