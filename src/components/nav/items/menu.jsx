import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled from 'react-emotion'
import NavItem from './item'
import { getEventName } from '../../../events'
import { navMenuItem } from './base'
import { isUndefined } from '../../../utils/utils'
import { colorVariantCSS } from '../../utils'
import { getParentByClassName } from '../../..'

const EVENT_OPEN = getEventName('menu:open')
const EVENT_CLOSE = getEventName('menu:close')
const EVENT_CLOSE_OTHERS = getEventName('menu:closeOthers')

const StyledMenuContainer = styled('span')`
  position: relative;
`
const StyledMenu = styled('nav')`
  display: ${({ open }) => open ? 'block' : 'none'};
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
  .nav-item, a {
    ${({ theme }) => navMenuItem(theme)};
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
    this.getEventData = this.getEventData.bind(this)
    this.fireOpen = this.fireOpen.bind(this)
    this.fireClose = this.fireClose.bind(this)
    this.getCloseOthersEventData = this.getCloseOthersEventData.bind(this)
    this.cancelled = false
    this.menuID = uuid()

    this.hrefs = []
    props.children.forEach(child => {
      if (!isUndefined(child.props) && !isUndefined(child.props.href)) {
        this.hrefs.push(child.props.href)
      }
    })

    this.menuRef = React.createRef()
  }

  componentDidMount() {
    window.removeEventListener('click', {})
    window.addEventListener('click', () => {
      this.closeMenu()
    })
    window.addEventListener(EVENT_CLOSE_OTHERS, event => {
      if (!event.detail.menuIDs.includes(this.menuID)) {
        this.closeMenu()
      }
    })
    this.menuRef.current.addEventListener(EVENT_OPEN, event => {
      event.stopPropagation()
      if (event.detail.menuID === this.menuID) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    })
    this.menuRef.current.addEventListener(EVENT_CLOSE, event => {
      if (event.detail.menuID === this.menuID) {
        this.closeMenu()
      }
    })
    if (!this.cancelled) {
      const active = this.hasActiveItem(window.location.pathname)
      this.setState(() => ({ active }))
    }
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
    window.removeEventListener(EVENT_CLOSE_OTHERS, {})
  }

  getEventData() {
    const menuID = this.menuID
    return {
      bubbles: true,
      detail: { menuID }
    }
  }

  getCloseOthersEventData(event) {
    let menuIDs = [this.menuID]
    let ancestor = getParentByClassName(event.target, 'nav-item-menu')
    menuIDs.push(ancestor.dataset.menu_id)
    while(ancestor !== null) {
      menuIDs.push(ancestor.dataset.menu_id)
      ancestor = getParentByClassName(ancestor, 'nav-item-menu')
    }
    return {
      bubbles: true,
      detail: { menuIDs }
    }
  }

  fireOpen(event) {
    this.menuRef.current.dispatchEvent(new CustomEvent(EVENT_OPEN, this.getEventData()))
    this.menuRef.current.dispatchEvent(new CustomEvent(EVENT_CLOSE_OTHERS, this.getCloseOthersEventData(event)))
  }

  fireClose() {
    this.menuRef.current.dispatchEvent(new CustomEvent(EVENT_CLOSE, this.getEventData()))
  }

  hasActiveItem(pathname) {
    return this.hrefs.indexOf(pathname) >= 0
  }

  setMenuState(open) {
    if (!this.cancelled) {
      this.setState(() => ({ open }))
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
      this.fireClose()
    } else {
      this.fireOpen(event)
    }
    this.props.onClick(event)
  }

  render() {
    const { content, variant, menuVariant, className, children } = this.props
    return (
      <StyledMenuContainer className="nav-item-menu" data-menu_id={this.menuID}>
        <NavItem
          href="#"
          variant={variant}
          className={className}
          active={this.state.active}
          onClick={this.handleClick}
        >
          {content}
        </NavItem>
        <StyledMenu
          variant={menuVariant}
          open={this.state.open}
          innerRef={this.menuRef}
          className="nav-item-menu-items"
        >
          {children}
        </StyledMenu>
      </StyledMenuContainer>
    )
  }
}

NavItemMenu.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  active: PropTypes.bool,
  variant: PropTypes.string,
  menuVariant: PropTypes.string,
  onClick: PropTypes.func,
}

NavItemMenu.defaultProps = {
  variant: 'none',
  menuVariant: 'light',
  active: false,
  onClick: () => {
  },
}

export default NavItemMenu
