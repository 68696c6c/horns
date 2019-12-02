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

export const inputStyles = [
  Font,
  Roundable,
  BorderedInput,
  ({ theme }) => css`
    display: block;
    margin: 0 0 ${theme.spacing.getSpacing('tiny')} 0;
    padding: ${theme.spacing.getSpacing('xSmall')};
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.copy.primary};
    border-color: ${theme.colors.background.tertiary};
    &.${ERROR_CLASS} {
      border-color: ${theme.colors.getSwatch('danger')};
      &::placeholder {
        color: ${theme.colors.getSwatch('danger')};
      }
    }
    &[disabled] {
      background: ${theme.colors.background.inactive};
      cursor: not-allowed;
    }
  `,
]
