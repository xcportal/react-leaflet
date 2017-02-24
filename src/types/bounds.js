// @flow

import { PropTypes } from 'react'
import { LatLngBounds } from 'leaflet-headless'

import latlngList from './latlngList'

export default PropTypes.oneOfType([
  PropTypes.instanceOf(LatLngBounds),
  latlngList,
])
