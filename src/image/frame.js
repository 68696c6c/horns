import React from 'react'
import { cx } from 'react-emotion'

export const ImageFrame = (props) => {
  return (
    <div className={cx('image-frame', props.className)}>
      {props.children}
    </div>
  )
}

export default ImageFrame
