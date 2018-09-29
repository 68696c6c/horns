import styled from 'react-emotion'
import { baseInput } from '../inputs/base'

const StyledSelect = styled('select')`
  ${({ theme }) => baseInput(theme)};
  appearance: none;
  cursor: pointer;
  &::-ms-expand { 
    display: none;
  }
`

export default StyledSelect