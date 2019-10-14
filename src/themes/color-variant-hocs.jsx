/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { COLOR_VARIANT_NONE } from '../components/utils'
import { rgb } from './utils'

export const colorwayCSS = (theme, colorway) => {
  if (colorway === COLOR_VARIANT_NONE) {
    return css`
      color: inherit;
    `
  }
  const cw = theme.colorways[colorway]
  return css`
    background: ${cw.default.base};
    color: ${cw.default.readable};
  `
}

export function withColorwayProp(Component, defaultColorway) {
  const ComponentWithProp = props => <Component {...props} />
  ComponentWithProp.propTypes = {
    colorway: PropTypes.oneOf([
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
      COLOR_VARIANT_NONE,
    ]),
  }
  ComponentWithProp.defaultProps = {
    colorway: defaultColorway,
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
