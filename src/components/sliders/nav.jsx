/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { rgb } from '../../themes/utils'

export const StyledSliderNav = styled('nav')`
  position: absolute;
  bottom: .75em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const StyledSliderNavItem = styled('a')`
  background: ${({ theme, active }) => active ? rgb(theme.colors.light.alpha) : 'none'};
  border: 2px solid ${({ theme }) => rgb(theme.colors.light.alpha)};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  width: .5em;
  height: .5em;
  margin: 0 .25em; 
`

const StyledSliderArrow = styled('a')`
  position: absolute;
  top: 0;
  ${({ action }) => action === 'back' ? 'left: 0' : 'right: 0'};
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => rgb(theme.colors.light.alpha)};
  font-size: 2em;
  cursor: pointer;
`

export const SliderArrowBack = props => (
  <StyledSliderArrow action="back" {...props}>
    <FaAngleLeft />
  </StyledSliderArrow>
)

export const SliderArrowNext = props => (
  <StyledSliderArrow action="next" {...props}>
    <FaAngleRight />
  </StyledSliderArrow>
)

