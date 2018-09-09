import React from 'react'
import { contentContainer } from '../../styles/theme'
import { css, cx } from 'react-emotion'

export const Section = (props) => {
  const style = css`${contentContainer}`
  return (
    <section className={cx('section', style, props.className)}>
      {props.children}
    </section>
  )
}

export default Section
