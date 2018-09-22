import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const WrapperInline = ({ variant, children }) => {
  const style = css`
    display: inline-block;
    background: ${variant === 'dark' ? 'black' : 'none'};
    padding: 1rem;
  `
  return <div className={style}>{children}</div>
}

WrapperInline.propTypes = {
  variant: PropTypes.string,
}

WrapperInline.defaultProps = {
  variant: 'light',
}

export default WrapperInline
