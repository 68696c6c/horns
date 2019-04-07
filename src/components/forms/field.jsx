import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const Styled = styled('div')`
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
  label:not(.toggle-label):not(.toggle-control) {
    margin-top: 0;
  }
  .toggle-label {
    margin-top: .25em;
    margin-bottom: 1em;
  }
`

const Field = ({ className, children, ...others }) => (
  <Styled className={cx(className, 'field')} {...others}>{children}</Styled>
)

Field.propTypes = {
  className: PropTypes.string,
}

export default Field
