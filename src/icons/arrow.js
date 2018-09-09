import React from 'react'
import { cx } from 'react-emotion'

export const IconArrow = ({ className }) => {
  return (
    <svg className={cx('svg-icon', 'svg-icon-arrow', className)} viewBox="0 0 317.78 318.06">
      <path className={cx('circle-top')} d="M158.93,41.31A117.53,117.53,0,0,1,276.47,158.85h41.31C317.78,71.26,246.52,0,158.93,0S.08,71.26.08,158.85H41.39A117.53,117.53,0,0,1,158.93,41.31Z"/>
      <path className={cx('circle-bottom')} d="M276.39,161.38a117.54,117.54,0,1,1-235.07-2.17H0C0,246.8,71.26,318.06,158.85,318.06S317.7,246.8,317.7,159.21H276.39C276.4,159.93,276.4,160.65,276.39,161.38Z"/>
      <path className={cx('icon')} d="M175.81,90.87h0a25.07,25.07,0,0,0-35.17-4.53,25.78,25.78,0,0,0-4.52,4.52v0L86.2,155.59a15.19,15.19,0,0,0-1.9,3.23h38.56L156,115.9l33.11,42.92h38.56a15.19,15.19,0,0,0-1.9-3.23Zm-15.15,18.95Z"/>
    </svg>
  )
}

export default IconArrow
