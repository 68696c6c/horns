import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import { rgb } from '../../themes/utils'
import { ERROR_CLASS } from './utils'

export const baseLabel = (theme) => {
  return css`
    font-size: 1em;
    color: ${rgb(theme.colors.copy.default)};
    &.${ERROR_CLASS} {
      color: ${rgb(theme.colors.danger.default)};
    }
    &.required::after {
      content: "*";
    }
  `
}

const Styled = styled('label')`
  display: block;
  margin: 1em 0 0 0;
  ${({ theme }) => baseLabel(theme)}
`

const Label = ({ htmlFor, required, hasError, className, children, ...others }) => {
  const reqClass = required ? 'required' : ''
  const errorClass = hasError ? ERROR_CLASS : ''
  return <Styled htmlFor={htmlFor} className={cx(className, reqClass, errorClass)} {...others}>{children}</Styled>
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  children: PropTypes.string,
}

Label.defaultProps = {
  htmlFor: '',
  required: false,
  hasError: false,
}

export default Label
