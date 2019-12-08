import React from 'react'
import PropTypes from 'prop-types'

import { breakpoints, palletColorShades } from '../../../config'
import { handleProps, propTypeChildren } from '../../../utils'
import * as Styled from './styles'

const Columns = ({ children, ...others }) => (
  <Styled.Columns {...handleProps(others, 'columns')}>
    {children}
  </Styled.Columns>
)

Columns.propTypes = {
  children: propTypeChildren(),
  colorway: PropTypes.oneOf(palletColorShades),
  breakpoint: PropTypes.oneOf(breakpoints),
  contained: PropTypes.bool,
  columns: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

Columns.defaultProps = {
  children: null,
  colorway: '',
  breakpoint: '',
  contained: false,
  columns: 0,
}

export default Columns

// // Used in storybook stories, doesn't work with Styled.layoutPropTypes() for some reason
// Columns.propTypes = {
//   /** heck!! */
//   fuck: PropTypes.string.isRequired, // eat shit
//   /** i hate being alive */
//   hell: PropTypes.string,
// }

// // console.log(Footer.propTypes)

// Columns.defaultProps = {
//   /** well shit */
//   hell: 'damn',
// }
