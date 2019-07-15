/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import Label from './label'
import { isArray } from '../../utils/utils'

const StyledFormGroupHeading = styled(Label)`
  font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`

const StyledGroupField = styled('div')`
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
`

const StyledGroup = styled('div')`
  margin-top: ${({ theme }) => theme.spacing.small};
`

class Group extends React.Component {
  constructor(props) {
    super(props)
    const { children } = props
    this.childArray = isArray(children) ? children : [children]
    this.content = this.childArray.map(child => <StyledGroupField key={uuid()}>{child}</StyledGroupField>)
  }

  render() {
    const { heading, className, ...others } = this.props
    return (
      <StyledGroup className={(className, 'form-group')} {...others}>
        {heading && <StyledFormGroupHeading>{heading}</StyledFormGroupHeading>}
        {this.content}
      </StyledGroup>
    )
  }
}

Group.propTypes = {
  heading: PropTypes.string,
}

Group.defaultProps = {
  heading: '',
}

export default Group
