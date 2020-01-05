import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../../../events'
import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import { isUndefined, valueToInt } from '../../../utils'
import { Nav } from '../../nav'
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
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', this.handleState)
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', this.handleState)
  }

  componentWillUnmount() {
    this.cancelled = true
    // eslint-disable-next-line no-undef
    window.removeEventListener('scroll', {})
    // eslint-disable-next-line no-undef
    window.removeEventListener('resize', {})
  }

  // eslint-disable-next-line class-methods-use-this
  fireStick() {
    // eslint-disable-next-line no-undef
    window.dispatchEvent(new CustomEvent(EVENT_HEADER_STICK, {}))
  }

  // eslint-disable-next-line class-methods-use-this
  fireUnStick() {
    // eslint-disable-next-line no-undef
    window.dispatchEvent(new CustomEvent(EVENT_HEADER_UNSTICK, {}))
  }

  handleState() {
    const { sticky } = this.props
    if (!sticky) {
      return
    }
    if (this.headerRef.current) {
      const height = this.headerRef.current.offsetHeight
      if (!isUndefined(height) && height > 0) {
        const { stuck: alreadyStuck } = this.state
        // eslint-disable-next-line no-undef
        const stuck = sticky && window.scrollY > height
        // eslint-disable-next-line no-undef
        const mobile = window.innerWidth <= this.minWidth
        if (!this.cancelled) {
          if (stuck && !alreadyStuck) {
            this.setState(() => ({ mobile, stuck }), this.fireStick)
          } else if (!stuck && alreadyStuck) {
            this.setState(() => ({ mobile, stuck }), this.fireUnStick)
          }
        }
      }
    }
  }

  render() {
    const {
      colorway,
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
        colorway={colorway}
        {...handleProps(others, `site-header${stuck ? ' stuck' : ''}`)}
      >
        <Nav mobile={mobile} colorway={colorway} menuColorway={menuColorway}>
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
  menuColorway: colorwayOptions,
  navItems: PropTypes.node,
}

const { colorway: colorwayDefault } = colorwayDefaultProps('background')
SiteHeaderBase.defaultProps = {
  ...layoutDefaultProps(),
  sticky: false,
  menuColorway: colorwayDefault,
}

export default withTheme(SiteHeaderBase)
