/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { rgb } from '../../themes/utils'
import { font } from '../utils'
import Label from './label'

const StyledFieldset = styled('div')`
  &:not(:first-child) {
    margin-top: 1em;
  }
  .fieldset-legend {
    ${({ theme }) => font(theme, 'default', 'bold')};
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
    color: ${({ theme }) => rgb(theme.colors.copy.default)};
  }
`

const StyledFields = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.light.default)};
  padding: ${({ theme }) => theme.spacing.small};
  > *:first-child {
    margin-top: 0;
  }
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
  *:last-child {
    margin-bottom: 0;
  }
`

const Legend = ({ text, className }) => <Label className={(className, 'fieldset-legend')}>{text}</Label>

Legend.propTypes = {
  text: PropTypes.string,
}

const Fieldset = ({ legend, className, children, ...others }) => (
  <StyledFieldset className={(className, 'fieldset')} {...others}>
    {legend === '' ? '' : <Legend text={legend}/>}
    <StyledFields className="fields">{children}</StyledFields>
  </StyledFieldset>
)

Fieldset.propTypes = {
  legend: PropTypes.string,
}

Fieldset.defaultProps = {
  legend: '',
}

export default Fieldset
