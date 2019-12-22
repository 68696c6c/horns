import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, linkPropTypes, linkDefaultProps } from '../../mixins'
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
  ...linkPropTypes(),
  phone: PropTypes.string.isRequired,
}

LinkPhone.defaultProps = {
  ...linkDefaultProps(),
}

export default LinkPhone
