import React from 'react'
import { cx } from 'react-emotion'

export const Slide = (props) => {
  return (
    <div className={cx('slide', props.className)}>
      {props.children}
    </div>
  )
}

export default Slide
