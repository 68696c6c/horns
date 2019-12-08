import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { isArray, isUndefined } from '../../utils'
import {
  handleProps,
  paddedDefaultProps,
  paddedPropTypes,
  responsiveDefaultProps,
  responsivePropTypes,
} from '../../mixins'
import * as Styled from './styles'

const FormGroupHeading = ({ children, end }) => (
  <Styled.FormGroupHeading end={end} className="group-heading">
    {children}
  </Styled.FormGroupHeading>
)

FormGroupHeading.propTypes = {
  children: PropTypes.string.isRequired,
  end: PropTypes.number,
}

FormGroupHeading.defaultProps = {
  end: 1,
}

const isComponentType = (component, type) =>
  component.type.displayName === type ||
  component.type.name === type ||
  component.props.mdxType === type

class FormGroup extends React.Component {
  constructor(props) {
    super(props)
    this.keys = (isArray(props.children) ? props.children : [props.children])
      .filter(c => !isUndefined(c.type))
      .map(() => {
        return uuid()
      })
  }

  render() {
    const { heading, breakpoint, children, ...others } = this.props
    const fields = isArray(children) ? children : [children]
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
        {fields
          .filter(c => !isUndefined(c.type))
          .map((child, index) => (
            <Styled.FormGroupField
              breakpoint={breakpoint}
              key={this.keys[index]}
            >
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
}

FormGroup.propTypes = {
  ...paddedPropTypes(),
  ...responsivePropTypes(),
  heading: PropTypes.string,
  className: PropTypes.string,
}

FormGroup.defaultProps = {
  ...paddedDefaultProps('small'),
  ...responsiveDefaultProps('medium'),
  heading: '',
  className: '',
}

export default FormGroup
