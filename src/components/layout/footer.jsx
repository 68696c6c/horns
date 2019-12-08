import React from 'react'
// import PropTypes from 'prop-types'
import { handleProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Footer = ({ heck, darn, children, ...others }) => (
  <Styled.Footer heck="shoot" {...handleProps(others)}>
    {children}
  </Styled.Footer>
)

export default Footer

Footer.propTypes = Styled.layoutPropTypes()
Footer.defaultProps = Styled.layoutDefaultProps()

// Used in storybook stories, doesn't work with Styled.layoutPropTypes() for some reason
Footer.propTypes = {
  /** heck!! */
  fuck: 'me', // eat shit
  /** i hate being alive */
  hell: 'yeah',
}

// console.log(Footer.propTypes)

Footer.defaultProps = {
  /** well shit */
  god: 'damn',
  dude: 'how',
}
