import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { rgb } from '../../themes/utils'
import { HeadingCopy } from '../typography'

const StyledFieldset = styled('div')`
  .fieldset-legend {
    line-height: 1.2em;
    font-size: 1em;
    color: ${({ theme }) => rgb(theme.colors.copy.default)};
  }
`

const StyledFields = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.light.default)};
  padding: 1em 1em 1px 1em;
  > *:first-child {
    margin-top: 0;
  }
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
`

const Legend = ({ text, className }) => <HeadingCopy className={cx(className, 'fieldset-legend')}>{text}</HeadingCopy>

Legend.propTypes = {
  text: PropTypes.string,
}

const Fieldset = ({ legend, className, children, ...others }) => (
  <StyledFieldset className={cx(className, 'fieldset')} {...others}>
    {legend === '' ? '' : <Legend text={legend}/>}
    <StyledFields>{children}</StyledFields>
  </StyledFieldset>
)

Fieldset.propTypes = {
  legend: PropTypes.string,
}

Fieldset.defaultProps = {
  legend: '',
}

export default Fieldset
