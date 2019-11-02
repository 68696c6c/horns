import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const textAlignOptions = [
  'left',
  'right',
  'center',
  'justify',
  'initial',
  'inherit',
]

export const flexOptionsX = ['left', 'center', 'right']
export const flexOptionsY = ['top', 'center', 'bottom']

export const Flex = ({ x, y }) => {
  let alignItems
  let justifyContent
  switch (x) {
    case 'left':
      justifyContent = 'flex-start'
      break
    case 'right':
      justifyContent = 'flex-end'
      break
    default:
      justifyContent = 'center'
  }
  switch (y) {
    case 'top':
      alignItems = 'flex-start'
      break
    case 'bottom':
      alignItems = 'flex-end'
      break
    default:
      alignItems = 'center'
  }
  return css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `
}

export const containerPropTypes = () => ({
  contained: PropTypes.bool,
})

export const containerDefaultProps = (contained = true) => ({
  contained,
})

export const ContainerSplit = ({ theme, contained }) => {
  if (!contained) {
    return ''
  }
  const container = theme.grid.getContainer()
  const gutter = `calc(((100vw - ${container}) / 2))`
  return css`
    > :nth-child(odd) {
      padding-left: ${gutter};
      padding-right: 0;
    }
    > :nth-child(even) {
      padding-left: 0;
      padding-right: ${gutter};
    }
  `
}

export const Container = ({ theme, contained, fluid }) => {
  if (!contained || fluid) {
    return ''
  }
  const container = theme.grid.getContainer()
  const gutter = `calc(((100vw - ${container}) / 2))`
  return css`
    padding-left: ${gutter};
    padding-right: ${gutter};
  `
}

export const Padded = ({
  theme,
  contained,
  spacing,
  padded = '*',
  compact = '*',
}) => {
  if ((padded === '*' && compact) || (compact === '*' && !padded)) {
    return ''
  }
  const padding = theme.spacing.getSpacing(spacing)
  const paddingX = contained
    ? ''
    : css`
        padding-left: ${padding};
        padding-right: ${padding};
      `
  return css`
    padding-top: ${padding};
    padding-bottom: ${padding};
    ${paddingX}
  `
}
