import React from 'react'
import PropTypes from 'prop-types'
import LinkMailto from '../links/mailto'
import { cx } from 'react-emotion'

const ButtonMailTo = ({ email, subject, body, className, children, ...others }) => {
  return (
    <LinkMailto email={email} subject={subject} body={body} className={cx('button', className)}>
      {children}
    </LinkMailto>
  )
}

ButtonMailTo.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string,
}

export default ButtonMailTo
