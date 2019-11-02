import React from 'react'
import PropTypes from 'prop-types'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../events'

class HeaderStickyContent extends React.Component {
  constructor(props) {
    super(props)

    this.handleStick = this.handleStick.bind(this)
    this.handleUnStick = this.handleUnStick.bind(this)
    this.cancelled = false

    this.state = {
      stuck: false,
    }
  }

  componentDidMount() {
    window.addEventListener(EVENT_HEADER_STICK, this.handleStick)
    window.addEventListener(EVENT_HEADER_UNSTICK, this.handleUnStick)
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener(EVENT_HEADER_STICK, {})
    window.removeEventListener(EVENT_HEADER_UNSTICK, {})
  }

  handleStick() {
    if (!this.cancelled) {
      this.setState(() => ({ stuck: true }))
    }
  }

  handleUnStick() {
    if (!this.cancelled) {
      this.setState(() => ({ stuck: false }))
    }
  }

  render() {
    const { content, stuckContent, children, ...others } = this.props
    return <React.Fragment>{this.state.stuck ? stuckContent : content}</React.Fragment>
  }
}

HeaderStickyContent.propTypes = {
  content: PropTypes.element,
  stuckContent: PropTypes.element,
}

HeaderStickyContent.defaultProps = {}

export default HeaderStickyContent
