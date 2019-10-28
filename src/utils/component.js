import PropTypes from 'prop-types'

const toClassNames = (...values) => values.join(' ').trim()

export const propTypeChildren = () =>
  PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ])

export const handleProps = ({ className, ...others }, name = '') => {
  const props = {
    className: toClassNames(name, className),
    ...others,
  }
  return props
}
