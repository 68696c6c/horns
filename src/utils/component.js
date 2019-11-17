import PropTypes from 'prop-types'
import { colorwayDefaultProps, colorwayPropTypes } from './color'

const toClassNames = (...values) => values.join(' ').trim()

export const propTypeChildren = () =>
  PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ])

export const childrenPropTypes = () => ({
  children: propTypeChildren(),
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

export const handleProps = ({ className, ...others }, name = '') => {
  const props = {
    className: toClassNames(name, className),
    ...others,
  }
  return props
}
