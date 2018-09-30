import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { css, cx } from 'react-emotion'
import Field from './field'
import Label from './label'
import { isArray } from '../../utils/utils'

const FormGroupHeading = ({ text, end }) => {
  const style = css`grid-column-end: span ${end};`
  return <Label className={cx(style, 'form-group-heading')}>{text}</Label>
}

FormGroupHeading.propTypes = {
  text: PropTypes.string.isRequired,
  end: PropTypes.number,
}

FormGroupHeading.defaultProps = {
  end: 1,
}

const Styled = styled('div')`
  display: flex;
  justify-content: space-between;
  .field {
    display: flex;
    align-items: center;
    label {
      margin-top: 0;
      margin-right: .5em;
    }
    input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
      width: auto;
      margin-bottom: 0;
    }
    .select-custom-container {
      .select-custom, .select-custom-dropdown-container {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
`

Styled.propTypes = {
  min: PropTypes.number.isRequired,
}

const GroupInline = ({ heading, breakpoint, className, children, ...others }) => {
  const childArray = isArray(children) ? children : [children]
  const min = 100 / childArray.length
  return (
    <Styled min={min} className={cx(className, 'form-group')} {...others}>
      {heading === '' ? '' : <FormGroupHeading text={heading} end={childArray.length}/>}
      {childArray.map(child => <Field key={uuid()}>{child}</Field>)}
    </Styled>
  )
}

GroupInline.propTypes = {
  heading: PropTypes.string,
  breakpoint: PropTypes.string,
}

GroupInline.defaultProps = {
  heading: '',
  breakpoint: 'medium',
}

export default GroupInline
