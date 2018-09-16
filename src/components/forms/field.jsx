import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const Styled = styled('div')`
  grid-row-start: 2;
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]) {
    width: 100%;
  }
`

const Field = ({ className, children, ...others }) => (
  <Styled className={cx(className, 'field')} {...others}>{children}</Styled>
)

Field.propTypes = {
  className: PropTypes.string,
}

export default Field
