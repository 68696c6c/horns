/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import { isUndefined, valueToInt } from '../../../utils'
import { Nav } from '../../nav'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../events'
import * as Styled from './styles'

// This component should NOT be exported for use outside this app since it requires the Emotion withTheme HOC in order
// to function correctly.
export class SiteHeaderBase extends React.Component {
  constructor(props) {
    super(props)

    this.handleState = this.handleState.bind(this)
    this.fireStick = this.fireStick.bind(this)
    this.fireUnStick = this.fireUnStick.bind(this)
    this.cancelled = false

    this.state = {
      stuck: false,
      mobile: false,
    }

    this.minWidth = valueToInt(props.theme.grid.getBreakpoint(props.breakpoint))

    this.headerRef = React.createRef()
  }

  componentDidMount() {
    this.handleState()
    window.addEventListener('scroll', this.handleState)
    window.addEventListener('resize', this.handleState)
  }

  componentWillUnmount() {
    this.cancelled = true
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
    if (this.headerRef.current) {
      const height = this.headerRef.current.offsetHeight
      if (!isUndefined(height) && height > 0) {
        const { sticky } = this.props
        const stuck = sticky && window.scrollY > height
        const mobile = window.innerWidth <= this.minWidth
        if (!this.cancelled) {
          this.setState(() => ({ mobile, stuck }))
        }
        if (stuck) {
          this.fireStick()
        } else {
          this.fireUnStick()
        }
      }
    }
  }

  render() {
    const {
      fluid,
      variant,
      menuColorway,
      children,
      navItems,
      ...others
    } = this.props
    const { stuck, mobile } = this.state
    return (
      <Styled.Header
        ref={this.headerRef}
        fluid={fluid}
        stuck={stuck}
        variant={variant}
        {...handleProps(others, `site-header${stuck ? ' stuck' : ''}`)}
      >
        <Nav mobile={mobile} colorway={menuColorway}>
          {navItems}
        </Nav>
      </Styled.Header>
    )
  }
}

const { colorway: colorwayOptions } = colorwayPropTypes()
SiteHeaderBase.propTypes = {
  ...layoutPropTypes(),
  sticky: PropTypes.bool,
  containerID: PropTypes.string,
  menuColorway: colorwayOptions,
  navItems: PropTypes.node,
}

const { colorway: colorwayDefault } = colorwayDefaultProps()
SiteHeaderBase.defaultProps = {
  ...layoutDefaultProps(),
  sticky: false,
  containerID: '',
  menuColorway: colorwayDefault,
}

export default withTheme(SiteHeaderBase)
