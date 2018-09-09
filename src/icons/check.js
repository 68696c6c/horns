import React from 'react'
import { cx } from 'react-emotion'

export const IconCheck = ({ className }) => {
  return (
    <svg className={cx('svg-icon', 'svg-icon-check', className)} viewBox="0 0 317.78 318.06">
      <path className={cx('circle-top')} d="M158.93,41.31A117.25,117.25,0,0,1,245.55,79.4H264.4l-8.14,13.54a117,117,0,0,1,20.21,65.91h41.31C317.78,71.26,246.52,0,158.93,0S.08,71.26.08,158.85H41.39A117.53,117.53,0,0,1,158.93,41.31Z"/>
      <path className={cx('circle-bottom')} d="M276.39,161.38a117.54,117.54,0,1,1-235.07-2.17H0C0,246.8,71.26,318.06,158.85,318.06S317.7,246.8,317.7,159.21H276.39C276.4,159.93,276.4,160.65,276.39,161.38Z"/>
      <path className={cx('icon')} d="M245.55,79.4H228.24L157.76,196.66,127.93,158H88.77l49.8,64.55h0a25,25,0,0,0,19.86,9.77,24.95,24.95,0,0,0,15.28-5.21,25,25,0,0,0,4.57-4.56l.55-.71L256.26,92.94,264.4,79.4Z"/>
    </svg>
  )
}

export default IconCheck
