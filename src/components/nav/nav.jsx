import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import styled, { cx } from 'react-emotion'
import NavMenu from './items/menu'
import { navItemInline } from './items/base'
import { isArray } from '../../utils/utils'

const Styled = styled('nav')`
  .nav-item, a {
    ${({ theme }) => navItemInline(theme)};
  }
  .nav-item-menu > .nav-item-menu-items {
    position: absolute;
    left: 0;
    padding-left: 0;
  }
`

const Nav = ({ mobile, children, className, ...others }) => {
  let content = children
  if (mobile) {
    const items = isArray(children) ? children : [children]
    content = (
      <NavMenu content={<FaBars/>} className={cx('nav', 'mobile', className)} {...others}>{items}</NavMenu>
    )
  }
  return <Styled className={cx('nav', className)} {...others}>{content}</Styled>
}

Nav.propTypes = {
  mobile: PropTypes.bool,
}

Nav.defaultProps = {
  mobile: false,
}

export default Nav
