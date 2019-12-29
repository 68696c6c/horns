import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import uuid from 'uuid/v4'

import NavItem from './items/item'
import NavItemMenu from './items/menu'
import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
} from '../../mixins'
import { isArray, isComponentType } from '../../utils'
import NavItemSticky from './items/sticky'
import * as Styled from './styles'

const Nav = ({ mobile, colorway, menuColorway, children, ...others }) => {
  const items = isArray(children) ? children : [children]
  let content
  if (mobile) {
    content = (
      <NavItemMenu colorway={colorway} content={<FaBars />} className="mobile">
        {items}
      </NavItemMenu>
    )
  } else {
    content = items.map(child => {
      const props = {
        ...child.props,
        colorway,
        menuColorway,
      }
      if (isComponentType(child, 'NavItemMenu')) {
        return (
          <NavItemMenu {...props} key={uuid()}>
            {child.props.children}
          </NavItemMenu>
        )
      }
      if (isComponentType(child, 'NavItemSticky')) {
        return <NavItemSticky {...props} key={uuid()} />
      }
      return (
        <NavItem {...props} key={uuid()}>
          {child.props.children}
        </NavItem>
      )
    })
  }
  return (
    <Styled.Nav colorway={colorway} {...handleProps(others, 'nav')}>
      {content}
    </Styled.Nav>
  )
}

const { colorway: colorwayOptions } = colorwayPropTypes()
Nav.propTypes = {
  ...colorwayPropTypes(),
  mobile: PropTypes.bool,
  menuColorway: colorwayOptions,
}

const { colorway: colorwayDefault } = colorwayDefaultProps('background')
Nav.defaultProps = {
  ...colorwayDefaultProps(),
  mobile: false,
  menuColorway: colorwayDefault,
}

export default Nav
