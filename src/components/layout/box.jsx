/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { COLOR_VARIANT_NONE, colorVariantCSS, toClassNames } from '../utils'

const getFlexCSS = (x, y) => {
  let alignItems, justifyContent
  switch (x) {
    case 'left':
      justifyContent = 'flex-start'
      break
    case 'center':
      justifyContent = 'center'
      break
    case 'right':
      justifyContent = 'flex-end'
      break
  }
  switch (y) {
    case 'top':
      alignItems = 'flex-start'
      break
    case 'center':
      alignItems = 'center'
      break
    case 'bottom':
      alignItems = 'flex-end'
      break
  }
  return css`
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `
}

const Styled = styled('div')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.spacing.small};
  ${({ x, y }) => getFlexCSS(x, y)};
`

const Box = ({ className, children, ...others }) => {
  return <Styled className={toClassNames(className, 'box')} {...others}>{children}</Styled>
}

Box.propTypes = {
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
  height: PropTypes.string,
  width: PropTypes.string,
  x: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  y: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
}

Box.defaultProps = {
  variant: COLOR_VARIANT_NONE,
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

export default Box
