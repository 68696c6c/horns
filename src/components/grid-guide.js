import React from 'react'
import { breakpoints } from '../styles/theme'
import { css, cx } from 'react-emotion'

// Content grid helper
export const GridGuide = (props) => {
  const style = css`
    width: ${breakpoints.max};
    margin: auto;
    background: orange;
    height: 50px;
  `
  return (
    <div className={cx('grid', style, props.className)}/>
  )
}

export default GridGuide
