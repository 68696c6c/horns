/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

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

import {
  SVGMap,
  Point,
  StarPoint,
  MapBackground,
  MapLocations,
} from './us-map.styles'

const USMap = ({ bgFill, stateFill, stateStroke, labelColor, width, height, showLabels, pacificStates, territories }) => (
  <SVGMap
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio="xMinYMin"
  >
    <MapBackground variant={bgFill} />
    <MapLocations id="map-locations" fill={stateFill} stroke={stateStroke} labelColor={labelColor}>
      <g id="map-states">
        {pacificStates && (
          <g id="map-pacific-states">
            <Alaska showLabel={showLabels} />
            <Hawaii showLabel={showLabels} />
          </g>
        )}
        <g id="map-north-east-coast-small-states">
          <NewHampshire showLabel={showLabels} />
          <Massachusetts showLabel={showLabels} />
          <Connecticut showLabel={showLabels} />
          <RhodeIsland showLabel={showLabels} />
          <Maryland showLabel={showLabels} />
          <Vermont showLabel={showLabels} />
          <NewJersey showLabel={showLabels} />
          <Delaware showLabel={showLabels} />
          <DistrictOfColumbia showLabel={showLabels} />
        </g>
        <Michigan showLabel={showLabels} />
        <Maine showLabel={showLabels} />
        <Pennsylvania showLabel={showLabels} />
        <NewYork showLabel={showLabels} />
        <WestVirginia showLabel={showLabels} />
        <Wisconsin showLabel={showLabels} />
        <Virginia showLabel={showLabels} />
        <Tennessee showLabel={showLabels} />
        <Ohio showLabel={showLabels} />
        <NorthCarolina showLabel={showLabels} />
        <Kentucky showLabel={showLabels} />
        <Indiana showLabel={showLabels} />
        <Illinois showLabel={showLabels} />
        <SouthCarolina showLabel={showLabels} />
        <Mississippi showLabel={showLabels} />
        <Georgia showLabel={showLabels} />
        <Florida showLabel={showLabels} />
        <Alabama showLabel={showLabels} />
        <Texas showLabel={showLabels} />
        <Louisiana showLabel={showLabels} />
        <SouthDakota showLabel={showLabels} />
        <Oklahoma showLabel={showLabels} />
        <Nebraska showLabel={showLabels} />
        <Missouri showLabel={showLabels} />
        <Kansas showLabel={showLabels} />
        <Iowa showLabel={showLabels} />
        <Arkansas showLabel={showLabels} />
        <Wyoming showLabel={showLabels} />
        <Utah showLabel={showLabels} />
        <Oregon showLabel={showLabels} />
        <NewMexico showLabel={showLabels} />
        <Nevada showLabel={showLabels} />
        <Colorado showLabel={showLabels} />
        <California showLabel={showLabels} />
        <Arizona showLabel={showLabels} />
        <Washington showLabel={showLabels} />
        <Idaho showLabel={showLabels} />
        <NorthDakota showLabel={showLabels} />
        <Montana showLabel={showLabels} />
        <Minnesota showLabel={showLabels} />
      </g>
      {territories && (
        <g id="map-territories">
          <AmericanSamoa showLabel={showLabels} />
          <NorthernMarianaIslands showLabel={showLabels} />
          <VirginIslands showLabel={showLabels} />
          <Guam showLabel={showLabels} />
          <PuertoRico showLabel={showLabels} />
        </g>
      )}
    </MapLocations>
    <g id="map-points" />
  </SVGMap>
)

USMap.propTypes = {
  showLabels: PropTypes.bool,
  pacificStates: PropTypes.bool,
  territories: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  bgFill: PropTypes.oneOf([
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
    'background',
  ]),
  stateFill: PropTypes.oneOf([
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
    'background',
  ]),
  stateStroke: PropTypes.oneOf([
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
    'background',
  ]),
  labelColor: PropTypes.oneOf([
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
    'background',
  ]),
}

USMap.defaultProps = {
  showLabels: true,
  pacificStates: true,
  territories: true,
  width: 741,
  height: 456.456,
  bgFill: 'background',
  stateFill: 'primary',
  stateStroke: 'neutral',
  labelColor: 'dark',
}

export default USMap
