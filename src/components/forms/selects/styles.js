import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { inputStyles } from '../../../mixins'

export const SelectNative = styled.select(...inputStyles, () => {
  return css`
    appearance: none;
    cursor: pointer;
    &::-ms-expand {
      display: none;
    }
  `
})

export const Select = styled.div(...inputStyles, ({ theme, open }) => {
  return css`
    margin: 0;
    display: ${open ? 'none' : 'block'};
    box-sizing: content-box;
    cursor: pointer;
    min-height: ${theme.typography.letting.base};
  `
})

export const Filter = styled.input(
  ...inputStyles,
  ({ theme }) => css`
    margin: ${theme.spacing.getSpacing('tiny')};
    width: calc(100% - ${theme.spacing.getSpacing('xSmall')});
  `
)

export const DropDownContainer = styled.div(({ theme }) => {
  // Move the dropdown up the height of the input border.
  const offset = theme.borders.inputs ? theme.borders.width : 0
  return css`
    position: relative;
    top: -${offset};
  `
})

export const DropDown = styled.ul(...inputStyles, ({ open }) => {
  return css`
    display: ${open ? 'block' : 'none'};
    position: absolute;
    border-top-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none inside;
  `
})

export const DropDownOption = styled.li(({ theme }) => {
  return css`
    padding: ${theme.spacing.getSpacing('tiny')};
    ${theme.spacing.getSpacing('xSmall')};
    cursor: pointer;
    &:hover {
      background: ${theme.colors.getSwatch(theme.inputs.activeColor)};
    }
  `
})

export const SelectContainer = styled.div(
  ({ theme }) =>
    css`
      margin: 0 0 ${theme.spacing.getSpacing('small')} 0;
    `
)
