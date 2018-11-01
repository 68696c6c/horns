import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { COLOR_VARIANT_NONE, colorVariantCSS, containerStyleHorizontal } from '../utils'
import { isUndefined } from '../../utils/utils'
import { valueToInt } from '../../themes/utils'
import { Nav } from '../nav'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from './events'

const fixedCSS = () => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  `
}
const Styled = styled('header')`
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  ${({ fluid, theme }) => containerStyleHorizontal(theme.breakpoints, fluid)};
  ${({ stuck }) => stuck ? fixedCSS() : ''};
`

export class HeaderBase extends React.Component {
  constructor(props) {
    super(props)

    this.handleState = this.handleState.bind(this)
    this.fireStick = this.fireStick.bind(this)
    this.fireUnStick = this.fireUnStick.bind(this)

    this.state = {
      set: false,
      height: 0,
      stuck: false,
      mobile: false,
    }

    this.minWidth = valueToInt(props.theme.breakpoints[props.breakpoint])

    this.headerRef = React.createRef()
  }

  componentDidMount() {
    this.handleState()
    window.addEventListener('scroll', this.handleState)
    window.addEventListener('resize', this.handleState)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', {})
    window.removeEventListener('resize', {})
  }

  fireStick() {
    window.dispatchEvent(new CustomEvent(EVENT_HEADER_STICK, {}))
  }

  fireUnStick() {
    window.dispatchEvent(new CustomEvent(EVENT_HEADER_UNSTICK, {}))
  }

  handleState() {
    const height = this.headerRef.current.offsetHeight
    if (!isUndefined(height) && height > 0) {
      const stuck = this.props.sticky && window.scrollY > height
      const mobile = window.innerWidth <= this.minWidth
      this.setState(() => ({ height, set: true, mobile, stuck }))
      if (stuck) {
        this.fireStick()
      } else {
        this.fireUnStick()
      }
    }
  }

  render() {
    const { fluid, variant, children, ...others } = this.props
    return (
      <Styled innerRef={this.headerRef} fluid={fluid} stuck={this.state.stuck} variant={variant} {...others}>
        <Nav mobile={this.state.mobile}>
          {children}
        </Nav>
      </Styled>
    )
  }
}

HeaderBase.propTypes = {
  fluid: PropTypes.bool,
  sticky: PropTypes.bool,
  breakpoint: PropTypes.string,
  containerID: PropTypes.string,
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
}

HeaderBase.defaultProps = {
  fluid: false,
  sticky: false,
  breakpoint: 'small',
  containerID: '',
  variant: COLOR_VARIANT_NONE,
}

export default withTheme(HeaderBase)
