import Color from 'color'
import { safeGetValue } from './utils'

export const palletColors = [
  'primary',
  'secondary',
  'tertiary',
  'light',
  'neutral',
  'dark',
  'success',
  'info',
  'warning',
  'danger',
  'prominent',
]

export const palletColorShades = [
  '',
  'primary',
  'primary-darker',
  'primary-dark',
  'primary-light',
  'primary-lighter',
  'secondary',
  'secondary-darker',
  'secondary-dark',
  'secondary-light',
  'secondary-lighter',
  'tertiary',
  'tertiary-darker',
  'tertiary-dark',
  'tertiary-light',
  'tertiary-lighter',
  'light',
  'light-darker',
  'light-dark',
  'light-light',
  'light-lighter',
  'neutral',
  'neutral-darker',
  'neutral-dark',
  'neutral-light',
  'neutral-lighter',
  'dark',
  'dark-darker',
  'dark-dark',
  'dark-light',
  'dark-lighter',
  'success',
  'success-darker',
  'success-dark',
  'success-light',
  'success-lighter',
  'info',
  'info-darker',
  'info-dark',
  'info-light',
  'info-lighter',
  'warning',
  'warning-darker',
  'warning-dark',
  'warning-light',
  'warning-lighter',
  'danger',
  'danger-darker',
  'danger-dark',
  'danger-light',
  'danger-lighter',
  'prominent',
  'prominent-darker',
  'prominent-dark',
  'prominent-light',
  'prominent-lighter',
]

export const colorShades = ['darker', 'dark', 'base', 'light', 'lighter']

const basePallet = {
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
  gray: '#888888',
  black: '#010101',
}

const defaultPallet = {
  primary: basePallet.primary,
  secondary: basePallet.secondary,
  tertiary: basePallet.tertiary,
  light: basePallet.white,
  neutral: basePallet.gray,
  dark: basePallet.black,
  success: basePallet.green,
  info: basePallet.blue,
  warning: basePallet.orange,
  danger: basePallet.red,
  prominent: basePallet.primary,
  hover: basePallet.secondary,
  active: basePallet.tertiary,
  disabled: basePallet.gray,
}

class ColorPallet {
  constructor(config = {}) {
    palletColors.forEach(color => {
      const value = safeGetValue(config, color, defaultPallet[color])
      this[color] = Color(value)
    })
    const hValue = safeGetValue(config, 'hover', defaultPallet.hover)
    this.hover = Color(hValue)
    const aValue = safeGetValue(config, 'active', defaultPallet.active)
    this.active = Color(aValue)
  }
}

export default ColorPallet
