import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { rgb } from '../../../themes/utils'

export const wrapperStyle = (bgColor, theme) => {
  return css`
    background: ${rgb(bgColor)};
    color: ${bgColor.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)};
    overflow: auto;
  `
}

const Wrapper = ({ variant, children }) => <Styled variant={variant} className="wrapper">{children}</Styled>

Wrapper.propTypes = {
  variant: PropTypes.string,
}

Wrapper.defaultProps = {
  variant: 'background',
}

export default Wrapper
