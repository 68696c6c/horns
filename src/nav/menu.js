import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import operations from '../../state/operations'
import NavItem from './items/item'
import { css, cx } from 'react-emotion'

export class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      active: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
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
      this.props.setActiveMenu(null)
      this.setState(() => ({
        open: false,
      }))
    }
  }

  openMenu() {
    if (!this.cancelled) {
      this.setState(() => ({
        open: true,
      }), () => {
        this.props.setActiveMenu(this.props.menuName)
      })
    }
  }

  toggleMenu(event) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.cancelled) {
      const activeMenu = this.props.activeMenu === this.props.menuName ? '' : this.props.menuName
      this.props.setActiveMenu(activeMenu)
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
    if (this.props.activeMenu === this.props.menuName) {
      openStyle = css`display: block;`
    }
    const openClass = this.props.activeMenu === this.props.menuName ? 'open' : ''
    const activeClass = typeof window !== 'undefined' && this.props.hrefs.indexOf(window.location.pathname) >= 0 ? 'active' : ''
    return (
      <span className={cx('nav-item-menu', openClass, style, this.props.className)}>
        <NavItem href="#" className={cx('nav-item-menu-content', activeClass)} data-menu={this.props.menuName} onClick={this.toggleMenu}>
          {this.props.content}
        </NavItem>
        <nav className={cx('nav-item-menu-items', menuItemsStyle, openStyle)}>
          {this.props.children}
        </nav>
      </span>
    )
  }
}

NavMenu.propTypes = {
  menuName: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  hrefs: PropTypes.array,
  setActiveMenu: PropTypes.func.isRequired,
}

NavMenu.defaultProps = {
  hrefs: [],
}

const mapStateToProps = ({ activeMenu }) => {
  return { activeMenu }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveMenu: (menu) => {
      dispatch(operations.setActiveMenu(menu))
    }
  }
}

const ConnectedNavMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMenu)

export default ConnectedNavMenu
