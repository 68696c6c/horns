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
`

class LayoutDemo extends React.Component {
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
    const { variant, children } = this.props
    const windowStyle = this.state.open ? '' : css`display: none;`
    return (
      <React.Fragment>
        <StyledButton variant={variant} onClick={this.openPreview}>Show Layout Playground</StyledButton>
        <StyledWindow variant={variant} className={windowStyle}>
          {children}
        </StyledWindow>
      </React.Fragment>
    )
  }
}

LayoutDemo.propTypes = {
  variant: PropTypes.oneOf([
    'light',
    'dark',
  ]),
}

LayoutDemo.defaultProps = {
  variant: 'light',
}

export default LayoutDemo
