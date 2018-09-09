import React from 'react'
import { cx } from 'react-emotion'

export const Banner = (props) => {
  return (
    <div className={cx('hero-banner', props.className)}>
      {props.children}
    </div>
  )
}

export default Banner
