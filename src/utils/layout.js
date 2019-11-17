import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { breakpoints, spacingSizes } from '../config'
import { colorwayDefaultProps, colorwayPropTypes } from './color'
import { childrenDefaultProps, childrenPropTypes } from './component'

export const textAlignOptions = [
  'left',
  'right',
  'center',
  'justify',
  'initial',
  'inherit',
]

export const flexOptionsX = ['left', 'center', 'right']
export const flexOptionsY = ['top', 'center', 'bottom']

export const Flex = ({ x, y }) => {
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

export const responsivePropTypes = () => ({
  breakpoint: PropTypes.oneOf(breakpoints),
})

export const responsiveDefaultProps = (breakpoint = 'container') => ({
  breakpoint,
})

export const containerPropTypes = () => ({
  ...responsivePropTypes(),
  contained: PropTypes.bool,
  fluid: PropTypes.bool,
})

export const containerDefaultProps = (
  contained = true,
  breakpoint = 'container'
) => ({
  ...responsiveDefaultProps(breakpoint),
  contained,
  fluid: !contained,
})

export const ContainerSplit = ({ theme, contained }) => {
  if (!contained) {
    return ''
  }
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

export const Container = ({ theme, contained, fluid, breakpoint }) => {
  if (!contained || fluid) {
    return ''
  }
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  const container = theme.grid.getContainer()
  const gutter = `calc(((100vw - ${container}) / 2))`
  return css`
    @media (min-width: ${minWidth}) {
      padding-left: ${gutter};
      padding-right: ${gutter};
    }
  `
}

export const Padded = ({
  theme,
  contained,
  spacing,
  padded = '*',
  compact = '*',
}) => {
  if ((padded === '*' && compact) || (compact === '*' && !padded)) {
    return ''
  }
  const padding = theme.spacing.getSpacing(spacing)
  const paddingX = contained
    ? ''
    : css`
        padding-left: ${padding};
        padding-right: ${padding};
      `
  return css`
    padding-top: ${padding};
    padding-bottom: ${padding};
    ${paddingX}
  `
}

export const layoutPropTypes = () => ({
  ...childrenPropTypes(),
  ...colorwayPropTypes(),
  ...containerPropTypes(),
  padded: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
  textAlign: PropTypes.oneOf(textAlignOptions),
})

export const layoutDefaultProps = () => ({
  ...childrenDefaultProps(),
  ...colorwayDefaultProps(),
  ...containerDefaultProps(),
  padded: true,
  spacing: 'medium',
  textAlign: 'inherit',
})
