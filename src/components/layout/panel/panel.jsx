import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './title-bar'
import {
  handleProps,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import * as Styled from './styles'

// @TODO make the DataTable etc components use this.
const Panel = ({ title, colorway, children, ...others }) => (
  <Styled.Panel {...handleProps(others)}>
    <TitleBar colorway={colorway} fluid>
      {title}
    </TitleBar>
    <Styled.Body>{children}</Styled.Body>
  </Styled.Panel>
)

Panel.propTypes = {
  ...layoutPropTypes(),
  title: PropTypes.string,
}

Panel.defaultProps = {
  ...layoutDefaultProps(),
  title: '',
}

export default Panel
