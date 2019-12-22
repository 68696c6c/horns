import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'

import NavMenu from './items/menu'
import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
} from '../../mixins'
import { isArray } from '../../utils'
import * as Styled from './styles'

const Nav = ({ mobile, colorway, children, ...others }) => {
  let content = children
  if (mobile) {
    const items = isArray(children) ? children : [children]
    content = (
      <NavMenu
        menuVariant={colorway}
        content={<FaBars />}
        {...handleProps(others, 'nav mobile')}
      >
        {items}
      </NavMenu>
    )
  }
  return <Styled.Nav {...handleProps(others, 'nav')}>{content}</Styled.Nav>
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
