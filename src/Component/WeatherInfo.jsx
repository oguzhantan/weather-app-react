import {useEffect} from 'react'
import { useLocation } from "../context/WeatherContent"
import axios from 'axios';
import WeatherCard from './WeatherCard';
import "./WeatherInfo.css";
function WeatherInfo() {

  const { location, setLocation, weather, setWeather , key } = useLocation();

  const getWeather = async( lat,lon) =>{
    

    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${key}&units=metric`)
      setWeather(data.daily);
    } catch  {
      alert("Veri alınırken hata oluştu")
    }
  }

  useEffect(() => {
    getWeather(location.lat,location.lon);
  }, [location]);

  return (
    <div className='containerInfo'>
      {
          
          weather.map((dayWeather ) => (
           /*<div>
            <img src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`} alt="" />
            <div>{dayWeather.weather[0].description}: {Math.round(dayWeather.temp.min) } ℃ - {Math.round(dayWeather.temp.max)} ℃ </div> 
          </div>*/
          <WeatherCard  dayWeather={dayWeather}/>
          ))
          
        }
    </div>
  )
}

export default WeatherInfo