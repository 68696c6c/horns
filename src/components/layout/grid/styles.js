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

// /
export const Equal = styled.div(({ theme, colorway, breakpoint, gap }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    ${colorwayCSS(theme, colorway)};
    @media (min-width: ${minWidth}) {
      display: grid;
      grid-gap: ${gap ? theme.grid.gap : '0'};
      grid-template-columns: repeat(
        auto-fit,
        minmax(${theme.grid.columnMin}, 1fr)
      );
    }
  `
})

export const EqualCentered = styled(Equal)(({ theme, breakpoint, gap }) => {
  const container = theme.grid.getContainer()
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    padding-left: calc(((100vw - ${container}) / 2));
    padding-right: calc(((100vw - ${container}) / 2));
    @media (min-width: ${minWidth}) {
      grid-gap: ${gap ? theme.grid.gap : '0'};
      grid-template-columns: repeat(
        auto-fit,
        minmax(${theme.grid.columnMin}, 1fr)
      );
    }
  `
})

const getThirdsTemplateColumns = (theme, fluid, side) => {
  if (fluid) {
    return side === 'left' ? '1fr 2fr' : '2fr 1fr'
  }
  const container = theme.grid.getContainer()
  const gutter = `((100vw - ${container}) / 2)`
  const thirds = [
    `calc((${container} / 3) + ${gutter})`,
    `calc(((${container} / 3) * 2) + ${gutter})`,
  ]
  return side === 'left' ? thirds.join(' ') : thirds.reverse().join(' ')
}

const ThirdsBase = ({ theme, colorway, breakpoint, fluid, gap, side }) => {
  console.log('ThirdsBase')
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    ${colorwayCSS(theme, colorway)};
    @media (min-width: ${minWidth}) {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: ${getThirdsTemplateColumns(theme, fluid, side)};
      grid-gap: ${gap ? theme.grid.gap : '0'};
    }
  `
}

export const Thirds = styled.div(ThirdsBase)

export const ThirdsCentered = styled.div(ContainerSplit, ThirdsBase)
