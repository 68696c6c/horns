import React from 'react'
import { cx } from 'react-emotion'

export const HeadingCopy = (props) => {
  return (
    <h4 className={cx('heading', 'heading-copy', props.className)}>
      {props.children}
    </h4>
  )
}

export default HeadingCopy
