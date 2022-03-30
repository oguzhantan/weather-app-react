import React from 'react'
import { LocationProvider } from '../context/WeatherContent'
import Dropdown from './Dropdown'
import WeatherInfo from './WeatherInfo'

function Component() {
  return (
      <LocationProvider>
            <Dropdown/>
            <WeatherInfo/>
      </LocationProvider>
  )
}

export default Component