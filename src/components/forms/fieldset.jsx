import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { rgb } from '../../themes/utils'
import { HeadingCopy } from '../typography/headings/copy'

const StyledFieldset = styled('div')`
  .fieldset-legend {
    line-height: 1.2em;
    font-size: 1em;
    color: ${({ theme }) => rgb(theme.colors.copy.default)};
  }
  > *:not(.fieldset-legend) {
    background: ${({ theme }) => rgb(theme.colors.light.default)};
    &:not(.form-group) {
      padding: .5em 1em;
    }
    &:nth-child(2):not(.form-group) {
      padding-top: 1em;
    }
  }
`

const Legend = ({ text, className }) => <HeadingCopy className={cx(className, 'fieldset-legend')}>{text}</HeadingCopy>

Legend.propTypes = {
  text: PropTypes.string,
}

const Fieldset = ({ legend, className, children }) => (
  <StyledFieldset className={cx(className, 'fieldset')}>
    {legend === '' ? '' : <Legend text={legend}/>}
    {children}
  </StyledFieldset>
)

Fieldset.propTypes = {
  legend: PropTypes.string,
}

Fieldset.defaultProps = {
  legend: '',
}

export default Fieldset
