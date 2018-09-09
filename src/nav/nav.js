import React from 'react'
import PropTypes from 'prop-types'
import NavMenu from './menu'
import IconMenu from '../icons/menu'
import { cx } from 'react-emotion'

export const Nav = (props) => {
  if (props.mobile) {
    return (
      <NavMenu content={<IconMenu/>} className={cx('nav', 'mobile', props.className)}>
        {props.children}
      </NavMenu>
    )
  } else {
    return (
      <nav className={cx('nav', props.className)}>
        {props.children}
      </nav>
    )
  }
}

Nav.propTypes = {
  mobile: PropTypes.bool,
}

export default Nav
