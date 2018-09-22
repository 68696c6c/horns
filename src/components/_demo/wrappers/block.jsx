import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const WrapperBlock = ({ variant, children }) => {
  const style = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${variant === 'dark' ? 'black' : 'none'};
    padding: 1rem;
  `
  return <div className={style}>{children}</div>
}

WrapperBlock.propTypes = {
  variant: PropTypes.string,
}

WrapperBlock.defaultProps = {
  variant: 'light',
}

export default WrapperBlock
