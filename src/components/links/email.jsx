import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../mixins'
import * as Styled from './styles'

const LinkEmail = ({ email, subject, body, variant, children, ...others }) => {
  let href = `mailto:${email}?`
  href += subject ? `subject=${subject}&` : ''
  href += body ? `body=${body}` : ''
  let Tag = Styled.Link
  if (variant === 'button') {
    Tag = Styled.LinkButton
  }
  return (
    <Tag href={href} {...handleProps(others, 'link-email')}>
      {children}
    </Tag>
  )
}

LinkEmail.propTypes = {
  ...Styled.linkPropTypes(),
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
}

LinkEmail.defaultProps = {
  ...Styled.linkDefaultProps(),
  subject: '',
  body: '',
}

export default LinkEmail
