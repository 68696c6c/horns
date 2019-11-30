/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const StyledFormGroupHeading = styled('label')`
  font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`

const StyledGroup = styled('div')`
  margin-top: ${({ theme }) => theme.spacing.small};
  input:not([type='checkbox']):not([type='radio']):not([type='submit']),
  textarea {
    width: 100%;
  }
`

const Group = ({ heading, className, children, ...others }) => (
  <StyledGroup className={`${className} form-group`} {...others}>
    {heading && <StyledFormGroupHeading>{heading}</StyledFormGroupHeading>}
    {children}
  </StyledGroup>
)

Group.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
}

Group.defaultProps = {
  heading: '',
  className: '',
}

export default Group
