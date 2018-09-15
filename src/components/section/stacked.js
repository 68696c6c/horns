import React from 'react'
import GridThirds from '../grid/thirds'
import { cx } from 'react-emotion'

export const SectionStacked = (props) => {
  return (
    <GridThirds className={cx('section-stacked', props.className)} gap={false}>
      {props.children}
    </GridThirds>
  )
}

export default SectionStacked
