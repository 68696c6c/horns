import React from 'react'
import { container } from '../../styles/theme'
import { css, cx } from 'react-emotion'

export const SectionContainer = (props) => {
  const style = css`${container}`
  return (
    <section className={cx('section', 'container', style, props.className)}>
      {props.children}
    </section>
  )
}

export default SectionContainer
