import React from 'react'
import PropTypes from 'prop-types'

import NavItem from './item'
import { EVENT_HEADER_STICK, EVENT_HEADER_UNSTICK } from '../../../events'
import {
  colorwayDefaultProps,
  colorwayPropTypes,
  fontDefaultProps,
  fontPropTypes,
  handleProps,
  paddedDefaultProps,
  paddedPropTypes,
} from '../../../mixins'

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
    // eslint-disable-next-line no-undef
    window.addEventListener(EVENT_HEADER_STICK, this.handleStick)
    // eslint-disable-next-line no-undef
    window.addEventListener(EVENT_HEADER_UNSTICK, this.handleUnStick)
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    window.removeEventListener(EVENT_HEADER_STICK, {})
    // eslint-disable-next-line no-undef
    window.removeEventListener(EVENT_HEADER_UNSTICK, {})
  }

  handleStick() {
    this.setState(() => ({ stuck: true }))
  }

  handleUnStick() {
    this.setState(() => ({ stuck: false }))
  }

  render() {
    // This component does not support children since it uses custom props for its content.
    // The children prop is destructed here to prevent passing it to handleProps.
    // eslint-disable-next-line react/prop-types
    const { content, stuckContent, children, ...others } = this.props
    const { stuck } = this.state
    return (
      <NavItem {...handleProps(others, 'nav-item-sticky')}>
        {stuck ? stuckContent : content}
      </NavItem>
    )
  }
}

NavItemSticky.propTypes = {
  ...colorwayPropTypes(),
  ...fontPropTypes(),
  ...paddedPropTypes(),
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['inline', 'stacked']),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  stuckContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

NavItemSticky.defaultProps = {
  ...colorwayDefaultProps(),
  ...fontDefaultProps('link'),
  ...paddedDefaultProps(),
  current: false,
  variant: 'inline',
  content: '',
  stuckContent: '',
}

export default NavItemSticky
