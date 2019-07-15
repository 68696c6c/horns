/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

// @TODO hardcoded 280px on grid-template-columns property
const getChildPadding = (fluid, container) => {
  return fluid ? '' : css`
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
const StyledEqual = styled('div')`
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: ${({ gap, theme }) => gap ? theme.grid.gap : '0px'};
  }
`
const StyledEqualCentered = styled(StyledEqual)`
  padding-left: calc(((100vw - ${({ theme }) => theme.grid.container}) / 2));
  padding-right: calc(((100vw - ${({ theme }) => theme.grid.container}) / 2));
  @media(min-width: ${({ theme }) => theme.grid.container}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: ${({ gap, theme }) => gap ? theme.grid.gap : '0px'};
  }
`
const StyledThirds = styled('div')`
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "left right";
    grid-template-columns: ${({ side }) => side === 'left' ? '1fr 2fr' : '2fr 1fr'};
    grid-gap: ${({ gap, theme }) => gap ? theme.grid.gap : '0px'};
  }
`
const StyledThirdsCentered = styled(StyledThirds)`
  @media(min-width: ${({ theme }) => theme.grid.container}) {
    grid-template-columns: ${({ theme, side }) => {
  const gutter = `((100vw - ${theme.grid.container}) / 2)`
  const oneThird = `calc((${theme.grid.container} / 3) + ${gutter})`
  const twoThirds = `calc(((${theme.grid.container} / 3) * 2) + ${gutter})`
  return side === 'left' ? `${oneThird} ${twoThirds}` : `${twoThirds} ${oneThird}`
}};
    ${({ fluid, theme }) => getChildPadding(fluid, theme.grid.container)};
  }
`

const Grid = ({ breakpoint, centered, gap, variant, children, ...others }) => {
  let Tag = centered ? StyledEqualCentered : StyledEqual
  if (variant === 'thirds') {
    Tag = centered ? StyledThirdsCentered : StyledThirds
  }
  return (
    <Tag breakpoint={breakpoint} gap={gap} {...others}>
      {children}
    </Tag>
  )
}

Grid.propTypes = {
  breakpoint: PropTypes.oneOf([
    'min',
    'small',
    'medium',
    'large',
    'max',
  ]),
  centered: PropTypes.bool,
  fluid: PropTypes.bool,
  gap: PropTypes.bool,
  variant: PropTypes.oneOf(['equal', 'thirds']),
  side: PropTypes.string,
}

Grid.defaultProps = {
  breakpoint: 'medium',
  centered: false,
  fluid: false,
  gap: true,
  variant: 'equal',
  side: 'left',
}

export default Grid
