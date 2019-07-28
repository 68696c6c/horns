/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { COLOR_VARIANT_NONE, colorVariantCSS } from '../utils'

const buttonStylesRight = (theme, breakpoint) => css`
  @media(min-width: ${theme.breakpoints[breakpoint]}) {
    display: flex;
    justify-content: flex-end;
    > * {
      width: auto;
      margin-right: ${theme.spacing.small};
      margin-bottom: 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const buttonStylesLeft = (theme, breakpoint) => css`
  @media(min-width: ${theme.breakpoints[breakpoint]}) {
    display: flex;
    justify-content: flex-start;
    > * {
      width: auto;
      margin-left: ${theme.spacing.small};
      margin-bottom: 0;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`

const buttonStylesCenter = (theme, breakpoint) => css`
  @media(min-width: ${theme.breakpoints[breakpoint]}) {
    display: flex;
    justify-content: center;
    > * {
      width: auto;
      margin-right: ${theme.spacing.small};
      margin-bottom: 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const StyledButtonContainer = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  padding: ${({ theme }) => theme.spacing.small};
  > * {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    &:last-child {
      margin-bottom: 0;
    }
  }
  ${({ theme, align, breakpoint }) => {
    let styles = buttonStylesCenter(theme, breakpoint)
    if (align === 'right') {
      styles = buttonStylesRight(theme, breakpoint)
    } else if (align === 'left') {
      styles = buttonStylesLeft(theme, breakpoint)
    }
    return styles
  }}
`

const ButtonContainer = ({ children, ...others }) => (
  <StyledButtonContainer {...others}>{children}</StyledButtonContainer>
)

ButtonContainer.propTypes = {
  breakpoint: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'background',
    COLOR_VARIANT_NONE,
  ]),
}

ButtonContainer.defaultProps = {
  breakpoint: 'medium',
  align: 'right',
  variant: COLOR_VARIANT_NONE,
}

export default ButtonContainer
