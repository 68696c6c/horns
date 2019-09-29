/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { getColorVariants } from '../../utils'

import {
  Alabama,
  Alaska,
  AmericanSamoa,
  Arizona,
  Arkansas,
  California,
  Colorado,
  Connecticut,
  Delaware,
  DistrictOfColumbia,
  Florida,
  Georgia,
  Guam,
  Hawaii,
  Idaho,
  Illinois,
  Indiana,
  Iowa,
  Kansas,
  Kentucky,
  Louisiana,
  Maine,
  Maryland,
  Massachusetts,
  Michigan,
  Minnesota,
  Mississippi,
  Missouri,
  Montana,
  Nebraska,
  Nevada,
  NewHampshire,
  NewJersey,
  NewMexico,
  NewYork,
  NorthCarolina,
  NorthDakota,
  NorthernMarianaIslands,
  Ohio,
  Oklahoma,
  Oregon,
  Pennsylvania,
  PuertoRico,
  RhodeIsland,
  SouthCarolina,
  SouthDakota,
  Tennessee,
  Texas,
  Utah,
  Vermont,
  VirginIslands,
  Virginia,
  Washington,
  WestVirginia,
  Wisconsin,
  Wyoming,
} from './states'

import * as Styled from './us-map.styles'

const USMap = ({
  width,
  height,
  variant,
  showLabels,
  pacificStates,
  territories,
}) => {
  const stateProps = {
    showLabel: showLabels,
    variant,
  }
  return (
    <Styled.SVGMap
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin"
      variant={variant}
    >
      <Styled.MapBackground variant={variant} />
      <g id="map-states">
        {pacificStates && (
          <g id="map-pacific-states">
            <Alaska {...stateProps} />
            <Hawaii {...stateProps} />
          </g>
        )}
        <g id="map-north-east-coast-small-states">
          <NewHampshire {...stateProps} />
          <Massachusetts {...stateProps} />
          <Connecticut {...stateProps} />
          <RhodeIsland {...stateProps} />
          <Maryland {...stateProps} />
          <Vermont {...stateProps} />
          <NewJersey {...stateProps} />
          <Delaware {...stateProps} />
          <DistrictOfColumbia {...stateProps} />
        </g>
        <Michigan {...stateProps} />
        <Maine {...stateProps} />
        <Pennsylvania {...stateProps} />
        <NewYork {...stateProps} />
        <WestVirginia {...stateProps} />
        <Wisconsin {...stateProps} />
        <Virginia {...stateProps} />
        <Tennessee {...stateProps} />
        <Ohio {...stateProps} />
        <NorthCarolina {...stateProps} />
        <Kentucky {...stateProps} />
        <Indiana {...stateProps} />
        <Illinois {...stateProps} />
        <SouthCarolina {...stateProps} />
        <Mississippi {...stateProps} />
        <Georgia {...stateProps} />
        <Florida {...stateProps} />
        <Alabama {...stateProps} />
        <Texas {...stateProps} />
        <Louisiana {...stateProps} />
        <SouthDakota {...stateProps} />
        <Oklahoma {...stateProps} />
        <Nebraska {...stateProps} />
        <Missouri {...stateProps} />
        <Kansas {...stateProps} />
        <Iowa {...stateProps} />
        <Arkansas {...stateProps} />
        <Wyoming {...stateProps} />
        <Utah {...stateProps} />
        <Oregon {...stateProps} />
        <NewMexico {...stateProps} />
        <Nevada {...stateProps} />
        <Colorado {...stateProps} />
        <California {...stateProps} />
        <Arizona {...stateProps} />
        <Washington {...stateProps} />
        <Idaho {...stateProps} />
        <NorthDakota {...stateProps} />
        <Montana {...stateProps} />
        <Minnesota {...stateProps} />
      </g>
      {territories && (
        <g id="map-territories">
          <AmericanSamoa {...stateProps} />
          <NorthernMarianaIslands {...stateProps} />
          <VirginIslands {...stateProps} />
          <Guam {...stateProps} />
          <PuertoRico {...stateProps} />
        </g>
      )}
      <g id="map-points" />
    </Styled.SVGMap>
  )
}

USMap.propTypes = {
  showLabels: PropTypes.bool,
  pacificStates: PropTypes.bool,
  territories: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.oneOf(getColorVariants(['custom'])),
}

USMap.defaultProps = {
  showLabels: true,
  pacificStates: true,
  territories: true,
  width: 745,
  height: 437,
  variant: 'custom',
}

export default USMap
