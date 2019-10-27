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
  return css`
    > :nth-child(odd) {
      padding-left: calc(((100vw - ${container}) / 2));
      padding-right: 0;
    }
    > :nth-child(even) {
      padding-left: 0;
      padding-right: calc(((100vw - ${container}) / 2));
    }
  `
}

export const fluidRange = (property, sizes, start = 480, end = 1200) => {
  const min = sizes[0]
  const max = sizes[1]
  const multiplier = ((max - min) / (end - start)) * 100
  const adder = (min * end - max * start) / (end - start)

  return `
    ${property}: calc(${multiplier}vw + ${adder}px);

    @media (max-width: ${start}px) {
      ${property}: ${min}px;
    }

    @media (min-width: ${end}px) {
      ${property}: ${max}px;
    }
  `
}

export const Container = ({ theme }) => {
  // const { breakpoints } = theme.grid
  // const min = theme.spacing.getSpacing('xLarge')
  // const max = theme.spacing.getSpacing('xxLarge')
  // const start = valueToInt(breakpoints.small)
  // const end = valueToInt(breakpoints.max)
  // console.log('start, end', start, end)
  // const multiplier = ((max - min) / (end - start)) * 100
  // const adder = (min * end - max * start) / (end - start)
  // const scaledGutters = `calc(${multiplier}vw + ${adder}px)`
  // const maxGutters = `calc((100% - ${breakpoints.max}) / 2)`

  const container = theme.grid.getContainer()
  return css`
    padding-left: calc(((100vw - ${container}) / 2));
    padding-right: calc(((100vw - ${container}) / 2));
  `
}
