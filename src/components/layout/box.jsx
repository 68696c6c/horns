/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { variantCSS, withVariantProp } from '../../themes/color-variant-hocs'
import { COLOR_VARIANT_NONE, toClassNames } from '../utils'

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
  ${({ theme, variant }) => variantCSS(theme, variant)};
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.spacing.small};
  ${({ x, y }) => getFlexCSS(x, y)};
`

const BoxBase = ({ className, children, ...others }) => {
  return <Styled className={toClassNames(className, 'box')} {...others}>{children}</Styled>
}

BoxBase.propTypes = {
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

BoxBase.defaultProps = {
  height: 'auto',
  width: 'auto',
  x: 'center',
  y: 'center',
}

const Box = withVariantProp(BoxBase, COLOR_VARIANT_NONE)

export default Box
