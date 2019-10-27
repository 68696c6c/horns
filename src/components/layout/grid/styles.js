/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colorwayCSS, Container, ContainerSplit } from '../../../utils'

export const ContainerGuide = styled.div(
  ({ theme }) => css`
    ${colorwayCSS(theme, 'primary')};
    width: ${theme.grid.getContainer()};
    margin: ${theme.spacing.getSpacing('small')} auto;
    padding: ${theme.spacing.getSpacing('medium')};
    text-align: center;
  `
)

export const Area = styled.div(
  ({ theme, colorway, area }) => css`
    ${colorwayCSS(theme, colorway)};
    ${area && `grid-area: ${area}`};
  `
)

const getTemplateColumns = (theme, columns) => {
  if (columns === 0) {
    return `grid-template-columns: repeat(auto-fit, minmax(${theme.grid.columnMin}, 1fr))`
  }
  return `grid-template-columns: repeat(${columns}, 1fr)`
}

export const Columns = styled.div(
  ({ theme, colorway, columns, breakpoint }) => {
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    return css`
      ${colorwayCSS(theme, colorway)};
      @media (min-width: ${minWidth}) {
        display: grid;
        grid-gap: ${theme.grid.gap};
        ${getTemplateColumns(theme, columns)};
      }
    `
  }
)

export const ColumnsContained = styled(Columns)(Container)

export const Halves = styled.div(
  ({ theme, colorway, breakpoint, reversed }) => {
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    let areas = ['left', 'right']
    if (reversed) {
      areas = areas.reverse()
    }
    return css`
      ${colorwayCSS(theme, colorway)};
      @media (min-width: ${minWidth}) {
        display: grid;
        grid-gap: 0;
        grid-template: '${areas.join(' ')}' / 1fr 1fr;
      }
    `
  }
)

export const HalvesContained = styled(Halves)(ContainerSplit)

export const Thirds = styled.div(({ theme, colorway, breakpoint }) => {
  const container = theme.grid.getContainer()
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  const gutter = `((100vw - ${container}) / 2)`
  const fractions = [
    `calc((${container} / 3) + ${gutter})`,
    `calc(((${container} / 3) * 2) + ${gutter})`,
  ]
  return css`
      ${colorwayCSS(theme, colorway)};
      @media (min-width: ${minWidth}) {
        display: grid;
        grid-gap: 0;
        grid-template: 'left right' / ${fractions.join(' ')};
      }
      @media (max-width: ${container}) {
        display: grid;
        grid-gap: 0;
        grid-template: 'left right' / 1fr 2fr};
      }
    `
})

export const ThirdsContained = styled(Thirds)(ContainerSplit)
