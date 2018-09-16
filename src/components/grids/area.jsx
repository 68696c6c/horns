import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const Styled = styled('div')`
  ${({ area }) => area === '' ? '' : `grid-area: ${area};`}
`

const Area = ({ className, children, ...others }) => {
  return <Styled className={cx(className, 'area')} {...others}>{children}</Styled>
}

Area.propTypes = {
  area: PropTypes.string,
}

Area.defaultProps = {
  area: '',
}

export default Area
