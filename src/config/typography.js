import { isUndefined } from '../utils'
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
      wordSpacing: 'normal',
      textAlign: 'left',
      textJustify: 'auto',
    },
    hyphenation: {
      wordBreak: 'normal',
      wordWrap: 'normal',
    },
    kerning: {
      letterSpacing: 'normal',
      fontKerning: 'auto',
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
  families: {
    primary: {
      base: 'Helvetica',
      fallback: 'sans-serif',
      kerning: '', // letter-spacing
      tracking: '', // word-spacing
    },
    secondary: {
      base: 'Times New Roman',
      fallback: 'serif',
      kerning: '',
      tracking: '',
    },
    tertiary: {
      base: 'Monaco',
      fallback: 'monospace',
      kerning: '',
      tracking: '',
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
  // margin; space before and after the text
  spacing: {
    base: '0',
    paragraph: '1em',
    heading: '.75em',
  },
  // line-height
  letting: {
    base: '1.6em',
    paragraph: '1.6em',
    heading: '1.6em',
  },
  indent: '1em',
  hyphenation: {
    wrap: 'normal',
    break: 'normal',
  },
  // @TODO need to support text decoration based on hover, active, etc
  styles: {
    paragraph: {
      family: 'primary',
      style: 'normal',
      align: 'justify',
      justify: 'auto',
      transform: 'none',
      decoration: 'none',
      // these are modifiers for the base value provided by the typeface.
      kerning: 'base',
      tracking: 'base',
    },
    heading: {
      family: 'primary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    quote: {
      family: 'secondary',
      style: 'italic',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    text: {
      family: 'primary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    button: {
      family: 'primary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    link: {
      family: 'primary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    caption: {
      family: 'secondary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    legal: {
      family: 'primary',
      style: 'italic',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
    code: {
      family: 'tertiary',
      style: 'normal',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
  },
}

const getConfigStyle = (config, style) => {
  let def = defaultTypography.styles[style]
  if (isUndefined(def)) {
    def = defaultTypography.styles.text
  }
  const cs = safeGetValue(config, style, {})
  return {
    family: safeGetValue(cs, 'family', def.family),
    style: safeGetValue(cs, 'style', def.style),
    align: safeGetValue(cs, 'align', def.align),
    justify: safeGetValue(cs, 'justify', def.justify),
    transform: safeGetValue(cs, 'transform', def.transform),
    decoration: safeGetValue(cs, 'decoration', def.decoration),
    kerning: safeGetValue(cs, 'kerning', def.kerning),
    tracking: safeGetValue(cs, 'tracking', def.tracking),
  }
}

class TypographyConfig {
  constructor(config = {}) {
    const cf = safeGetValue(config, 'families', {})
    const familyPrimary = safeGetValue(cf, 'primary', {})
    const familySecondary = safeGetValue(cf, 'secondary', {})
    const familyTertiary = safeGetValue(cf, 'tertiary', {})
    this.families = {
      primary: {
        base: safeGetValue(familyPrimary, 'base', defaultTypography.families.primary.base),
        fallback: safeGetValue(familyPrimary, 'fallback', defaultTypography.families.primary.fallback),
        kerning: safeGetValue(familyPrimary, 'kerning', defaultTypography.families.primary.kerning),
        tracking: safeGetValue(familyPrimary, 'tracking', defaultTypography.families.primary.tracking),
      },
      secondary: {
        base: safeGetValue(familySecondary, 'base', defaultTypography.families.secondary.base),
        fallback: safeGetValue(familySecondary, 'fallback', defaultTypography.families.secondary.fallback),
        kerning: safeGetValue(familySecondary, 'kerning', defaultTypography.families.secondary.kerning),
        tracking: safeGetValue(familySecondary, 'tracking', defaultTypography.families.secondary.tracking),
      },
      tertiary: {
        base: safeGetValue(familyTertiary, 'base', defaultTypography.families.tertiary.base),
        fallback: safeGetValue(familyTertiary, 'fallback', defaultTypography.families.tertiary.fallback),
        kerning: safeGetValue(familyTertiary, 'kerning', defaultTypography.families.tertiary.kerning),
        tracking: safeGetValue(familyTertiary, 'tracking', defaultTypography.families.tertiary.tracking),
      },
    }

    const cw = safeGetValue(config, 'weights', {})
    this.weights = {
      base: safeGetValue(cw, 'base', defaultTypography.weights.base),
      lighter: safeGetValue(cw, 'lighter', defaultTypography.weights.lighter),
      light: safeGetValue(cw, 'light', defaultTypography.weights.light),
      semiBold: safeGetValue(cw, 'semiBold', defaultTypography.weights.semiBold),
      bold: safeGetValue(cw, 'bold', defaultTypography.weights.bold),
      bolder: safeGetValue(cw, 'bolder', defaultTypography.weights.bolder),
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

    const csp = safeGetValue(config, 'spacing', {})
    this.spacing = {
      base: safeGetValue(csp, 'base', defaultTypography.spacing.base),
      paragraph: safeGetValue(csp, 'paragraph', defaultTypography.spacing.paragraph),
      heading: safeGetValue(csp, 'heading', defaultTypography.spacing.heading),
    }

    const cl = safeGetValue(config, 'letting', {})
    this.letting = {
      base: safeGetValue(cl, 'base', defaultTypography.letting.base),
      paragraph: safeGetValue(cl, 'paragraph', defaultTypography.letting.paragraph),
      heading: safeGetValue(cl, 'heading', defaultTypography.letting.heading),
    }

    this.indent = safeGetValue(config, 'indent', defaultTypography.indent)

    const ch = safeGetValue(config, 'hyphenation', {})
    this.hyphenation = {
      wrap: safeGetValue(ch, 'wrap', defaultTypography.hyphenation.wrap),
      break: safeGetValue(ch, 'break', defaultTypography.hyphenation.break),
    }

    const cst = safeGetValue(config, 'styles', {})
    this.styles = {
      paragraph: getConfigStyle(cst, 'paragraph'),
      heading: getConfigStyle(cst, 'heading'),
      quote: getConfigStyle(cst, 'quote'),
      text: getConfigStyle(cst, 'text'),
      button: getConfigStyle(cst, 'button'),
      caption: getConfigStyle(cst, 'caption'),
      legal: getConfigStyle(cst, 'legal'),
      code: getConfigStyle(cst, 'code'),
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
