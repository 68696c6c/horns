/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { COLOR_VARIANT_NONE } from '../components/utils'

export const colorwayCSS = (theme, colorway) => {
  if (colorway === COLOR_VARIANT_NONE) {
    return css`
      color: inherit;
    `
  }
  const cw = theme.colorways[colorway]
  return css`
    background: ${cw.base};
    color: ${cw.readable};
  `
}

export function withColorwayProp(Component, defaultColorway) {
  const ComponentWithProp = props => <Component {...props} />
  ComponentWithProp.propTypes = {
    colorway: PropTypes.oneOf([
      'primary',
      'primary-dark',
      'primary-light',
      'secondary',
      'secondary-dark',
      'secondary-light',
      'tertiary',
      'tertiary-dark',
      'tertiary-light',
      'light',
      'light-dark',
      'light-darker',
      'neutral',
      'neutral-dark',
      'neutral-light',
      'dark',
      'dark-light',
      'dark-lighter',
      'success',
      'success-dark',
      'success-light',
      'info',
      'info-dark',
      'info-light',
      'warning',
      'warning-dark',
      'warning-light',
      'danger',
      'danger-dark',
      'danger-light',
      COLOR_VARIANT_NONE,
    ]),
  }
  ComponentWithProp.defaultProps = {
    colorway: defaultColorway,
  }
  return ComponentWithProp
}
