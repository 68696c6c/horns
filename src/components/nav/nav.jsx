/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import NavMenu from './items/menu'
import { navItemInline } from './items/base'
import { isArray } from '../../utils/utils'
import { COLOR_VARIANT_NONE } from '../utils'

const Styled = styled('nav')`
  .nav-item, a {
    ${({ theme }) => navItemInline(theme)};
  }
  > .nav-item-menu {
    display: inline-block;
    > .nav-item-menu-items {
      position: absolute;
      left: 0;
    }
  }
`

const Nav = ({ mobile, menuVariant, children, className, ...others }) => {
  let content = children
  if (mobile) {
    const items = isArray(children) ? children : [children]
    content = (
      <NavMenu
        menuVariant={menuVariant}
        content={<FaBars/>}
        className={('nav', 'mobile', className)}
        {...others}
      >
        {items}
      </NavMenu>
    )
  }
  return <Styled className={('nav', className)} {...others}>{content}</Styled>
}

Nav.propTypes = {
  mobile: PropTypes.bool,
  menuVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'background',
    COLOR_VARIANT_NONE,
  ]),
}

Nav.defaultProps = {
  mobile: false,
  menuVariant: 'light',
}

export default Nav
