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

const FormGroup = ({ inline, heading, breakpoint, children, ...others }) => {
  let Tag = Styled.FormGroup
  let headingProps = {}
  let content = children
  if (inline) {
    Tag = Styled.FormGroupInline
    const fields = (isArray(children) ? children : [children]).filter(
      c => !isUndefined(c.type)
    )
    headingProps = { end: fields.length }
    content = fields.map(child => (
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
    ))
  }
  return (
    <Tag {...handleProps(others, 'form-group')} breakpoint={breakpoint}>
      {heading && (
        <Styled.FormGroupHeading {...headingProps}>
          {heading}
        </Styled.FormGroupHeading>
      )}
      {content}
    </Tag>
  )
}

FormGroup.propTypes = {
  ...paddedPropTypes(),
  ...responsivePropTypes(),
  heading: PropTypes.string,
  inline: PropTypes.bool,
}

FormGroup.defaultProps = {
  ...paddedDefaultProps('small'),
  ...responsiveDefaultProps('medium'),
  heading: '',
  inline: false,
}

export default FormGroup
