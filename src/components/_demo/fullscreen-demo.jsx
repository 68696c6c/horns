import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { PropsTable } from 'docz'
import { rgb } from '../../themes/utils'

const DARK = '#13161F'
const DARK_SECONDARY = '#2D3747'
const DARK_TERTIARY = '#1D2330'
const DARK_ACCENT = '#1DCAD3'
const DARK_FONT = '#CED4DE'
const DARK_FONT_LIGHT = '#EEF1F5'

const StyledButton = styled('button')`
  background: ${({ variant }) => variant === 'light' ? 'white' : DARK};
  color: ${({ variant }) => variant === 'light' ? 'white' : DARK_FONT};
  border: 1px dotted ${({ variant }) => variant === 'light' ? 'white' : DARK_SECONDARY};
  padding: 1em;
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover, &:active {
    color: ${({ variant }) => variant === 'light' ? 'white' : DARK_ACCENT};
  }
`
const StyledWindowBar = styled('div')`
  background: ${({ variant }) => variant === 'light' ? 'white' : DARK_TERTIARY};
  color: ${({ variant }) => variant === 'light' ? 'white' : DARK_FONT};
  border-bottom: 1px dotted ${({ variant }) => variant === 'light' ? 'white' : DARK_SECONDARY};
  padding: 1em 1.5em 1em 2em;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 90px;
  h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 100;
    letter-spacing: -0.02em;
    color: ${DARK_FONT_LIGHT};
  }
  button {
    align-self: center;
  }
`
const StyledWindow = styled('div')`
  background: ${({ variant }) => variant === 'light' ? 'white' : DARK_TERTIARY};
  z-index: 9999999999999999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 100%;
  padding-top: 90px;
`
const StyledPreview = styled('div')`
  margin: 2rem 0;
`
const StyledPanel = styled('div')`
  background: ${({ variant }) => variant === 'light' ? 'white' : DARK_TERTIARY};
  border-top: 1px dotted ${({ variant }) => variant === 'light' ? 'white' : DARK_SECONDARY};
  padding: 2rem;
`

class FullscreenDemo extends React.Component {
  constructor(props) {
    super(props)

    this.openPreview = this.openPreview.bind(this)
    this.closePreview = this.closePreview.bind(this)

    this.state = {
      open: false,
    }
  }

  openPreview() {
    this.setState(() => ({ open: true }))
  }

  closePreview() {
    this.setState(() => ({ open: false }))
  }

  render() {
    const { variant, children, of: component, title } = this.props
    const windowStyle = this.state.open ? '' : css`display: none;`
    return (
      <React.Fragment>
        <StyledButton variant={variant} onClick={this.openPreview}>Show Fullscreen Playground</StyledButton>
        <StyledWindow variant={variant} className={windowStyle}>
          <StyledWindowBar variant={variant}>
            <h1>{title}</h1>
            <StyledButton variant={variant} onClick={this.closePreview}>Close Playground</StyledButton>
          </StyledWindowBar>
          <StyledPreview variant={variant}>{children}</StyledPreview>
          <StyledPanel variant={variant}>
            <PropsTable of={component} />
          </StyledPanel>
        </StyledWindow>
      </React.Fragment>
    )
  }
}

FullscreenDemo.propTypes = {
  of: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'light',
    'dark',
  ]),
}

FullscreenDemo.defaultProps = {
  variant: 'light',
}

export default FullscreenDemo
