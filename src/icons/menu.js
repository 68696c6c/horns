import React from 'react'
import { css, cx } from 'react-emotion'

export const IconMenu = ({ className }) => {
  const style = css`
    stroke-width: 50px;
  `
  return (
    <svg className={cx('svg-icon', 'icon-menu', className)} viewBox="0 0 350 300">
      <line className={cx('icon-menu-line', style)} x1="0" y1="25" x2="350" y2="25"/>
      <line className={cx('icon-menu-line', style)} x1="0" y1="150" x2="350" y2="150"/>
      <line className={cx('icon-menu-line', style)} x1="0" y1="275" x2="350" y2="275"/>
    </svg>
  )
}

export default IconMenu
