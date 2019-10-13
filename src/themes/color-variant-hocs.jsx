/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { COLOR_VARIANT_NONE } from '../components/utils'
import { rgb } from './utils'

export const variantCSS = (theme, variant) => {
  if (variant === COLOR_VARIANT_NONE) {
    return css`
      color: inherit;
    `
  }
  const bg = theme.colors[variant].default
  const color = bg.isDark() ? theme.colors.copy.light : theme.colors.copy.dark
  return css`
    background: ${rgb(bg)};
    color: ${rgb(color)};
  `
}

export function withVariantProp(Component, defaultVariant) {
  const ComponentWithProp = props => <Component {...props} />
  ComponentWithProp.propTypes = {
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
      'copy',
      COLOR_VARIANT_NONE,
    ]),
  }
  ComponentWithProp.defaultProps = {
    variant: defaultVariant,
  }
  return ComponentWithProp
}

export function withColorProp(Component) {
  const ComponentWithProp = props => <Component {...props} />
  ComponentWithProp.propTypes = {
    color: PropTypes.oneOf([
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
    ]).isRequired,
  }
  return ComponentWithProp
}
