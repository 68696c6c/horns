import styled from 'react-emotion'

export const StyledSliderNav = styled('nav')`
  position: absolute;
  bottom: .75em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const StyledSliderNavItem = styled('a')`
  ${({ active }) => active ? 'background: white;' : ''};
  border: 2px solid white;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  width: .5em;
  height: .5em;
  margin: 0 .25em; 
`
