import React from 'react'
import PropTypes from 'prop-types'
import HeadingCopy from '../typography/heading/copy'
import { css, cx } from 'react-emotion'

const Legend = (props) => {
  const style = css``
  return (
    <HeadingCopy className={cx('fieldset-legend', props.className, style)}>
      {props.text}
    </HeadingCopy>
  )
}

Legend.propTypes = {
  text: PropTypes.string,
}

Legend.defaultProps = {
  text: null,
}

const Fieldset = (props) => {
  const style = css`
    .fieldset-legend {
      line-height: 1.2em;
      font-size: 1em;
    }
    > label {
      display: block;
    }
    > *:not(.fieldset-legend) {
      &:not(.form-group) {
        padding: .5em 1em;
      }
      &:nth-child(2):not(.form-group) {
        padding-top: 1em;
      }
    }
  `
  const legend = props.legend === null ? '' : <Legend text={props.legend}/>
  return (
    <div className={cx('fieldset', props.className, style)}>
      {legend}
      {props.children}
    </div>
  )
}

Fieldset.propTypes = {
  legend: PropTypes.string,
}

Fieldset.defaultProps = {
  legend: null,
}

export default Fieldset
