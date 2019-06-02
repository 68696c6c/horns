import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../..'
import { diagonalLinesCSS, textShadow } from '../utils'
import uuid from 'uuid/v4'

const StyledColorDemo = styled('div')`
  background: ${({ theme }) => diagonalLinesCSS(theme.colors.dark.alpha)};
`
const StyledColorSwatches = styled('div')`
  display: grid;
  grid-template-areas: "light default dark alpha";
`
const Swatch = styled('div')`
  background: ${({ theme, color, swatch }) => rgb(theme.colors[color][swatch])};
  ${({ theme, color}) => textShadow(theme, color)};
  grid-area: ${({ swatch }) => swatch};
  padding: 1em;
  font-size: 1.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Swatch.propTypes = {
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
  swatch: PropTypes.oneOf(['default', 'light', 'dark', 'alpha']).isRequired,
}

const ColorSwatches = ({ color, ...others }) => (
  <StyledColorSwatches {...others}>
    <Swatch key={uuid()} color={color} swatch="default">{color} - default</Swatch>
    <Swatch key={uuid()} color={color} swatch="dark">{color} - dark</Swatch>
    <Swatch key={uuid()} color={color} swatch="light">{color} - light</Swatch>
    <Swatch key={uuid()} color={color} swatch="alpha">{color} - alpha</Swatch>
  </StyledColorSwatches>
)

ColorSwatches.propTypes = {
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

const Colors = () => (
  <StyledColorDemo>
    <ColorSwatches color="primary"/>
    <ColorSwatches color="secondary"/>
    <ColorSwatches color="tertiary"/>
    <ColorSwatches color="light"/>
    <ColorSwatches color="neutral"/>
    <ColorSwatches color="dark"/>
    <ColorSwatches color="success"/>
    <ColorSwatches color="info"/>
    <ColorSwatches color="warning"/>
    <ColorSwatches color="danger"/>
    <ColorSwatches color="background"/>
  </StyledColorDemo>
)

export default Colors
