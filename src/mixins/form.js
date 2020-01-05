import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { ERROR_CLASS } from '../config'
import { BorderedInput, Roundable } from './component'
import { Font } from './typography'

export const inputPropTypes = () => ({
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
})

export const inputDefaultProps = () => ({
  name: '',
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  errorMessage: '',
})

export const InputSpacing = ({ theme }) => css`
  display: block;
  margin: 0 0 ${theme.spacing.getSpacing('small')} 0;
`

export const InputWidth = () => css`
  width: 12em;
`

export const InputWrapper = () => css`
  input:not([type='checkbox']):not([type='radio']):not([type='submit']),
  textarea,
  .select-custom-container {
    width: 100%;
  }
`

export const inputStyles = [
  Font,
  Roundable,
  BorderedInput,
  InputSpacing,
  InputWidth,
  ({ theme }) => {
    const style = theme.typography.getStyle('label')
    const cw = theme.colors.getShade('background:secondary')
    return css`
      padding: ${theme.spacing.getSpacing('xSmall')};
      background: ${cw.base};
      color: ${cw.readable};
      border-color: ${theme.colors.getSwatch('background:tertiary')};
      line-height: ${style.letting};
      &.${ERROR_CLASS} {
        border-color: ${theme.colors.getSwatch('danger')};
        &::placeholder {
          color: ${theme.colors.getSwatch('danger')};
        }
      }
      &[disabled] {
        background: ${theme.colors.getSwatch('background:inactive')};
        cursor: not-allowed;
      }
    `
  },
]
