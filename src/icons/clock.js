import React from 'react'
import { cx } from 'react-emotion'

export const IconClock = ({ className }) => {
  return (
    <svg className={cx('svg-icon', 'svg-icon-clock', className)} viewBox="0 0 317.78 318.06">
      <path className={cx('circle-top')} d="M.08,158.85C.08,71.26,71.34,0,158.93,0S317.78,71.26,317.78,158.85H276.47a117.54,117.54,0,0,0-235.08,0Z"/>
      <path className={cx('circle-bottom')} d="M41.32,159.21a117.54,117.54,0,1,0,235.07,0H317.7c0,87.59-71.26,158.85-158.85,158.85S0,246.8,0,159.21Z"/>
      <path className={cx('icon')} d="M204.25,176.17h-60.9V80.51a15.5,15.5,0,0,1,31,0v64.66h29.9a15.5,15.5,0,0,1,0,31Z"/>
    </svg>
  )
}

export default IconClock
