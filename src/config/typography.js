import { safeGetValue } from './utils'


const hyphenation = {
  wordBreak: '',
  wordWrap: '',
}

const justification = {
  wordSpacing: '',
  textAlign: '',
  textJustify: '',
}

const spacing = {
  margin: '',
  lineHeight: '',
  textIndent: '',
}

const kerning = {
  letterSpacing: '',
  fontKerning: '',
}

const typographyStyle = {
  font: 'Arial',
  typeface: 'bold',
  size: 'base',
  weight: 'base',
  spacing: '',
  justification: '',
  hyphenation: '',
  kerning: '',
  nestedStyles: [
    {
      rule: '',
      style: '',
    },
  ],
}

const typographyStyles = {
  paragraph: {},
  characterStyles: {},
  nestedStyles: {
    rule: '',
    style: '',
  },
  headingStyles: {},
  prominent: {},
  block: {},
}

const nestedStyleRules = [
  'firstWord',
  'firstLine',
  // Style the first word in a paragraph differently.
  'dropCap',
  // Style a specific word differently.
  'match',
]

const makeNestedStyle = (rule, style) => {
  return {
    rule,
    style,
  }
}

const makeTypographyStyle = (family, weight, size) => {
  return {
    family: `${family.base} ${family.fallback}`,
    size,
    weight,
    spacing: {
      margin: '',
      lineHeight: '',
      textIndent: '',
    },
    justification: {
      wordSpacing: '',
      textAlign: '',
      textJustify: '',
    },
    hyphenation: {
      wordBreak: '',
      wordWrap: '',
    },
    kerning: {
      letterSpacing: '',
      fontKerning: '',
    },
    nestedStyles: [
      {
        rule: '',
        style: '',
      },
    ],
  }
}

// paragraph style (base)
// character styles (exceptions to the rules, e.g. things like italic, color, changing a very specific attribute)
// paragraph nested styles: rules for when to apply character styles to paragraph text
// heading styles
// prominent style: maybe a variant of the paragraph style for emphasis etc
// span style: small snippets of text like button text etc that are not part of the paragraph style

// @TODO get default values from a config file.
const defaultTypography = {
  lineHeight: '1.6em',
  headingMargin: '.75em 0',
  families: {
    primary: {
      base: 'Helvetica',
      fallback: 'sans-serif',
    },
    secondary: {
      base: 'Arial',
      fallback: 'sans-serif',
    },
    tertiary: {
      base: 'Times New Roman',
      fallback: 'serif',
    },
  },
  weights: {
    base: 400,
    lighter: 100,
    light: 200,
    semiBold: 600,
    bold: 700,
    bolder: 900,
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
  styles: {
    paragraph: {},
    headings: {},
    prominent: {},
    caption: {},
    icon: {},
    menu: {},
    messageBox: {},
    smallCaption: {},
    statusBar: {},
  },
  nestedStyles: {
    firstWord: {},
    firstLine: {},
    // Style the first word in a paragraph differently.
    dropCap: {},
    // Style a specific word differently.
    match: {},
  },
}

class TypographyConfig {
  constructor(config = {}) {
    this.lineHeight = safeGetValue(config, 'lineHeight', defaultTypography.lineHeight)
    this.headingMargin = safeGetValue(config, 'headingMargin', defaultTypography.headingMargin)

    const cf = safeGetValue(config, 'families', {})
    const familyPrimary = safeGetValue(cf, 'primary', {})
    const familySecondary = safeGetValue(cf, 'secondary', {})
    const familyTertiary = safeGetValue(cf, 'tertiary', {})
    const families = {
      primary: {
        base: safeGetValue(familyPrimary, 'base', defaultTypography.families.primary.base),
        fallback: safeGetValue(familyPrimary, 'fallback', defaultTypography.families.primary.fallback),
      },
      secondary: {
        base: safeGetValue(familySecondary, 'base', defaultTypography.families.secondary.base),
        fallback: safeGetValue(familySecondary, 'fallback', defaultTypography.families.secondary.fallback),
      },
      tertiary: {
        base: safeGetValue(familyTertiary, 'base', defaultTypography.families.tertiary.base),
        fallback: safeGetValue(familyTertiary, 'fallback', defaultTypography.families.tertiary.fallback),
      },
    }
    this.families = families

    const cw = safeGetValue(config, 'weights', {})
    const weights = {
      base: safeGetValue(cw, 'base', defaultTypography.weights.base),
      lighter: safeGetValue(cw, 'lighter', defaultTypography.weights.lighter),
      light: safeGetValue(cw, 'light', defaultTypography.weights.light),
      semiBold: safeGetValue(cw, 'semiBold', defaultTypography.weights.semiBold),
      bold: safeGetValue(cw, 'bold', defaultTypography.weights.bold),
      bolder: safeGetValue(cw, 'bolder', defaultTypography.weights.bolder),
    }
    this.weights = weights

    const cs = safeGetValue(config, 'sizes', {})
    const sizes = {
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
    this.sizes = sizes

    this.styles = {
      paragraph: makeTypographyStyle(families.primary, weights.base, sizes.base),
      headings: {},
      prominent: {},
      caption: {},
      icon: {},
      menu: {},
      messageBox: {},
      smallCaption: {},
      statusBar: {},
    }

    console.log('TypographyConfig', this)
  }

  getWeight(weight) {
    if (this.weights[weight]) {
      return this.weights[weight]
    }
    return this.weights.base
  }
}

export default TypographyConfig
