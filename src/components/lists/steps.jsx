import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled from 'react-emotion'
import { colorVariantCSS, font } from '../utils'
import { isArray, isUndefined } from '../../utils/utils'
import baseList from './base'

const StyledStepIconWrapper = styled('span')`
  display: inline-block;
  ${({ theme }) => font(theme, 'large')};
  width: 2em;
  height: 2em;
  margin-bottom: .75em;
`
const StyledStepIcon = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ rounded }) => rounded ? 'border-radius: 50%' : ''};
  ${({ theme, variant }) => colorVariantCSS(theme, variant)};
`
const StyledListSteps = styled('ol')`
  ${({ theme }) => baseList(theme)};
`
const StyledListStepItem = styled('li')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xsmall};
`
const StyledListStepsContent = styled('div')`
  text-align: center;
`

const renderItems = (children, variant, rounded) => {
  const childrenArray = isArray(children) ? children : [children]
  return childrenArray.map((child, index) => {
    let props = {
      ...child.props
    }
    if (isUndefined(props.variant)) {
      props.variant = variant
    }
    return (
      <ListStepsItem number={index + 1} rounded={rounded} key={uuid()} {...props}>
        <StyledListStepsContent>
          {child.props.children}
        </StyledListStepsContent>
      </ListStepsItem>
    )
  })
}

const ListStepsItem = ({ number, rounded, variant, children, ...others }) => (
  <StyledListStepItem {...others}>
    <StyledStepIconWrapper>
      <StyledStepIcon rounded={rounded} variant={variant}>{number}</StyledStepIcon>
    </StyledStepIconWrapper>
    {children}
  </StyledListStepItem>
)

ListStepsItem.propTypes = {
  number: PropTypes.number.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'copy',
  ]),
}

const ListSteps = ({ rounded, variant, children, ...others }) => (
  <StyledListSteps {...others}>
    {renderItems(children, variant, rounded)}
  </StyledListSteps>
)

ListSteps.propTypes = {
  icons: PropTypes.string,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'copy',
  ]),
}

ListSteps.defaultProps = {
  rounded: true,
  variant: 'copy',
}

export default ListSteps
