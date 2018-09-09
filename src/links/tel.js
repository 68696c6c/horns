import React from 'react'
import PropTypes from 'prop-types'

const LinkTel = (props) => {
  return (
    <a href={`tel:${props.phone}`} {...props}>{props.children}</a>
  )
}

LinkTel.propTypes = {
  phone: PropTypes.string.isRequired,
}

export default LinkTel
