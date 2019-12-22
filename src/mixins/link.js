import PropTypes from 'prop-types'
import { colorwayDefaultProps, colorwayPropTypes } from './color'
import { childrenTextDefaultProps, childrenTextPropTypes } from './component'
import { fontDefaultProps, fontPropTypes } from './typography'

export const linkPropTypes = () => ({
  ...childrenTextPropTypes(),
  ...colorwayPropTypes(),
  ...fontPropTypes(),
  variant: PropTypes.oneOf(['link', 'button']),
})

export const linkDefaultProps = () => ({
  ...childrenTextDefaultProps(),
  ...colorwayDefaultProps('prominent'),
  ...fontDefaultProps('link'),
  variant: 'link',
})
