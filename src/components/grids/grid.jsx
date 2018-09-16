import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

// @TODO hardcoded 280px on grid-template-columns property
const StyledEqual = styled('div')`
  @media(min-width: ${props => props.theme.breakpoints[props.breakpoint]}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: ${props => props.gap ? props.theme.grid.gap : '0px'};
  }
`

const StyledThirds = styled('div')`
  @media(min-width: ${props => props.theme.breakpoints[props.breakpoint]}) {
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "left right";
    grid-template-columns: ${props => props.side === 'left' ? '2fr 1fr' : '1fr 2fr'};
    grid-gap: ${props => props.gap ? props.theme.grid.gap : '0px'};
  }
  @media(min-width: ${props => props.theme.grid.container}) {
    grid-template-columns: ${props => {
      const gutter = `((100vw - ${props.theme.grid.container}) / 2)`
      const oneThird = `calc((${props.theme.grid.container} / 3) + ${gutter})`
      const twoThirds = `calc(((${props.theme.grid.container} / 3) * 2) + ${gutter})`
      return props.side === 'left' ? `${twoThirds} ${oneThird}` : `${oneThird} ${twoThirds}`
    }};
    > :nth-child(odd) {
      padding-left: calc(((100vw - ${props => props.theme.grid.container}) / 2));
      padding-right: 0;
    }
    > :nth-child(even) {
      padding-left: 0;
      padding-right: calc(((100vw - ${props => props.theme.grid.container}) / 2));
    }
  }
`

const Grid = ({ breakpoint, gap, variant, className, children, ...others }) => {
  const Tag = variant === 'equal' ? StyledEqual : StyledThirds
  return (
    <Tag breakpoint={breakpoint} gap={gap} className={cx(className, 'grid')} {...others}>
      {children}
    </Tag>
  )
}

Grid.propTypes = {
  breakpoint: PropTypes.string,
  fluid: PropTypes.bool,
  gap: PropTypes.bool,
  variant: PropTypes.oneOf(['equal', 'thirds']),
  side: PropTypes.string,
}

Grid.defaultProps = {
  breakpoint: 'medium',
  fluid: false,
  gap: true,
  variant: 'equal',
  side: 'left',
}

export default Grid
