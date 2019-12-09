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

const Group = ({ inline, heading, breakpoint, children, ...others }) => {
  let Tag = Styled.Group
  let headingProps = {}
  let content = children
  if (inline) {
    Tag = Styled.GroupInline
    const fields = (isArray(children) ? children : [children]).filter(
      c => !isUndefined(c.type)
    )
    headingProps = { end: fields.length }
    content = fields.map(child => (
      <Styled.GroupField breakpoint={breakpoint} key={uuid()}>
        {isComponentType(child, 'Checkbox') ||
        isComponentType(child, 'Radio') ||
        isComponentType(child, 'Button') ? (
          <Styled.GroupVerticalContainer>
            {child}
          </Styled.GroupVerticalContainer>
        ) : (
          child
        )}
      </Styled.GroupField>
    ))
  }
  return (
    <Tag {...handleProps(others, 'group')} breakpoint={breakpoint}>
      {heading && (
        <Styled.GroupHeading {...headingProps}>
          {heading}
        </Styled.GroupHeading>
      )}
      {content}
    </Tag>
  )
}

Group.propTypes = {
  ...paddedPropTypes(),
  ...responsivePropTypes(),
  heading: PropTypes.string,
  inline: PropTypes.bool,
}

Group.defaultProps = {
  ...paddedDefaultProps('small'),
  ...responsiveDefaultProps('medium'),
  heading: '',
  inline: false,
}

export default Group
