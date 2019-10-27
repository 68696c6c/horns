import PropTypes from 'prop-types'

export const toClassNames = (...values) => values.join(' ').trim()

export const propTypeChildren = () =>
  PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ])
