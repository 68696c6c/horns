import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, ContainerSplit, Padded } from '../../../mixins'

export const ContainerGuide = styled.div(
  Colorway,
  ({ theme }) => css`
    width: ${theme.grid.getContainer()};
    margin: ${theme.spacing.getSpacing('small')} auto;
    padding: ${theme.spacing.getSpacing('medium')};
    text-align: center;
  `
)

export const Area = styled.div(
  Colorway,
  Padded,
  ({ area }) =>
    area &&
    css`
      grid-area: ${area};
    `
)

export const Columns = styled.div(
  Colorway,
  ({ theme, columns, breakpoint }) => {
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    let template = `repeat(${columns}, 1fr)`
    if (columns === 0) {
      template = `repeat(auto-fit, minmax(${theme.grid.columnMin}, 1fr))`
    }
    return css`
      @media (min-width: ${minWidth}) {
        display: grid;
        grid-gap: ${theme.grid.gap};
        grid-template-columns: ${template};
      }
    `
  }
)

export const Halves = styled.div(
  ContainerSplit,
  Colorway,
  ({ theme, breakpoint, reversed }) => {
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    let areas = ['left', 'right']
    if (reversed) {
      areas = areas.reverse()
    }
    return css`
      @media (min-width: ${minWidth}) {
        display: grid;
        grid-gap: 0;
        grid-template: '${areas.join(' ')}' / 1fr 1fr;
      }
    `
  }
)

export const Thirds = styled.div(
  ContainerSplit,
  Colorway,
  ({ theme, breakpoint }) => {
    const container = theme.grid.getContainer()
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    const gutter = `((100vw - ${container}) / 2)`
    const fractions = [
      `calc((${container} / 3) + ${gutter})`,
      `calc(((${container} / 3) * 2) + ${gutter})`,
    ]
    return css`
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
  }
)
