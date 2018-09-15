import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

// Creates a set of equal sized columns that turn into rows at the specified breakpoint.
const GridEqual = (props) => {
  const gap = typeof props.gap === 'undefined' || props.gap === true ? css`grid-gap: ${props.gap};` : ''
  const style = css`
    @media(min-width: ${props.breakpoint}) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      ${gap};
    }
  `
  return (
    <div className={cx(style, 'grid-columns', props.className)}>
      {props.children}
    </div>
  )
}

GridEqual.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  gap: PropTypes.string.isRequired,
}

export default GridEqual
