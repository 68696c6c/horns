import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './items/item'
import { css, cx } from 'react-emotion'

// @TODO need to D.R.Y. this out with the NavMenu component.
export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      active: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.cancelled = false
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu)
    if (!this.cancelled) {
      this.setState(() => ({
        active: this.props.hrefs.indexOf(window.location.pathname) >= 0,
      }))
    }
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  closeMenu() {
    if (!this.cancelled) {
      this.setState(prevState => ({
        open: false,
      }))
    }
  }

  toggleMenu(event) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.cancelled) {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
  }

  render() {
    const style = css`position: relative;`
    // @TODO figure out z-index madness.
    const menuItemsStyle = css`
      position: absolute;
      left: 0;
      top: 100%;
      z-index: 2;
    `
    let openStyle = css`display: none;`
    if (this.state.open) {
      openStyle = css`display: block;`
    }
    const openClass = this.state.open ? 'open' : ''
    const activeClass = typeof window !== 'undefined' && this.props.hrefs.indexOf(window.location.pathname) >= 0 ? 'active' : ''
    return (
      <span className={cx('nav-item-menu', openClass, style, this.props.className)}>
        <NavItem href="#" className={cx('nav-item-menu-content', activeClass)} onClick={this.toggleMenu}>
          {this.props.content}
        </NavItem>
        <nav className={cx('nav-item-menu-items', menuItemsStyle, openStyle)}>
          {this.props.children}
        </nav>
      </span>
    )
  }
}

MobileMenu.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  hrefs: PropTypes.array,
}

MobileMenu.defaultProps = {
  hrefs: [],
}
