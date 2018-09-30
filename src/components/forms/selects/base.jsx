import styled from 'react-emotion'
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
  margin-top: -1em;
  margin-bottom: 2em;
`
export const StyledSelect = styled('div')`
  ${({ theme }) => baseInput(theme)};
  display: ${({ open }) => open ? 'none' : 'block'};
  box-sizing: content-box;
  cursor: pointer;
  min-height: 1.15em;
  line-height: 1.15em;
`
export const StyledFilter = styled('input')`
  ${({ theme }) => baseInput(theme)};
  margin: 5px;
  width: calc(100% - 10px);
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
  margin: -2px 0 0 0;
  padding: 0;
  width: 100%;
  list-style: none inside;
  &.${ERROR_CLASS} {
    border-color: ${({ theme }) => rgb(theme.colors.danger.default)};;
  }
`
export const Option = styled('li')`
  padding: .25em .5em;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => rgb(theme.colors.neutral.alpha)};
  }
  &:first-child {
    padding-top: .5em;
  }
  &:last-child {
    padding-bottom: .5em;
  }
`
export const StyledSelectContainer = styled(`div`)``
