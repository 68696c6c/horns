import React from 'react'
import PropTypes from 'prop-types'
import { container } from '../styles/theme'
import { css, cx } from 'react-emotion'

const TitleBar = ({ centered, className, children, ...others }) => {
  let style = css`padding: 1em;`;
  if (centered) {
    style = css`
      ${container};
      padding-top: 1em;
      padding-bottom: 1em;
    `
  }
  return (
      <header className={cx(style, 'title-bar', className)} {...others}>
        {children}
      </header>
  )
}

TitleBar.propTypes = {
  centered: PropTypes.bool,
}

TitleBar.defaultProps = {
  centered: false,
}

export default TitleBar
