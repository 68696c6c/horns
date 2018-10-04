import React from 'react'
import PropTypes from 'prop-types'
import OverScroll from 'gatsby-over-scroll'
import styled, { css, cx } from 'react-emotion'
import { rgb } from '../../themes/utils'

const ScrollProgress = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100%;
  ${({ visible }) => visible ? '' : 'display: none;'};
`
const ScrollProgressBar = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.dark.default)};
  height: 10px;
`
const ScrollProgressBarFill = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.primary.default)};
  height: 10px;
`
const ScrollContent = styled('div')`
  > * {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

export const ScrollLock = ({ speed, children, ...others }) => {
  const length = children.length
  const factor = speed || 1
  return (
    <OverScroll className="scroll-lock" slides={length} factor={factor} {...others}>
      {(page, progress) => {
        const beforeStart = page === 0 && progress === 0
        const afterEnd = (page + 1) === length && progress >= 100
        const hidden = beforeStart || afterEnd
        return (
          <div>
            <ScrollContent>
              {children[page]}
            </ScrollContent>
            <ScrollProgress visible={!hidden}>
              <ScrollProgressBar>
                <ScrollProgressBarFill style={{ width: `${progress}%` }}/>
              </ScrollProgressBar>
            </ScrollProgress>
          </div>
        )
      }}
    </OverScroll>
  )
}

ScrollLock.propTypes = {
  speed: PropTypes.number,
}

export default ScrollLock