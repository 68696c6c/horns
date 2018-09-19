import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import NavItem from './item'
import { rgb } from '../../../themes/utils'

const StyledMenu = styled('nav')`
  display: ${({ open }) => open ? 'block' : 'none'};
  .nav-item {
    display: block;
    background: ${({ theme }) => rgb(theme.colors.background.dark)};
    border: none;
    padding: .5rem 1rem;
  }
`
StyledMenu.propTypes = {
  open: PropTypes.bool.isRequired,
}

class NavItemMenu extends React.Component {
  constructor(props) {
    super(props)
    // open = menu is open
    // active = active class; current page matches one of this menu's nav items
    this.state = {
      open: false,
      active: false,
    }
    this.hasActiveItem = this.hasActiveItem.bind(this)
    this.setMenuState = this.setMenuState.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.cancelled = false
    this.menuID = uuid()

    this.hrefs = props.children.map(child => {
      return child.props.href
    })
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu)
    if (!this.cancelled) {
      const active = this.hasActiveItem(window.location.pathname)
      this.setState(() => ({ active }))
    }
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
  }

  hasActiveItem(pathname) {
    return this.hrefs.indexOf(pathname) >= 0
  }

  setMenuState(open) {
    if (!this.cancelled) {
      this.setState(() => ({ open }), () => {
        if (open) {
          this.props.setOpenMenu(this.menuID)
        } else {
          this.props.clearOpenMenu()
        }
      })
    }
  }

  closeMenu() {
    this.setMenuState(false)
  }

  openMenu() {
    this.setMenuState(true)
  }

  handleClick(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.open) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  render() {
    const activeClass = this.state.active ? 'active' : ''
    const { content, variant, className, children } = this.props
    return (
      <React.Fragment>
        <NavItem href="#" variant={variant} className={cx(className, activeClass)} onClick={this.handleClick}>
          {content}
        </NavItem>
        <StyledMenu open={this.state.open} className="nav-item-menu-items">{children}</StyledMenu>
      </React.Fragment>
    )
  }
}

NavItemMenu.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  setOpenMenu: PropTypes.func.isRequired,
  clearOpenMenu: PropTypes.func.isRequired,
}

export default NavItemMenu
