import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Label } from '../../typography'
import { inputStyles } from '../../../mixins'
import { ERROR_CLASS } from '../../../config'

export const ToggleControl = styled.label(
  ...inputStyles,
  ({ theme, round }) => {
    return css`
      content: ' ';
      display: inline-block;
      width: 1.2em;
      min-width: 1.2em;
      height: 1.2em;
      vertical-align: middle;
      margin: 0 ${theme.spacing.getSpacing('xSmall')} 0
        ${theme.spacing.getSpacing('tiny')};
      cursor: pointer;
      ${round ? 'border-radius: 50%;' : ''};
    `
  }
)

ToggleControl.propTypes = {
  round: PropTypes.bool,
}

ToggleControl.defaultProps = {
  round: false,
}

export const ToggleLabel = styled(Label)(({ theme }) => {
  return css`
    display: inline-block;
    cursor: pointer;
    margin: 0 ${theme.spacing.getSpacing('small')} 0 0;
  `
})

export const Toggle = styled.input(({ theme }) => {
  return css`
    display: none;
    font-size: 1em;
    vertical-align: baseline;
    margin: 0 1em 0 0;
    height: 1em;
    ~ label.toggle-label,
    ~ label.toggle-message {
      vertical-align: bottom;
      display: inline-block;
    }
    &:checked + label.toggle-control {
      background: ${theme.colors.getSwatch(theme.inputs.activeColor)};
    }
    &.${ERROR_CLASS} + label.toggle-control {
      border-color: ${theme.colors.getSwatch('danger')};
    }
    &:disabled + label.toggle-control {
      background: ${theme.colors.background.inactive};
      cursor: not-allowed;
    }
    &:disabled + label.toggle-control + label.toggle-label {
      cursor: not-allowed;
    }
  `
})
