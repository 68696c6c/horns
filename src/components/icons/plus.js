import React from 'react'
import { cx } from 'react-emotion'

export const IconPlus = ({ className }) => {
  return (
    <svg className={cx('svg-icon', 'svg-icon-plus', className)} viewBox="0 0 317.78 318.06">
      <path className={cx('circle-top')} d="M276.47,158.85a117.54,117.54,0,0,0-235.08,0H.08C.08,71.26,71.34,0,158.93,0S317.78,71.26,317.78,158.85Z"/>
      <path className={cx('circle-bottom')} d="M317.7,159.21c0,87.59-71.26,158.85-158.85,158.85S0,246.8,0,159.21H41.32a117.54,117.54,0,1,0,235.07,0Z"/>
      <polygon className={cx('icon')} points="223.97 143.01 174.03 143.01 174.03 93.06 141.86 93.06 141.86 143.01 91.9 143.01 91.9 175.18 141.86 175.18 141.86 225.13 174.03 225.13 174.03 175.18 223.97 175.18 223.97 143.01"/>
    </svg>
  )
}

export default IconPlus
