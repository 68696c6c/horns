import React from 'react'
import PropTypes from 'prop-types'

const LinkMailto = (props) => {
  let href = `mailto:${props.email}`
  if (props.subject) {
    href += `?subject=${props.subject}`
    if (props.body) {
      href += `&body=${props.body}`
    }
  }
  return (
    <a href={href} className={props.className}>{props.children}</a>
  )
}

LinkMailto.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
}

export default LinkMailto
