import React from 'react'
import "./WeatherCard.css"

function WeatherCard({dayWeather}) {
  return (
    <div className="cardWeather">
        <div><img src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`} alt="" /></div>
        <div><p>{dayWeather.weather[0].description}</p></div>
        <div><p>{Math.round(dayWeather.temp.min) } ℃ - {Math.round(dayWeather.temp.max)} ℃</p></div>
        
            
    </div>
  )
}

export default WeatherCard