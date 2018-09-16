import React from 'react'
import { cx } from 'react-emotion'

export const HeadingSectionSub = (props) => {
  return (
    <h3 className={cx('heading', 'heading-section-sub', props.className)}>
      {props.children}
    </h3>
  )
}

export default HeadingSectionSub
