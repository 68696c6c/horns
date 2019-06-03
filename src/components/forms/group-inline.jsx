import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import styled, { cx } from 'react-emotion'
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
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea {
    width: 100%;
  }
  label {
    margin-top: 0;
  }
  @media(min-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, .select-custom-container {
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

class GroupInline extends React.Component {
  constructor(props) {
    super(props)
    const { children, breakpoint } = props
    this.childArray = isArray(children) ? children : [children]
    this.content = this.childArray.filter(c => (!isUndefined(c.type))).map(child => {
      if (child.type.displayName === 'Checkbox' || child.type.displayName === 'Radio') {
        return (
          <StyledGroupField breakpoint={breakpoint} key={uuid()}>
            <StyledToggleContainer>{child}</StyledToggleContainer>
          </StyledGroupField>
        )
      } else {
        return <StyledGroupField breakpoint={breakpoint} key={uuid()}>{child}</StyledGroupField>
      }
    })
  }

  render() {
    const { heading, breakpoint, className, ...others } = this.props
    return (
      <StyledGroupInline breakpoint={breakpoint} className={cx(className, 'inline-group')} {...others}>
        {heading && <FormGroupHeading text={heading} end={this.childArray.length}/>}
        {this.content}
      </StyledGroupInline>
    )
  }
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
