import React from 'react'
import PropTypes from 'prop-types'
import Field from './field'
import { css, cx } from 'react-emotion'

const FormGroupHeading = ({ text, end, className }) => {
  const style = css`grid-column-end: span ${end};`
  return <label className={cx('form-group-heading', className, style)}>{text}</label>
}

FormGroupHeading.propTypes = {
  text: PropTypes.string.isRequired,
  end: PropTypes.number.isRequired,
}

FormGroupHeading.defaultProps = {
  end: 1,
}

const FormGroup = (props) => {
  const p = 100 / props.children.length
  const style = css`
    @media(min-width: ${props.breakpoint}) {
      display: grid;
      grid-auto-columns: max-content;
      grid-template-columns: repeat(auto-fill, calc(${p}% - 1em));
      justify-content: space-between;
      column-gap: 1em;
    }
  `
  const heading = props.heading === null ? '' : <FormGroupHeading text={props.heading} end={props.children.length}/>
  return (
    <div className={cx('form-group', props.className, style)}>
      {heading}
      {props.children.map((child, index) => (
        <Field>{child}</Field>
      ))}
    </div>
  )
}

FormGroup.propTypes = {
  heading: PropTypes.string,
  breakpoint: PropTypes.string.isRequired,
}

FormGroup.defaultProps = {
  heading: null,
}

export default FormGroup
