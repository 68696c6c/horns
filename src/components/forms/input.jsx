import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import styled, { cx } from 'react-emotion'
import { randomString } from '../../utils/utils'
import Label from './label'
import { baseInput } from './utils'

const StyledInput = styled('input')`
  ${({ theme }) => baseInput(theme)}
`
const StyledMask = styled(InputMask)`
  ${({ theme }) => baseInput(theme)}
`

const Input = ({ type, name, value, id, label, placeholder, required, hasError, className, ...others }) => {
  const errorClass = hasError ? 'error' : ''
  const idValue = id === '' ? randomString() : id
  let Tag = StyledInput
  // @TODO add more masks for other types and use props for the mask format.
  if (type === 'tel') {
    Tag = StyledMask
    others.mask = '999.999.9999'
    others.maskChar = '_'
  }
  return (
    <React.Fragment>
      {label ? <Label htmlFor={id} className={errorClass}>{label}</Label> : ''}
      <Tag
        type={type}
        name={name}
        value={value}
        id={idValue}
        className={cx(className, 'input', errorClass)}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...others}
      />
    </React.Fragment>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
}

export default Input
