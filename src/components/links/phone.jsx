import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../mixins'
import * as Styled from './styles'

const LinkPhone = ({ phone, variant, children, ...others }) => {
  let Tag = Styled.Link
  if (variant === 'button') {
    Tag = Styled.LinkButton
  }
  return (
    <Tag href={`tel:${phone}`} {...handleProps(others, 'link-phone')}>
      {children}
    </Tag>
  )
}

LinkPhone.propTypes = {
  ...Styled.linkPropTypes(),
  phone: PropTypes.string.isRequired,
}

LinkPhone.defaultProps = {
  ...Styled.linkDefaultProps(),
}

export default LinkPhone
