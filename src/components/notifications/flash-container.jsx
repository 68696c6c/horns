/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

const getPositionCSS = position => {
  switch (position) {
    case 'top-left':
      return css`top: 1em; left: 1em;`
    case 'top-center':
      return css`top: 1em; left: 50%; margin-left: -160px;`
    case 'top-right':
      return css`top: 1em; right: 1em;`
    case 'bottom-left':
      return css`bottom: 1em; left: 1em;`
    case 'bottom-center':
      return css`bottom: 1em; left: 50%; margin-left: -160px;`
    case 'bottom-right':
      return css`bottom: 1em; right: 1em;`
  }
}

const Styled = styled('div')`
  position: fixed;
  z-index: 9999;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  ${({ position }) => getPositionCSS(position)};
`

const FlashContainer = ({ position, children, ...others }) => (
  <Styled position={position} {...others}>{children}</Styled>
)

FlashContainer.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
}

FlashContainer.defaultProps = {
  position: 'top-right',
}

export default FlashContainer
