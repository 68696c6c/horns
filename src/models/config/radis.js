/* eslint-disable prefer-destructuring */
import SpacingConfig, { spacingSizes } from './spacing'
import { safeGetValue } from './utils'
const merge = require('deepmerge')

// @TODO get default values from a config file.
const defaultRadius = {
  size: 'tiny',
  corners: {
    topLeft: 'tiny',
    topRight: 'tiny',
    bottomRight: 'tiny',
    bottomLeft: 'tiny',
  },
}

const figureItOut = corners => {
  // Specific corners override sides.
}

const cornerValue = (corners, y, x, xY) => {
  let radius

  let radiusY = corners[y]
  if (!spacingSizes.includes(radiusY)) {
    radiusY = defaultRadius.corners[y]
  }
  radius = radiusY

  let radiusX = corners[x]
  if (!spacingSizes.includes(radiusX)) {
    radiusX = defaultRadius.corners[x]
  }
  radius = radiusX

  let radiusXY = corners[xY]
  if (!spacingSizes.includes(radiusXY)) {
    radiusXY = defaultRadius.corners[xY]
  }
  radius = radiusXY

  return radius
}

const determineCorner = (corners, corner) => {
  switch (corner) {
    case 'topRight':
      let radiusTR

      let top = corners.top
      if (!spacingSizes.includes(top)) {
        top = defaultRadius.corners.top
      }
      radiusTR = top

      let right = corners.right
      if (!spacingSizes.includes(right)) {
        right = defaultRadius.corners.right
      }
      radiusTR = right

      let topRight = corners.topRight
      if (!spacingSizes.includes(topRight)) {
        topRight = defaultRadius.corners.topRight
      }
      radiusTR = topRight

    case 'topLeft':
      return corners.top && corners.left && corners.topLeft
    case 'bottomRight':
      return corners.bottom && corners.right && corners.bottomRight
    default:
      return corners.bottom && corners.left && corners.bottomLeft
  }
}

class RadiusConfig {
  constructor(spacingConfig, config = {}) {
    if (!(spacingConfig instanceof SpacingConfig)) {
      throw new Error('RadiusConfig: invalid SpacingConfig')
    }
    let baseSize = safeGetValue(config, 'size', defaultRadius.size)
    if (!spacingSizes.includes(baseSize)) {
      baseSize = defaultRadius.size
    }

    const configCorners = safeGetValue(config, 'corners', defaultRadius.corners)

    const corners = merge(configCorners, defaultRadius.corners)

    const c = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft']
    c.forEach(cc => {
      const size = corners[cc] ? corners[cc] : baseSize
      this[cc] = spacingConfig[size].px
    })

    console.log('RadiusConfig', this)
  }
}

export default RadiusConfig
