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
  styles: {
    paragraph: {
      family: 'primary',
      style: 'normal',
      weight: 'bold',
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
      weight: 'bold',
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
      weight: 'base',
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
      weight: 'base',
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
      weight: 'bold',
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
      weight: 'base',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
      hover: {
        decoration: 'underline',
      },
      active: {
        decoration: 'underline',
      },
    },
    caption: {
      family: 'secondary',
      style: 'normal',
      weight: 'base',
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
      weight: 'base',
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
      weight: 'base',
      align: 'left',
      justify: 'none',
      transform: 'none',
      decoration: 'none',
      kerning: 'base',
      tracking: 'base',
    },
  },
}

export const fontStyles = [
  'paragraph',
  'heading',
  'quote',
  'text',
  'button',
  'link',
  'caption',
  'legal',
  'code',
]

const getConfigStyle = (tc, styles, style) => {
  let def = defaultTypography.styles[style]
  if (isUndefined(def)) {
    def = defaultTypography.styles.text
  }
  const cs = safeGetValue(styles, style, {})
  const hover = isUndefined(cs.hover)
    ? {}
    : { decoration: safeGetValue(cs.hover, 'decoration', 'none') }
  const active = isUndefined(cs.active)
    ? {}
    : { decoration: safeGetValue(cs.active, 'decoration', 'none') }
  const family = tc.families[safeGetValue(cs, 'family', def.family)]
  const weight = tc.weights[safeGetValue(cs, 'weight', def.weight)]
  return {
    family: `"${family.base}", ${family.fallback}`,
    style: safeGetValue(cs, 'style', def.style),
    weight,
    align: safeGetValue(cs, 'align', def.align),
    justify: safeGetValue(cs, 'justify', def.justify),
    transform: safeGetValue(cs, 'transform', def.transform),
    decoration: safeGetValue(cs, 'decoration', def.decoration),
    kerning: safeGetValue(cs, 'kerning', def.kerning),
    tracking: safeGetValue(cs, 'tracking', def.tracking),
    hover,
    active,
  }
}

class TypographyConfig {
  constructor(config = {}) {
    const cf = safeGetValue(config, 'families', {})
    const primary = safeGetValue(cf, 'primary', {})
    const primaryD = defaultTypography.families.primary
    const secondary = safeGetValue(cf, 'secondary', {})
    const secondaryD = defaultTypography.families.secondary
    const tertiary = safeGetValue(cf, 'tertiary', {})
    const tertiaryD = defaultTypography.families.tertiary
    this.families = {
      primary: {
        base: safeGetValue(primary, 'base', primaryD.base),
        fallback: safeGetValue(primary, 'fallback', primaryD.fallback),
        kerning: safeGetValue(primary, 'kerning', primaryD.kerning),
        tracking: safeGetValue(primary, 'tracking', primaryD.tracking),
      },
      secondary: {
        base: safeGetValue(secondary, 'base', secondaryD.base),
        fallback: safeGetValue(secondary, 'fallback', secondaryD.fallback),
        kerning: safeGetValue(secondary, 'kerning', secondaryD.kerning),
        tracking: safeGetValue(secondary, 'tracking', secondaryD.tracking),
      },
      tertiary: {
        base: safeGetValue(tertiary, 'base', tertiaryD.base),
        fallback: safeGetValue(tertiary, 'fallback', tertiaryD.fallback),
        kerning: safeGetValue(tertiary, 'kerning', tertiaryD.kerning),
        tracking: safeGetValue(tertiary, 'tracking', tertiaryD.tracking),
      },
    }

    const cw = safeGetValue(config, 'weights', {})
    const dw = defaultTypography.weights
    this.weights = {
      base: safeGetValue(cw, 'base', dw.base),
      lighter: safeGetValue(cw, 'lighter', dw.lighter),
      light: safeGetValue(cw, 'light', dw.light),
      semiBold: safeGetValue(cw, 'semiBold', dw.semiBold),
      bold: safeGetValue(cw, 'bold', dw.bold),
      bolder: safeGetValue(cw, 'bolder', dw.bolder),
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
    const dsp = defaultTypography.spacing
    this.spacing = {
      base: safeGetValue(csp, 'base', dsp.base),
      paragraph: safeGetValue(csp, 'paragraph', dsp.paragraph),
      heading: safeGetValue(csp, 'heading', dsp.heading),
    }

    const cl = safeGetValue(config, 'letting', {})
    const dl = defaultTypography.letting
    this.letting = {
      base: safeGetValue(cl, 'base', dl.base),
      paragraph: safeGetValue(cl, 'paragraph', dl.paragraph),
      heading: safeGetValue(cl, 'heading', dl.heading),
    }

    this.indent = safeGetValue(config, 'indent', defaultTypography.indent)

    const ch = safeGetValue(config, 'hyphenation', {})
    this.hyphenation = {
      wrap: safeGetValue(ch, 'wrap', defaultTypography.hyphenation.wrap),
      break: safeGetValue(ch, 'break', defaultTypography.hyphenation.break),
    }

    const cst = safeGetValue(config, 'styles', {})
    this.styles = {
      paragraph: getConfigStyle(this, cst, 'paragraph'),
      heading: getConfigStyle(this, cst, 'heading'),
      quote: getConfigStyle(this, cst, 'quote'),
      text: getConfigStyle(this, cst, 'text'),
      button: getConfigStyle(this, cst, 'button'),
      link: getConfigStyle(this, cst, 'link'),
      caption: getConfigStyle(this, cst, 'caption'),
      legal: getConfigStyle(this, cst, 'legal'),
      code: getConfigStyle(this, cst, 'code'),
    }

    console.log('TypographyConfig', this)
  }

  getStyle(style) {
    console.log('TypographyConfig styles', style, this.styles)
    if (this.styles[style]) {
      return this.styles[style]
    }
    return this.styles.text
  }
}

export default TypographyConfig
