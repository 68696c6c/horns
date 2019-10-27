import { css } from '@emotion/core'
import { valueToInt } from './utils'

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

export const ContainerSplit = ({ theme }) => {
  const container = theme.grid.getContainer()
  const gutter = `calc(((100vw - ${container}) / 2))`
  return css`
    > :nth-child(odd) {
      padding-left: ${gutter};
      padding-right: 0;
    }
    > :nth-child(even) {
      padding-left: 0;
      padding-right: ${gutter};
    }
  `
}

export const Container = ({ theme }) => {
  const container = theme.grid.getContainer()
  return css`
    padding-left: calc(((100vw - ${container}) / 2));
    padding-right: calc(((100vw - ${container}) / 2));
  `
}
