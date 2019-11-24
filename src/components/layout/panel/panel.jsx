import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './title-bar'
import {
  handleProps,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import { Heading } from '../../typography'
import * as Styled from './styles'

// @TODO make the DataTable etc components use this.
const Panel = ({ title, colorway, children, ...others }) => (
  <Styled.Panel {...handleProps(others, 'panel')}>
    <TitleBar colorway={colorway} fluid>
      <Heading level="h3">{title}</Heading>
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
