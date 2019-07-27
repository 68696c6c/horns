/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import Label from './label'
import { isArray, isUndefined } from '../../utils/utils'

const StyledFormGroupHeading = styled(Label)`
  grid-column-end: span ${({ end }) => end};
  font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
  margin-top: ${({ theme }) => theme.spacing.tiny};
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
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
  input:not([type='checkbox']):not([type='radio']):not([type='submit']),
  textarea {
    width: 100%;
  }
  label {
    margin-top: 0;
  }
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    input:not([type='checkbox']):not([type='radio']):not([type='submit']),
    textarea,
    .select-custom-container {
      margin-bottom: 0;
    }
  }
`

const StyledToggleContainer = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.tiny};
`

const StyledGroupInline = styled('div')`
  margin-top: ${({ theme }) => theme.spacing.small};
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: grid;
    grid-auto-columns: 1fr;
    column-gap: ${({ theme }) => theme.spacing.small};
  }
`

const GroupInline = ({ heading, breakpoint, className, children, ...others }) => (
  <StyledGroupInline breakpoint={breakpoint} className={`${className} inline-group`} {...others}>
    {heading && <FormGroupHeading text={heading} end={(isArray(children) ? children : [children]).length} />}
    {(isArray(children) ? children : [children]).filter(c => (!isUndefined(c.type))).map(child => {
      if (child.type.displayName === 'Checkbox' || child.type.displayName === 'Radio' || child.props.mdxType === 'Checkbox' || child.props.mdxType === 'Radio') {
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

GroupInline.propTypes = {
  heading: PropTypes.string,
  breakpoint: PropTypes.string,
  className: PropTypes.string,
}

GroupInline.defaultProps = {
  heading: '',
  breakpoint: 'medium',
  className: '',
}

export default GroupInline
