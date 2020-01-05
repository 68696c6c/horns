import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './title-bar'
import {
  childrenDefaultProps,
  childrenPropTypes,
  colorwayDefaultProps,
  colorwayPropTypes,
  handleProps,
  paddedDefaultProps,
  paddedPropTypes,
} from '../../../mixins'
import { Heading } from '../../typography'
import * as Styled from './styles'

// @TODO make the DataTable etc components use this.
const Panel = ({ title, colorway, bodyColorway, children, ...others }) => (
  <Styled.Panel {...handleProps(others, 'panel')}>
    <TitleBar colorway={colorway} fluid>
      <Heading level="h3">{title}</Heading>
    </TitleBar>
    <Styled.Body colorway={bodyColorway}>{children}</Styled.Body>
  </Styled.Panel>
)

const { colorway: colorwayOptions } = colorwayPropTypes()
Panel.propTypes = {
  ...childrenPropTypes(),
  ...colorwayPropTypes(),
  ...paddedPropTypes(),
  bodyColorway: colorwayOptions,
  title: PropTypes.string,
}

const { colorway: colorwayDefault } = colorwayDefaultProps('background')
Panel.defaultProps = {
  ...childrenDefaultProps(),
  ...colorwayDefaultProps('background:secondary'),
  ...paddedDefaultProps(),
  bodyColorway: colorwayDefault,
  title: '',
}

export default Panel
