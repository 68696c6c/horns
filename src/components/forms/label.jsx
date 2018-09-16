import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

export const baseLabel = (theme) => {
  return css`
    font-size: 1em;
    color: ${rgb(theme.colors.copy.default)};
    &.error {
      color: ${rgb(theme.colors.danger.default)};
    }
  `
}

const Label = styled('label')`
  display: block;
  margin: 1em 0 0 0;
  ${({ theme }) => baseLabel(theme)}
`

Label.propTypes = {
  htmlFor: PropTypes.string,
}

Label.defaultProps = {
  htmlFor: '',
}

export default Label
