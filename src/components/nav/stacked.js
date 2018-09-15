import React from 'react'
import Nav from './nav'
import { css, cx } from 'react-emotion'

export const NavStacked = (props) => {
  const style = css`
    & a {
      display: block;
    }
  `
  return (
    <Nav className={cx('nav-stacked', style, props.className)}>
      {props.children}
    </Nav>
  )
}

export default NavStacked
