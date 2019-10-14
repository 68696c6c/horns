import Color from 'color'
import { safeGetValue, palletColors } from './utils'

const defaultPallet = {
  primary: '#FFAA00',
  secondary: '#3914AF',
  tertiary: '#009999',
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  green: '#00aa33',
  yellow: '#f6d500',
  orange: '#ff9900',
  red: '#ff3600',
  white: '#ffffff',
  gray: '#999999',
  black: '#000000',
}

class ColorPallet {
  constructor(config = {}) {
    palletColors.forEach(color => {
      const value = safeGetValue(config, color, defaultPallet[color])
      this[color] = Color(value)
    })
  }
}

export default ColorPallet
