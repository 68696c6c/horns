import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './item'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../events'

class NavItemSticky extends React.Component {
  constructor(props) {
    super(props)

    this.handleStick = this.handleStick.bind(this)
    this.handleUnStick = this.handleUnStick.bind(this)

    this.state = {
      stuck: false,
    }
  }

  componentDidMount() {
    window.addEventListener(EVENT_HEADER_STICK, this.handleStick)
    window.addEventListener(EVENT_HEADER_UNSTICK, this.handleUnStick)
  }

  componentWillUnmount() {
    window.removeEventListener(EVENT_HEADER_STICK, {})
    window.removeEventListener(EVENT_HEADER_UNSTICK, {})
  }

  handleStick() {
    this.setState(() => ({ stuck: true }))
  }

  handleUnStick() {
    this.setState(() => ({ stuck: false }))
  }

  render() {
    const { href, content, stuckContent, children, ...others } = this.props
    return <NavItem href={href} {...others}>{this.state.stuck ? stuckContent : content}</NavItem>
  }
}

NavItemSticky.propTypes = {
  href: PropTypes.string,
  content: PropTypes.element,
  stuckContent: PropTypes.element,
}

NavItemSticky.defaultProps = {
  href: '/',
}

export default NavItemSticky
