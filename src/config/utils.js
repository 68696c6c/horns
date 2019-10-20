/* eslint-disable import/prefer-default-export */

export const safeGetValue = (config, key, defaultValue) => {
  return typeof config[key] === 'undefined' ? defaultValue : config[key]
}

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
