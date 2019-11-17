import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import * as Styled from './styles'

const Link = ({ href, variant, children, ...others }) => {
  let Tag = Styled.Link
  if (variant === 'button') {
    Tag = Styled.LinkButton
  }
  return (
    <Tag href={href} {...handleProps(others, 'link')}>
      {children}
    </Tag>
  )
}

Link.propTypes = {
  ...Styled.linkPropTypes(),
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  ...Styled.linkDefaultProps(),
}

export default Link
