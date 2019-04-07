import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
import Label from './label'
import { isArray } from '../../utils/utils'

const StyledFormGroupHeading = styled(Label)`
  grid-column-end: span ${({ end }) => end};
  font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
  margin: 0;
  grid-row: 1;
`

const FormGroupHeading = ({ text, end }) => (
  <StyledFormGroupHeading end={end} className="group-heading">{text}</StyledFormGroupHeading>
)

FormGroupHeading.propTypes = {
  text: PropTypes.string.isRequired,
  end: PropTypes.number,
}

FormGroupHeading.defaultProps = {
  end: 1,
}

const StyledGroupField = styled('div')`
  grid-row: 2;
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    label {
      margin-top: 0;
      margin-right: .5em;
    }
    input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
      max-width: 80%;
      margin-bottom: 0;
    }
    .select-custom-container {
      max-width: 80%;
      .select-custom, .select-custom-dropdown-container {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
`

const StyledToggleContainer = styled('div')`
  padding-top: .5em;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 80%;
  .toggle-control {
    margin-left: .25em;
  }
  .toggle-label {
    margin-top: 0;
  }
`

const StyledGroupInline = styled('div')`
  margin-top: 1.5em;
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: grid;
    grid-auto-columns: 1fr;
  }
`

StyledGroupInline.propTypes = {
  min: PropTypes.number.isRequired,
}

const GroupInline = ({ heading, breakpoint, className, children, ...others }) => {
  const childArray = isArray(children) ? children : [children]
  const min = 100 / childArray.length
  return (
    <StyledGroupInline breakpoint={breakpoint} min={min} className={cx(className, 'form-group')} {...others}>
      {heading === '' ? '' : <FormGroupHeading text={heading} end={childArray.length}/>}
      {childArray.map(child => {
        if (child.type.displayName === 'Checkbox' || child.type.displayName === 'Radio') {
          return (
            <StyledGroupField breakpoint={breakpoint} key={uuid()}>
              <StyledToggleContainer>{child}</StyledToggleContainer>
            </StyledGroupField>
          )
        } else {
          return <StyledGroupField breakpoint={breakpoint} key={uuid()}>{child}</StyledGroupField>
        }
      })}
    </StyledGroupInline>
  )
}

GroupInline.propTypes = {
  heading: PropTypes.string,
  breakpoint: PropTypes.string,
}

GroupInline.defaultProps = {
  heading: '',
  breakpoint: 'medium',
}

export default GroupInline
