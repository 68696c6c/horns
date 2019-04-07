import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import Label from './label'
import { isArray } from '../../utils/utils'

const StyledFormGroupHeading = styled(Label)`
  font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
  margin-top: 0;
  margin-bottom: .25em;
`

const StyledGroupField = styled('div')`
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
`

const StyledGroup = styled('div')`
  margin-top: 1em;
  .toggle-label {
    margin-top: .25em;
  }
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
      <StyledGroup className={cx(className, 'form-group')} {...others}>
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
