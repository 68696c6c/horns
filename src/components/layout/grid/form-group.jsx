import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { isArray, isUndefined } from '../../../utils/utils'
import {
  paddedDefaultProps,
  paddedPropTypes,
  responsiveDefaultProps,
  responsivePropTypes,
} from '../../../mixins'
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
    const { heading, breakpoint, className, children, ...others } = this.props
    return (
      <Styled.FormGroupInline
        breakpoint={breakpoint}
        className={`${className} inline-group`}
        {...others}
      >
        {heading && (
          <Styled.FormGroupHeading
            end={(isArray(children) ? children : [children]).length}
          >
            {heading}
          </Styled.FormGroupHeading>
        )}
        {(isArray(children) ? children : [children])
          .filter(c => !isUndefined(c.type))
          .map((child, index) => {
            let result = (
              <Styled.FormGroupField
                breakpoint={breakpoint}
                key={this.keys[index]}
              >
                {child}
              </Styled.FormGroupField>
            )
            if (
              isComponentType(child, 'Checkbox') ||
              isComponentType(child, 'Radio') ||
              isComponentType(child, 'Button')
            ) {
              result = (
                <Styled.FormGroupField
                  breakpoint={breakpoint}
                  key={this.keys[index]}
                >
                  <Styled.FormGroupVerticalContainer>
                    {child}
                  </Styled.FormGroupVerticalContainer>
                </Styled.FormGroupField>
              )
            }
            return result
          })}
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
