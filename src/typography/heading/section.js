import React from 'react'
import { cx } from 'react-emotion'

export const HeadingSection = (props) => {
  return (
    <h2 className={cx('heading', 'heading-section', props.className)}>
      {props.children}
    </h2>
  )
}

export default HeadingSection
