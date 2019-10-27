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
]

export const colorShades = ['darker', 'dark', 'base', 'light', 'lighter']

const basePallet = {
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
  primary: '#FFAA00',
  secondary: '#3914AF',
  tertiary: '#009999',
  light: basePallet.white,
  neutral: basePallet.gray,
  dark: basePallet.black,
  success: basePallet.green,
  info: basePallet.blue,
  warning: basePallet.orange,
  danger: basePallet.red,
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
