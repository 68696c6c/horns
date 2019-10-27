import { css } from '@emotion/core'

export const flexOptionsX = ['left', 'center', 'right']
export const flexOptionsY = ['top', 'center', 'bottom']

export const flexCSS = (x, y) => {
  let alignItems
  let justifyContent
  switch (x) {
    case 'left':
      justifyContent = 'flex-start'
      break
    case 'right':
      justifyContent = 'flex-end'
      break
    default:
      justifyContent = 'center'
  }
  switch (y) {
    case 'top':
      alignItems = 'flex-start'
      break
    case 'bottom':
      alignItems = 'flex-end'
      break
    default:
      alignItems = 'center'
  }
  return css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `
}
