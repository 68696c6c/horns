import React from 'react'
import { cx } from 'react-emotion'

export const HeadingHero = (props) => {
  return (
    <h1 className={cx('heading', 'heading-hero', props.className)}>
      {props.children}
    </h1>
  )
}

export default HeadingHero
