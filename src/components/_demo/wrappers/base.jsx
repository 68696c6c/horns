/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

const backgroundColorCSS = theme => css`
  background: ${theme.colors.background.primary};
  color: ${theme.colors.copy.primary};
`

export const wrapperStyle = (bgColor, theme) => {
  return css`
    background: ${backgroundColorCSS(theme)};
    overflow: auto;
  `
}

const Styled = styled.div`${({theme }) => wrapperStyle('', theme)};`

const Wrapper = ({ variant, children }) => <Styled variant={variant} className="wrapper">{children}</Styled>

Wrapper.propTypes = {
  variant: PropTypes.string,
}

Wrapper.defaultProps = {
  variant: 'background',
}

export default Wrapper
