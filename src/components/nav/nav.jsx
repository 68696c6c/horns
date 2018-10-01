import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import styled, { cx } from 'react-emotion'
import NavMenu from './items/menu'
import { navItemInline } from './items/base'

const Styled = styled('nav')`
  .nav-item {
    ${navItemInline()};
  }
  > .nav-item-menu > .nav-item-menu-items {
    position: absolute;
    left: 0;
    padding-left: 0;
  }
`

const Nav = ({ mobile, children, className, ...others }) => {
  if (mobile) {
    return (
      <NavMenu content={<FaBars/>} className={cx('nav', 'mobile', className)} {...others}>{children}</NavMenu>
    )
  } else {
    return <Styled className={cx('nav', className)} {...others}>{children}</Styled>
  }
}

Nav.propTypes = {
  mobile: PropTypes.bool,
}

Nav.propTypes = {
  mobile: false,
}

export default Nav
