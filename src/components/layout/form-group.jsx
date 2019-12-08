import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { isArray, isUndefined, isComponentType } from '../../utils'
import {
  handleProps,
  paddedDefaultProps,
  paddedPropTypes,
  responsiveDefaultProps,
  responsivePropTypes,
} from '../../mixins'
import * as Styled from './styles'

const FormGroup = ({ heading, breakpoint, children, ...others }) => {
  const fields = (isArray(children) ? children : [children]).filter(
    c => !isUndefined(c.type)
  )
  return (
    <Styled.FormGroupInline
      {...handleProps(others, 'inline-group')}
      breakpoint={breakpoint}
    >
      {heading && (
        <Styled.FormGroupHeading end={fields.length}>
          {heading}
        </Styled.FormGroupHeading>
      )}
      {fields.map(child => (
        <Styled.FormGroupField breakpoint={breakpoint} key={uuid()}>
          {isComponentType(child, 'Checkbox') ||
          isComponentType(child, 'Radio') ||
          isComponentType(child, 'Button') ? (
            <Styled.FormGroupVerticalContainer>
              {child}
            </Styled.FormGroupVerticalContainer>
          ) : (
            child
          )}
        </Styled.FormGroupField>
      ))}
    </Styled.FormGroupInline>
  )
}

FormGroup.propTypes = {
  ...paddedPropTypes(),
  ...responsivePropTypes(),
  heading: PropTypes.string,
}

FormGroup.defaultProps = {
  ...paddedDefaultProps('small'),
  ...responsiveDefaultProps('medium'),
  heading: '',
}

export default FormGroup
