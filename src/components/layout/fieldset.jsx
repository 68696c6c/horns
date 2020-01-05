import React from 'react'
import PropTypes from 'prop-types'

import {
  childrenDefaultProps,
  childrenPropTypes, colorwayDefaultProps, colorwayPropTypes,
  handleProps,
  paddedDefaultProps,
  paddedPropTypes,
} from '../../mixins'
import * as Styled from './styles'

const Fieldset = ({ legend, spacing, children, ...others }) => (
  <Styled.Fieldset {...handleProps(others, 'fieldset')} spacing={spacing}>
    {legend && <Styled.Legend spacing={spacing}>{legend}</Styled.Legend>}
    {children}
  </Styled.Fieldset>
)

Fieldset.propTypes = {
  ...childrenPropTypes(),
  ...paddedPropTypes(),
  legend: PropTypes.string.isRequired,
}

Fieldset.defaultProps = {
  ...childrenDefaultProps(),
  ...paddedDefaultProps(),
}

export default Fieldset
