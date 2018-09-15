import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'react-emotion'

const Button = ({ href, className, children, ...others }) => {
  return (
    <a href={href} className={cx('button', className)} {...others}>
      {children}
    </a>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default Button
