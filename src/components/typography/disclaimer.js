import React from 'react'
import { cx } from 'react-emotion'

export const Disclaimer = (props) => {
  return (
    <span className={cx('disclaimer', props.className)}>{props.children}</span>
  )
}

export default Disclaimer
