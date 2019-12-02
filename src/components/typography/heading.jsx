import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

// @TODO add support for 'auto', to set the level based on where the heading is in the page hierarchy.
const Heading = ({ children, level: baseLevel, ...others }) => {
  const props = others
  let Tag
  let level = baseLevel
  switch (baseLevel) {
    case 'h1':
      Tag = Styled.H1
      break
    case 'h2':
      Tag = Styled.H2
      break
    case 'h3':
      Tag = Styled.H3
      break
    case 'h4':
      Tag = Styled.H4
      break
    case 'h5':
      Tag = Styled.H5
      break
    case 'h6':
      Tag = Styled.H6
      break
    default:
      Tag = Styled.H1
      level = 'h1'
  }
  return (
    <Tag {...handleProps(props, 'heading')} level={level}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  ...fontPropTypes(),
  level: PropTypes.oneOf(['auto', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

Heading.defaultProps = {
  ...fontDefaultProps('heading'),
  level: 'auto',
}

export default Heading
