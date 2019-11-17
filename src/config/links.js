import { safeGetValue } from './utils'

// @TODO get default values from a config file.
const defaultLinks = {
  decorations: {
    base: 'none',
    hover: 'underline',
    active: 'underline',
  },
}

class LinksConfig {
  constructor(config = {}) {
    const cd = safeGetValue(config, 'decorations', defaultLinks.decorations)
    this.decorations = {
      base: safeGetValue(cd, 'base', defaultLinks.decorations.base),
      hover: safeGetValue(cd, 'hover', defaultLinks.decorations.hover),
      active: safeGetValue(cd, 'active', defaultLinks.decorations.active),
    }
    console.log('LinksConfig', this)
  }
}

export default LinksConfig
