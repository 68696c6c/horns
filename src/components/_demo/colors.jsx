/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { palletColors, palletColorShades } from '../../config'

const cwCSS = (theme, colorway) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    &:hover {
      background: ${cw.negative};
      color: ${cw.negativeReadable};
    }
  `
}

const Swatch = styled('div')`
  ${({ theme, colorway }) => cwCSS(theme, colorway)};
  padding: ${({ theme, prominent }) => prominent ? theme.spacing.large.px : theme.spacing.xSmall.px};
`

Swatch.propTypes = {
  colorway: PropTypes.oneOf(palletColorShades).isRequired,
}

const StyledColorShade = styled('div')`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xSmall.px};
`

const StyledSwatches = styled('div')`
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`

const ColorShade = ({ colorway }) => (
  <StyledColorShade>
    <h1>{colorway}</h1>
    <StyledSwatches>
      <Swatch colorway={`${colorway}-darker`}>darker</Swatch>
      <Swatch colorway={`${colorway}-dark`}>dark</Swatch>
      <Swatch colorway={colorway} prominent>base</Swatch>
      <Swatch colorway={`${colorway}-light`}>light</Swatch>
      <Swatch colorway={`${colorway}-lighter`}>lighter</Swatch>
    </StyledSwatches>
  </StyledColorShade>
)

ColorShade.propTypes = {
  colorway: PropTypes.oneOf(palletColors).isRequired,
}

const StyledColors = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const BackgroundColorShades = () => (
  <StyledColorShade>
    <h1>Background</h1>
    <StyledSwatches>
      <Swatch colorway="background" prominent>background base</Swatch>
      <Swatch colorway="background:primary">background primary</Swatch>
      <Swatch colorway="background:secondary">background secondary</Swatch>
      <Swatch colorway="background:tertiary">background tertiary</Swatch>
      <Swatch colorway="background:active">background active</Swatch>
      <Swatch colorway="background:inactive">background inactive</Swatch>
    </StyledSwatches>
    <h1>Copy</h1>
    <StyledSwatches>
      <Swatch colorway="copy" prominent>copy base</Swatch>
      <Swatch colorway="copy:primary">copy primary</Swatch>
      <Swatch colorway="copy:light">copy light</Swatch>
      <Swatch colorway="copy:dark">copy dark</Swatch>
    </StyledSwatches>
  </StyledColorShade>
)

const NeutralColorShades = () => (
  <StyledColorShade>
    <h1>dark, neutral, light</h1>
    <StyledSwatches>
      <Swatch colorway="dark" prominent>dark base</Swatch>
      <Swatch colorway="dark-light">dark light</Swatch>
      <Swatch colorway="dark-lighter">dark lighter</Swatch>

      <Swatch colorway="neutral-darker">neutral darker</Swatch>
      <Swatch colorway="neutral-dark">neutral dark</Swatch>
      <Swatch colorway="neutral" prominent>neutral base</Swatch>
      <Swatch colorway="neutral-light">neutral light</Swatch>
      <Swatch colorway="neutral-lighter">neutral lighter</Swatch>

      <Swatch colorway="light-darker">light darker</Swatch>
      <Swatch colorway="light-dark">light dark</Swatch>
      <Swatch colorway="light" prominent>light base</Swatch>
    </StyledSwatches>
  </StyledColorShade>
)

const Colors = () => (
  <>
    <StyledColors>
      <BackgroundColorShades />
    </StyledColors>
    <StyledColors>
      <ColorShade colorway="primary" />
      <ColorShade colorway="secondary" />
      <ColorShade colorway="tertiary" />
    </StyledColors>
    <StyledColors>
      <NeutralColorShades />
    </StyledColors>
    <StyledColors>
      <ColorShade colorway="success" />
      <ColorShade colorway="info" />
      <ColorShade colorway="warning" />
      <ColorShade colorway="danger" />
    </StyledColors>
  </>
)

export default Colors
