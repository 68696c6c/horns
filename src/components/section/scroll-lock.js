import React from 'react'
import PropTypes from 'prop-types'
import { contentContainer } from '../../styles/theme'
import { css, cx } from 'react-emotion'

export const SectionScrollLock = (props) => {
  const style = css`
    overflow: scroll;
    height: ${props.height};
    ${contentContainer}
  `
  return (
    <section className={cx('scroll-lock', style, props.className)}>
      {props.children}
    </section>
  )
}

SectionScrollLock.propTypes = {
  height: PropTypes.string.isRequired,
}

export default SectionScrollLock
