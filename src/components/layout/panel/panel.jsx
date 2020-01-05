import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './title-bar'
import {
  colorwayDefaultProps,
  colorwayPropTypes,
  handleProps,
  layoutDefaultProps,
  layoutPropTypes,
} from '../../../mixins'
import { Heading } from '../../typography'
import * as Styled from './styles'

// @TODO make the DataTable etc components use this.
const Panel = ({ title, colorway, bodyColorway, children, ...others }) => (
  <Styled.PanelSection>
    <Styled.Panel {...handleProps(others, 'panel')}>
      <TitleBar colorway={colorway} fluid>
        <Heading level="h3">{title}</Heading>
      </TitleBar>
      <Styled.Body colorway={bodyColorway}>{children}</Styled.Body>
    </Styled.Panel>
  </Styled.PanelSection>
)

const { colorway: colorwayOptions } = colorwayPropTypes()
Panel.propTypes = {
  ...layoutPropTypes(),
  bodyColorway: colorwayOptions,
  title: PropTypes.string,
}

const { colorway: colorwayDefault } = colorwayDefaultProps()
Panel.defaultProps = {
  ...layoutDefaultProps('background:secondary'),
  bodyColorway: colorwayDefault,
  title: '',
}

export default Panel
