import React from 'react'
import PropTypes from 'prop-types'
import NavMenu from './items/menu'
import IconMenu from '../icons/menu'
import { cx } from 'react-emotion'

const Nav = ({ mobile, setOpenMenu, clearOpenMenu, children, className, ...others }) => {
  if (mobile) {
    return (
      <NavMenu content={<IconMenu/>} className={cx('nav', 'mobile', className)} {...others}>{children}</NavMenu>
    )
  } else {
    return <nav className={cx('nav', className)} {...others}>{children}</nav>
  }
}

Nav.propTypes = {
  mobile: PropTypes.bool,
  setOpenMenu: PropTypes.func.isRequired,
  clearOpenMenu: PropTypes.func.isRequired,
}

Nav.propTypes = {
  mobile: false,
}

export default Nav
