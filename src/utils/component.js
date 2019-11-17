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

export const elementPropTypes = () => ({
  ...childrenPropTypes(),
  ...colorwayPropTypes(),
})

export const elementDefaultProps = () => ({
  ...childrenDefaultProps(),
  ...colorwayDefaultProps(),
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

export const Clickable = () => css`
  cursor: pointer;
`

export const Roundable = ({ theme }) => css`
  border-radius: ${theme.radius};
`

export const Bordered = ({ theme }) => css`
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
`
