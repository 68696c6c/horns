import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import theme from '../../themes/base'
import { ThemeProvider } from 'emotion-theming'

class RenderInBody extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    this._renderLayer()
  }

  componentDidUpdate() {
    this._renderLayer()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.container)
    document.body.removeChild(this.container)
  }

  _renderLayer() {
    const children = <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
    ReactDOM.render(children, this.container)
  }

  render() {
    // Render a placeholder
    return <ThemeProvider theme={theme}>
      <div {...this.props}/>
    </ThemeProvider>
  }
}

const DARK = '#13161F'
const DARK_SECONDARY = '#2D3747'
const DARK_TERTIARY = '#1D2330'
const DARK_ACCENT = '#EE9B3F'
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
  ${({ open }) => open ? '' : 'display: none'};
  background: ${({ variant }) => variant === 'light' ? 'white' : DARK_TERTIARY};
  z-index: 9999999999999999;
  position: absolute;
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
    return (
      <React.Fragment>
        <StyledButton variant={variant} onClick={this.openPreview}>Show Layout Playground</StyledButton>
        <RenderInBody>
          <StyledWindow id="layout-window" variant={variant} open={this.state.open}>
            {children}
          </StyledWindow>
        </RenderInBody>
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
