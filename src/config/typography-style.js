import TypographyConfig from './typography'
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

// const makeTypographyStyle = (typographyConfig, style, variant) => {
//
//   return {
//     family: `${family.base} ${family.fallback}`,
//     size,
//     weight,
//     spacing: {
//       margin: '',
//       lineHeight: '',
//       textIndent: '',
//     },
//     justification: {
//       wordSpacing: 'normal',
//       textAlign: 'left',
//       textJustify: 'auto',
//     },
//     hyphenation: {
//       wordBreak: 'normal',
//       wordWrap: 'normal',
//     },
//     kerning: {
//       letterSpacing: 'normal',
//       fontKerning: 'auto',
//     },
//     nestedStyles: {
//       firstWord: {},
//       firstLine: {},
//       // Style the first word in a paragraph differently.
//       dropCap: {},
//       // Style a specific word differently. e.g. inserting trademark on certain words.
//       match: {},
//     }
//   }
// }

// paragraph style (base)
// character styles (exceptions to the rules, e.g. things like italic, color, changing a very specific attribute)
// paragraph nested styles: rules for when to apply character styles to paragraph text
// heading styles
// prominent style: maybe a variant of the paragraph style for emphasis etc
// span style: small snippets of text like button text etc that are not part of the paragraph style

// @TODO get default values from a config file.
const defaultTypography = {
  styles: {
    // base paragraph style: plain old text; configurable hyphenation behavior, spacing, weight, and size
    // mixins for justified, nested styles, and families
    paragraph: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    // base heading style; configurable hyphenation behavior, spacing, weight, and size
    // mixins for nested styles, transformations, and families
    headings: {
      h1: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      h2: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      h3: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      h4: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      h5: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      h6: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
    },
    // base style for text snippets like button text, labels, form inputs, spans, captions, etc.
    text: {
      // e.g. spans
      base: {},
      // e.g. button text
      action: {},
      caption: {},
      legal: {},
    },
    prominent: {},
    // CSS values
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
    // Style a specific word differently. e.g. inserting trademark on certain words.
    match: {},
  },
}

const typographyFamilies = [
  'primary',
  'secondary',
  'tertiary',
]

const headings = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]

const makeParagraphStyle = (tc, variant) => {
  let family = tc.families[variant]
  if (!typographyFamilies.includes(variant)) {
    family = tc.families.primary
  }
  return {
    family: `${family.base} ${family.fallback}`,
    size: '1rem',
    weight: tc.weights.base,
    spacing: {
      margin: '1em 0',
      lineHeight: tc.spacing.lineHeight,
      textIndent: tc.spacing.indent,
      letterSpacing: tc.spacing.kerning,
      wordSpacing: tc.spacing.tracking,
      fontKerning: 'auto',
    },
    justification: {
      wordSpacing: 'normal',
      textAlign: tc.alignment.paragraph,
      textJustify: tc.alignment.justification,
    },
    hyphenation: {
      wordBreak: tc.hyphenation.break,
      wordWrap: tc.hyphenation.wrap,
    },
  }
}

const makeHeadingStyle = (tc, variant, level) => {
  let family = tc.families[variant]
  if (!typographyFamilies.includes(variant)) {
    family = tc.families.primary
  }
  const major = ['h1', 'h2', 'h3'].includes(level)
  return {
    family: `${family.base} ${family.fallback}`,
    size: tc.sizes[level],
    weight: major ? tc.weights.bold : tc.weights.semiBold,
    spacing: {
      margin: `${tc.spacing.heading} 0`,
      lineHeight: tc.spacing.lineHeight,
      textIndent: tc.spacing.indent,
      letterSpacing: tc.spacing.kerning,
      wordSpacing: tc.spacing.tracking,
      fontKerning: 'auto',
    },
    justification: {
      wordSpacing: 'normal',
      textAlign: tc.alignment.heading,
      textJustify: tc.alignment.justification,
    },
    hyphenation: {
      wordBreak: tc.hyphenation.break,
      wordWrap: tc.hyphenation.wrap,
    },
  }
}

