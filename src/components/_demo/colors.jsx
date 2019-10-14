/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { withColorwayProp } from '../../themes/color-variant-hocs'
import { COLOR_VARIANT_NONE } from '../utils'
import uuid from 'uuid/v4'

// const StyledColorDemo = styled('div')`
//   background: ${({ theme }) => diagonalLinesCSS(theme.colors.dark.alpha, 66)};
// `
const StyledColorSwatches = styled('div')`
  display: grid;
  grid-template-areas: 'darker dark base light lighter';
`
const cwCSS = (theme, colorway, swatch) => {
  if (colorway === COLOR_VARIANT_NONE) {
    return css`
      color: inherit;
    `
  }
  const cw = theme.colorways[colorway][swatch]
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    &:hover {
      background: ${cw.negative};
      color: ${cw.negativeReadable};
    }
  `
}

const SwatchBase = styled('div')`
  ${({ theme, colorway, swatch }) => cwCSS(theme, colorway, swatch)};
  grid-area: ${({ swatch }) => swatch};
  padding: 1em;
  font-size: 1.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

SwatchBase.propTypes = {
  swatch: PropTypes.oneOf([
    'darker',
    'dark',
    'base',
    'light',
    'lighter',
  ]).isRequired,
}

const Swatch = withColorwayProp(SwatchBase)

const ColorSwatchesBase = ({ colorway, ...others }) => (
  <StyledColorSwatches {...others}>
    <Swatch key={uuid()} colorway={colorway} swatch="darker">{colorway} - darker</Swatch>
    <Swatch key={uuid()} colorway={colorway} swatch="dark">{colorway} - dark</Swatch>
    <Swatch key={uuid()} colorway={colorway} swatch="base">{colorway} - base</Swatch>
    <Swatch key={uuid()} colorway={colorway} swatch="light">{colorway} - light</Swatch>
    <Swatch key={uuid()} colorway={colorway} swatch="lighter">{colorway} - lighter</Swatch>
  </StyledColorSwatches>
)

const ColorSwatches = withColorwayProp(ColorSwatchesBase)

const Colors = () => (
  <>
    <ColorSwatches colorway="primary" />
    <ColorSwatches colorway="secondary" />
    <ColorSwatches colorway="tertiary" />
    <ColorSwatches colorway="light" />
    <ColorSwatches colorway="neutral" />
    <ColorSwatches colorway="dark" />
    <ColorSwatches colorway="success" />
    <ColorSwatches colorway="info" />
    <ColorSwatches colorway="warning" />
    <ColorSwatches colorway="danger" />
  </>
)

export default Colors
