import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import NavMenu from './items/menu'
import { isArray } from '../../utils/utils'
import { COLOR_VARIANT_NONE } from '../utils'

import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
} from '../../utils'
import * as Styled from './styles'

// const Styled = styled('nav')`
//   .nav-item, a {
//     ${({ theme }) => navItemInline(theme)};
//   }
//   > .nav-item-menu {
//     display: inline-block;
//     > .nav-item-menu-items {
//       position: absolute;
//       left: 0;
//     }
//   }
// `

const Nav = ({ mobile, colorway, children, className, ...others }) => {
  let content = children
  if (mobile) {
    const items = isArray(children) ? children : [children]
    content = (
      <NavMenu
        menuVariant={colorway}
        content={<FaBars />}
        className={('nav', 'mobile', className)}
        {...others}
      >
        {items}
      </NavMenu>
    )
  }
  return <Styled.Nav className={('nav', className)} {...others}>{content}</Styled.Nav>
}

Nav.propTypes = {
  ...colorwayPropTypes(),
  mobile: PropTypes.bool,
}

Nav.defaultProps = {
  ...colorwayDefaultProps(),
  mobile: false,
}

export default Nav
