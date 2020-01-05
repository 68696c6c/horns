import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colorwayDefaultProps, colorwayPropTypes } from './color'

const toClassNames = (...values) => values.join(' ').trim()

export const handleProps = ({ className, ...others }, name = '') => {
  const props = {
    className: toClassNames(name, className),
    ...others,
  }
  return props
}

export const themePropTypes = () => ({
  theme: PropTypes.shape({
    grid: PropTypes.shape({
      getBreakpoint: PropTypes.func,
    }),
  }),
})

export const themeDefaultProps = () => ({
  theme: {
    grid: {
      getBreakpoint: () => '768px',
    },
  },
})

export const childrenPropTypes = () => ({
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
})

export const childrenDefaultProps = () => ({
  children: null,
})

export const childrenTextPropTypes = () => ({
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
})

export const childrenTextDefaultProps = () => ({
  children: '',
})

export const elementPropTypes = () => ({
  ...childrenPropTypes(),
  ...colorwayPropTypes(),
})

export const elementDefaultProps = (colorway = '') => ({
  ...childrenDefaultProps(),
  ...colorwayDefaultProps(colorway),
})

export const Sizeable = ({ height, width }) => css`
  height: ${height};
  width: ${width};
`

export const sizeablePropTypes = () => ({
  height: PropTypes.string,
  width: PropTypes.string,
})

export const sizableDefaultProps = (height = 'auto', width = 'auto') => ({
  height,
  width,
})

export const Shadowed = ({ theme }) => css`
  box-shadow: 0 0 50px -20px ${theme.colors.getSwatch('background:active')};
`

export const Clickable = () => css`
  cursor: pointer;
`

export const Roundable = ({ theme }) => css`
  border-radius: ${theme.radius};
`

export const BorderedElement = ({ theme }) => {
  if (theme.borders.elements) {
    return css`
      border-width: ${theme.borders.width};
      border-style: ${theme.borders.style};
    `
  }
  return ''
}

export const BorderedInput = ({ theme }) => {
  if (theme.borders.inputs) {
    return css`
      border-width: ${theme.borders.width};
      border-style: ${theme.borders.style};
    `
  }
  return ''
}

export const Decoratable = ({ theme }) => css`
  text-decoration: ${theme.links.decorations.base};
  &:hover {
    text-decoration: ${theme.links.decorations.hover};
  }
  &:active {
    text-decoration: ${theme.links.decorations.active};
  }
`
