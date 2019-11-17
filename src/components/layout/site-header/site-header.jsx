/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { withTheme } from 'emotion-theming'

import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
  layoutDefaultProps,
  layoutPropTypes,
  isUndefined,
} from '../../../utils'
import { Nav } from '../../nav'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../events'

import * as Styled from './styles'

export class SiteHeaderBase extends React.Component {
  constructor(props) {
    super(props)

    this.handleState = this.handleState.bind(this)
    this.fireStick = this.fireStick.bind(this)
    this.fireUnStick = this.fireUnStick.bind(this)
    this.cancelled = false

    this.state = {
      set: false,
      height: 0,
      stuck: false,
      mobile: false,
    }

    this.minWidth = props.theme.grid.getBreakpoint(props.breakpoint)

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
        const stuck = this.props.sticky && window.scrollY > height
        const mobile = window.innerWidth <= this.minWidth
        if (!this.cancelled) {
          this.setState(() => ({ height, set: true, mobile, stuck }))
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
      menuVariant,
      children,
      navItems,
      ...others
    } = this.props
    const { stuck, mobile } = this.state
    return (
      <Styled.Header
        innerRef={this.headerRef}
        fluid={fluid}
        stuck={stuck}
        variant={variant}
        {...handleProps(others, stuck ? 'stuck' : '')}
      >
        {children}
        <Nav mobile={mobile} menuVariant={menuVariant}>
          {navItems}
        </Nav>
      </Styled.Header>
    )
  }
}

const { colorway: colorwayOptions } = colorwayPropTypes()
const { colorway: colorwayDefault } = colorwayDefaultProps()

SiteHeaderBase.propTypes = {
  ...layoutPropTypes(),
  sticky: PropTypes.bool,
  containerID: PropTypes.string,
  menuVariant: colorwayOptions,
  navItems: PropTypes.node,
}

SiteHeaderBase.defaultProps = {
  ...layoutDefaultProps(),
  sticky: false,
  containerID: '',
  menuVariant: colorwayDefault,
}

export default withTheme(SiteHeaderBase)
