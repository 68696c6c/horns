import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import MaskedInput from 'react-text-mask'

import { ERROR_CLASS } from '../utils'
import { Bordered, Roundable } from '../../../mixins'

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

export const inputStyles = [
  Roundable,
  Bordered,
  ({ theme }) => {
    return css`
      display: block;
      background: ${theme.colors.background.secondary};
      color: ${theme.colors.copy.primary};
      border-color: ${theme.colors.background.tertiary};
      margin: 0 0 ${theme.spacing.tiny} 0;
      padding: ${theme.spacing.getSpacing('xSmall')};
      &.${ERROR_CLASS} {
        border: ${theme.inputs.borderWidth} solid
          ${theme.colors.getSwatch('danger')};
        &::placeholder {
          color: ${theme.colors.getSwatch('danger')};
        }
      }
      &[disabled] {
        background: ${theme.colors.background.inactive};
        cursor: not-allowed;
      }
    `
  },
]

export const Input = styled.input(...inputStyles)
export const InputMasked = styled(MaskedInput)(...inputStyles)
export const Textarea = styled.textarea(...inputStyles)
