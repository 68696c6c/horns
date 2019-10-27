/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { toClassNames } from '../utils'
import { Grid } from './grid'
import { rgb } from '../../themes/utils'

const getFontColor = (variant, theme) => {
  return variant === 'brand' ? rgb(theme.colors.primary.default) : rgb(theme.colors[variant].default)
}
const getCopyColor = (bgColor, theme) => {
  return bgColor.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)
}
const getDarkBlockStyle = (variant, theme) => {
  const { dark } = theme.colors
  return css`
    background-color: ${rgb(dark.default)};
    color: ${getFontColor(variant, theme)};
  `
}
const getNeutralBlockStyle = (theme) => {
  const { neutral } = theme.colors
  return css`
    background-color: ${rgb(neutral.default)};
    color: ${getCopyColor(neutral.default, theme)};
  `
}
const getBackgroundBlockStyle = (theme) => {
  const { background } = theme.colors
  return css`
    background-color: ${rgb(background.default)};
    color: ${getCopyColor(background.default, theme)};
  `
}
const getFirstBlockStyle = (variant, theme) => {
  const bgColor = variant === 'brand' ? theme.colors.secondary.default : theme.colors[variant].default
  return css`
    background-color: ${rgb(bgColor)};
    color: ${getCopyColor(bgColor, theme)};
  `
}
const getSecondBlockStyle = (variant, theme) => {
  const bgColor = variant === 'brand' ? theme.colors.primary.default : theme.colors[variant].dark
  return css`
    background-color: ${rgb(bgColor)};
    color: ${getCopyColor(bgColor, theme)};
  `
}
const getThirdBlockStyle = (variant, theme) => {
  const bgColor = variant === 'brand' ? theme.colors.tertiary.default : theme.colors[variant].light
  return css`
    background-color: ${rgb(bgColor)};
    color: ${getCopyColor(bgColor, theme)};
  `
}
const Block = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  &:nth-child(odd) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 20px;
  }
  &:nth-child(even) {
    padding-left: 20px;
  }
  @media(min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-top: 50px;
    padding-bottom: 50px;
    &:nth-child(odd) {
      padding-right: 50px;
    }
    &:nth-child(even) {
      padding-left: 50px;
    }
  }
    
  &:nth-child(1n) {
    ${({ variant, theme }) => getDarkBlockStyle(variant, theme)};
  }
  &:nth-child(2n) {
    ${({ theme }) => getNeutralBlockStyle(theme)};
  }
  &:nth-child(3n + 3) {
    ${({ variant, theme }) => getFirstBlockStyle(variant, theme)};
  }
  &:nth-child(4n + 4) {
    ${({ theme }) => getBackgroundBlockStyle(theme)};
  }
  
  &:nth-child(5n + 5) {
    ${({ variant, theme }) => getDarkBlockStyle(variant, theme)};
  }
  &:nth-child(6n + 6) {
    ${({ theme }) => getNeutralBlockStyle(theme)};
  }
  &:nth-child(7n + 7) {
    ${({ variant, theme }) => getSecondBlockStyle(variant, theme)};
  }
  &:nth-child(8n + 8) {
    ${({ theme }) => getBackgroundBlockStyle(theme)};
  }
  
  &:nth-child(9n + 9) {
    ${({ variant, theme }) => getDarkBlockStyle(variant, theme)};
  }
  &:nth-child(10n + 10) {
    ${({ theme }) => getNeutralBlockStyle(theme)};
  }
  &:nth-child(11n + 11) {
    ${({ variant, theme }) => getThirdBlockStyle(variant, theme)};
  }
  &:nth-child(12n + 12) {
    ${({ theme }) => getBackgroundBlockStyle(theme)};
  }
`

const GridStacked = ({ variant, className, children, ...others }) => {
  const childrenArray = children.constructor === Array ? children : [children]
  return (
    <Grid fluid={true} gap={false} variant="thirds" className={toClassNames(className, 'section-stacked')} {...others}>
      {childrenArray.map(child => {
        return <Block {...child.props} variant={variant} key={uuid()}>{child.props.children}</Block>
      })}
    </Grid>
  )
}

GridStacked.propTypes = {
  variant: PropTypes.oneOf([
    'brand',
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
  ]),
}

GridStacked.defaultProps = {
  variant: 'brand',
}

export default GridStacked
