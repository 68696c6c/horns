import { colorFactors, safeGetValue } from './utils'

const defaultColorFactors = {
  alpha: 0.3,
  darker: 0.5,
  dark: 0.2,
  light: 0.2,
  lighter: 0.5,
}

class ColorFactors {
  constructor(config = {}) {
    colorFactors.forEach(factor => {
      this[factor] = safeGetValue(config, factor, defaultColorFactors[factor])
    })
  }
}

export default ColorFactors
