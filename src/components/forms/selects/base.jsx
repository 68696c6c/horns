import styled from '@emotion/styled'
import { font } from '../../utils'
import { baseInput } from '../inputs/base'
import { rgb } from '../../../themes/utils'
import { ERROR_CLASS } from '../utils'

// @TODO need to use a global config value for input margins, line-height, and borders.
export const StyledNativeSelect = styled('select')`
  ${({ theme }) => baseInput(theme)};
  appearance: none;
  cursor: pointer;
  &::-ms-expand { 
    display: none;
  }
`
export const StyledDropDownContainer = styled('div')`
  position: relative;
  ${({ theme }) => font(theme)};
  // Move the dropdown up the height of the input border.
  top: -2px;
`
export const StyledSelect = styled('div')`
  ${({ theme }) => baseInput(theme)};
  margin: 0;
  display: ${({ open }) => open ? 'none' : 'block'};
  box-sizing: content-box;
  cursor: pointer;
  min-height: ${({ theme }) => theme.typography.lineHeight};
`
export const StyledFilter = styled('input')`
  ${({ theme }) => baseInput(theme)};
  margin: ${({ theme }) => theme.spacing.tiny};
  width: calc(100% - ${({ theme }) => theme.spacing.xsmall});
`
export const StyledDropDown = styled('ul')`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  background: ${({ theme }) => rgb(theme.colors.copy.light)};
  border-left: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-right: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  color: ${({ theme }) => rgb(theme.colors.copy.dark)};
  border-radius: 0 0 ${({ theme }) => theme.config.radius} ${({ theme }) => theme.config.radius};
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none inside;
  &.${ERROR_CLASS} {
    border-color: ${({ theme }) => rgb(theme.colors.danger.default)};;
  }
`
export const Option = styled('li')`
  ${({ theme }) => font(theme)};
  padding: ${({ theme }) => theme.spacing.xsmall};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => rgb(theme.colors.neutral.alpha)};
  }
`
export const StyledSelectContainer = styled('div')`
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
`
