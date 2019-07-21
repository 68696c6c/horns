/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const Styled = styled('div')`
  input:not([type='checkbox']):not([type='radio']):not([type='submit']), textarea {
    width: 100%;
  }
  .toggle-control,
  .toggle-label,
  .toggle-message {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`

const Field = ({ className, children, ...others }) => (
  <Styled className={(className, 'field')} {...others}>{children}</Styled>
)

Field.propTypes = {
  className: PropTypes.string,
}

export default Field
