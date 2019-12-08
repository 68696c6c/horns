import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { InputSpacing, inputStyles, InputWidth } from '../../../mixins'

export const SelectNative = styled.select(...inputStyles, () => {
  return css`
    appearance: none;
    cursor: pointer;
    &::-ms-expand {
      display: none;
    }
  `
})

// Need box-sizing: content-box for correctly setting the *height* of the element when nothing is selected.
// To remain consistent with the other inputs, width needs to be calculated as border-box, hence the calc.
export const Select = styled.div(...inputStyles, ({ theme, open }) => {
  const style = theme.typography.getStyle('label')
  const padding = theme.spacing.getSpacing('xSmall')
  return css`
    margin: 0;
    display: ${open ? 'none' : 'block'};
    box-sizing: content-box;
    cursor: pointer;
    min-height: ${style.letting};
    width: calc(100% - (${padding} * 2));
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
    width: 100%;
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

export const SelectContainer = styled.div(InputSpacing, InputWidth)