const makeTextStyle = (tc, variant, level) => {
  let family = tc.families[variant]
  if (!typographyFamilies.includes(variant)) {
    family = tc.families.primary
  }
  const major = ['h1', 'h2', 'h3'].includes(level)
  return {
    family: `${family.base} ${family.fallback}`,
    size: tc.sizes[level],
    weight: major ? tc.weights.bold : tc.weights.semiBold,
    spacing: {
      margin: `${tc.spacing.heading} 0`,
      lineHeight: tc.spacing.lineHeight,
      textIndent: tc.spacing.indent,
      letterSpacing: tc.spacing.kerning,
      wordSpacing: tc.spacing.tracking,
      fontKerning: 'auto',
    },
    justification: {
      wordSpacing: 'normal',
      textAlign: tc.alignment.heading,
      textJustify: tc.alignment.justification,
    },
    hyphenation: {
      wordBreak: tc.hyphenation.break,
      wordWrap: tc.hyphenation.wrap,
    },
  }
}

class TypographyStyle {
  constructor(tc, family, type) {
    if (!(tc instanceof TypographyConfig)) {
      throw new Error('TypographyStyle: invalid TypographyConfig')
    }

    let fontFamily = tc.families[family]
    if (typographyFamilies.includes(family)) {
      fontFamily = tc.families.primary
    }
    // this.family = `${fontFamily.base} ${fontFamily.fallback}`

    if (headings.includes(type)) {
      this.size = tc.sizes[type]
      if (['h1', 'h2', 'h3'].includes(type)) {
        this.weight = tc.weights.bold
      } else {
        this.weight = tc.weights.semiBold
      }
    } else if (type === 'paragraph') {
      this.size = '1rem'
      this.weight = tc.weights.base
    } else {
      this.size = '1rem'
      this.weight = tc.weights.base
    }

    // this.family = ''
    // this.size = ''
    this.weight = ''
    this.spacing = {
      margin: '',
      lineHeight: '',
      textIndent: '',
    }
    this.justification = {
      wordSpacing: 'normal',
      textAlign: 'left',
      textJustify: 'auto',
    }
    this.hyphenation = {
      wordBreak: 'normal',
      wordWrap: 'normal',
    }
    this.kerning = {
      letterSpacing: 'normal',
      fontKerning: 'auto',
    }
    this.nestedStyles = {
      firstWord: {},
      firstLine: {},
      // Style the first word in a paragraph differently.
      dropCap: {},
      // Style a specific word differently. e.g. inserting trademark on certain words.
      match: {},
    }

    // this.primary = {
    //   paragraph: makeParagraphStyle(tc, 'primary'),
    //   h1: makeHeadingStyle(tc, 'primary', 'h1'),
    //   h2: makeHeadingStyle(tc, 'primary', 'h2'),
    //   h3: makeHeadingStyle(tc, 'primary', 'h3'),
    //   h4: makeHeadingStyle(tc, 'primary', 'h4'),
    //   h5: makeHeadingStyle(tc, 'primary', 'h5'),
    //   h6: makeHeadingStyle(tc, 'primary', 'h6'),
    //   base: {},
    //   action: {},
    //   caption: {},
    //   legal: {},
    // }

    this.paragraph = {
      primary: makeParagraphStyle(tc, 'primary'),
      secondary: makeParagraphStyle(tc, 'secondary'),
      tertiary: makeParagraphStyle(tc, 'tertiary'),
    }

    this.heading = {
      primary: {
        h1: makeHeadingStyle(tc, 'primary', 'h1'),
        h2: makeHeadingStyle(tc, 'primary', 'h2'),
        h3: makeHeadingStyle(tc, 'primary', 'h3'),
        h4: makeHeadingStyle(tc, 'primary', 'h4'),
        h5: makeHeadingStyle(tc, 'primary', 'h5'),
        h6: makeHeadingStyle(tc, 'primary', 'h6'),
      },
      secondary: {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
      },
      tertiary: {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
      },
    }

    this.text = {
      base: {},
      action: {},
      caption: {},
      legal: {},
    }

    console.log('TypographyStyle', this)
  }
}

export default TypographyStyle
