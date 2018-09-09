import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const IconCircle = (props) => {
  return (
    <div className={cx('icon-circle', props.className)}>
      {props.children}
    </div>
  )
}

const ListStepContent = (props) => {
  return (
    <li className={cx('step', props.className)}>
      <span className={cx('step-number')}>
        <IconCircle className={cx('step-icon')}>{props.index}</IconCircle>
      </span>
      {props.children}
    </li>
  )
}

ListStepContent.propTypes = {
  index: PropTypes.number.isRequired,
}

export const ListStepItem = (props) => {
  return (
    <div className={cx('list-step-item', props.className)}>{props.children}</div>
  )
}

export const ListSteps = (props) => {
  const style = css`
    text-align: center;
    list-style-type: none;
  `
  return (
    <ol className={cx('steps', style, props.className)}>
      {props.children.map((child, index) => {
        return <ListStepContent children={child} index={index + 1} key={index}/>
      })}
    </ol>
  )
}

ListSteps.propTypes = {
  icons: PropTypes.string,
}

export default ListSteps
