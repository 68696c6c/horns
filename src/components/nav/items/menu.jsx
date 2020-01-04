/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import NavItem from './item'
import {
  EVENT_MENU_OPEN,
  EVENT_MENU_CLOSE,
  EVENT_MENU_CLOSE_OTHERS,
} from '../../../events'
import {
  colorwayDefaultProps,
  colorwayPropTypes,
  handleProps,
} from '../../../mixins'
import {
  isArray,
  isComponentType,
  isUndefined,
  getParentByClassName,
} from '../../../utils/utils'
import * as Styled from './styles'

class NavItemMenu extends React.Component {
  constructor(props) {
    super(props)
    // open = menu is open
    // current = current class; current page matches one of this menu's nav items
    const { current } = this.props
    this.state = {
      open: false,
      current,
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
      if (isComponentType(child, 'NavItemMenu')) {
        child.props.children.forEach(subChild => {
          if (
            !isUndefined(subChild.props) &&
            !isUndefined(subChild.props.href)
          ) {
            this.hrefs.push(subChild.props.href)
          }
        })
      }
    })

    this.menuRef = React.createRef()
  }

  componentDidMount() {
    window.removeEventListener('click', {})
    window.addEventListener('click', () => {
      this.closeMenu()
    })
    window.addEventListener(EVENT_MENU_CLOSE_OTHERS, event => {
      if (!event.detail.menuIDs.includes(this.menuID)) {
        this.closeMenu()
      }
    })
    this.menuRef.current.addEventListener(EVENT_MENU_OPEN, event => {
      event.stopPropagation()
      if (event.detail.menuID === this.menuID) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    })
    this.menuRef.current.addEventListener(EVENT_MENU_CLOSE, event => {
      if (event.detail.menuID === this.menuID) {
        this.closeMenu()
      }
    })
    if (!this.cancelled) {
      const current = this.hasActiveItem(window.location.pathname)
      this.setState(() => ({ current }))
    }
  }

  componentWillUnmount() {
    this.cancelled = true
    window.removeEventListener('click', {})
    window.removeEventListener(EVENT_MENU_CLOSE_OTHERS, {})
  }

  getEventData() {
    const { menuID } = this
    return {
      bubbles: true,
      detail: { menuID },
    }
  }

  getCloseOthersEventData(event) {
    const menuIDs = [this.menuID]
    let ancestor = event.target
    menuIDs.push(ancestor.dataset.menu_id)
    while (ancestor !== null) {
      menuIDs.push(ancestor.dataset.menu_id)
      ancestor = getParentByClassName(ancestor, 'nav-item-menu')
    }
    return {
      bubbles: true,
      detail: { menuIDs },
    }
  }

  setMenuState(open) {
    if (!this.cancelled) {
      this.setState(() => ({ open }))
    }
  }

  fireOpen(event) {
    this.menuRef.current.dispatchEvent(
      new CustomEvent(EVENT_MENU_OPEN, this.getEventData())
    )
    this.menuRef.current.dispatchEvent(
      new CustomEvent(
        EVENT_MENU_CLOSE_OTHERS,
        this.getCloseOthersEventData(event)
      )
    )
  }

  fireClose() {
    this.menuRef.current.dispatchEvent(
      new CustomEvent(EVENT_MENU_CLOSE, this.getEventData())
    )
  }

  hasActiveItem(pathname) {
    return this.hrefs.indexOf(pathname) >= 0
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
    const { open } = this.state
    const { onClick } = this.props
    if (open) {
      this.fireClose()
    } else {
      this.fireOpen(event)
    }
    onClick(event)
  }

  render() {
    const {
      content,
      variant,
      colorway,
      menuColorway,
      children,
      level,
      ...others
    } = this.props
    const { current, open } = this.state
    const items = isArray(children) ? children : [children]
    return (
      <Styled.NavItemMenu
        data-menu_id={this.menuID}
        {...handleProps(others, 'nav-item-menu')}
      >
        <NavItem
          href="#"
          variant={variant}
          colorway={level >= 1 ? menuColorway : colorway}
          current={current}
          onClick={this.handleClick}
        >
          {content}
        </NavItem>
        <Styled.MenuContainer className="menu-container">
          <Styled.Menu
            colorway={menuColorway}
            open={open}
            ref={this.menuRef}
            className="menu"
            variant={variant}
            level={level}
          >
            {items.map(child => {
              const props = {
                ...child.props,
                colorway,
                menuColorway,
                variant: 'stacked',
              }
              return isComponentType(child, 'NavItemMenu') ? (
                <NavItemMenu
                  {...props}
                  key={uuid()}
                  level={level + 1}
                  current={current}
                >
                  {child.props.children}
                </NavItemMenu>
              ) : (
                <NavItem {...props} colorway={menuColorway} key={uuid()}>
                  {child.props.children}
                </NavItem>
              )
            })}
          </Styled.Menu>
        </Styled.MenuContainer>
      </Styled.NavItemMenu>
    )
  }
}

const { colorway: colorwayOptions } = colorwayPropTypes()
NavItemMenu.propTypes = {
  ...colorwayPropTypes(),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  level: PropTypes.number,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['inline', 'stacked']),
  onClick: PropTypes.func,
  menuColorway: colorwayOptions,
}

const { colorway: colorwayDefault } = colorwayDefaultProps('background')
NavItemMenu.defaultProps = {
  ...colorwayDefaultProps(),
  current: false,
  level: 0,
  variant: 'inline',
  onClick: () => {},
  menuColorway: colorwayDefault,
}

export default NavItemMenu
