import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { css, cx } from 'react-emotion'
import Field from './field'
import Label from './label'

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
  @media(min-width: ${({ breakpoint }) => breakpoint}) {
    display: grid;
    grid-auto-columns: max-content;
    grid-template-columns: repeat(auto-fill, calc(${({ min }) => min}% - 1em));
    justify-content: space-between;
    column-gap: 1em;
  }
`

Styled.propTypes = {
  min: PropTypes.number.isRequired,
}

const Group = ({ heading, breakpoint, className, children, ...others }) => {
  const min = 100 / children.length
  return (
    <Styled min={min} className={cx(className, 'form-group')} {...others}>
      {heading === '' ? '' : <FormGroupHeading text={heading} end={children.length}/>}
      {children.map(child => <Field key={uuid()}>{child}</Field>)}
    </Styled>
  )
}

Group.propTypes = {
  heading: PropTypes.string,
  breakpoint: PropTypes.string,
}

Group.defaultProps = {
  heading: '',
  breakpoint: 'medium',
}

export default Group
