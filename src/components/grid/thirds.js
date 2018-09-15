import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints, gridGap } from '../../styles/theme'
import { css, cx } from 'react-emotion'

// Creates a one-third/two-thirds grid layout.
const GridThirds = ({ side = 'right', gap = true, centered = true, breakPoint = 'small', ...props }) => {
  const gutter = css`((100vw - 1200px) / 2)`
  const oneThird = css`calc((1200px / 3) + ${gutter})`, twoThirds = css`calc(((1200px / 3) * 2) + ${gutter})`
  const minWidth = breakpoints[breakPoint]
  const minPadding = gap ? gridGap : '0px';
  const childStyle = !centered ? '' : css`
    > :nth-child(odd) {
      padding-left: ${minPadding};
      padding-right: ${minPadding};
    }
    > :nth-child(even) {
      padding-left: ${minPadding};
      padding-right: ${minPadding};
    }
    @media(min-width: ${breakpoints.max}) {
      > :nth-child(odd) {
        padding-left: calc(((100vw - ${breakpoints.max}) / 2) + ${minPadding});
        padding-right: 0;
      }
      > :nth-child(even) {
        padding-left: 0;
        padding-right: calc(((100vw - ${breakpoints.max}) / 2) + ${minPadding});
      }
    }
  `
  const breakStyle = !centered ? '' : css`
    @media(min-width: ${breakpoints.max}) {
      grid-template-columns: ${side === 'left' ? css`${twoThirds} ${oneThird}` : css`${oneThird} ${twoThirds}`};
    }
  `
  const style = css`
    grid-template-rows: auto;
    grid-template-areas: "left right";
    grid-template-columns: ${side === 'left' ? '2fr 1fr' : '1fr 2fr'};
    width: 100%;
    @media(min-width: ${minWidth}) {
      display: grid;
    }
    ${gap ? css`grid-gap: ${gridGap};` : ''};
    ${breakStyle}
    ${childStyle}
  `
  return (
    <div className={cx('thirds', style, props.className)}>
      {props.children}
    </div>
  )
}

GridThirds.propTypes = {
  side: PropTypes.string,
  gap: PropTypes.bool,
  centered: PropTypes.bool,
  breakpoint: PropTypes.string,
}

export default GridThirds
