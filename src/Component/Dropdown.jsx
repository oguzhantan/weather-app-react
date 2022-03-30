import {useEffect} from 'react'
import { useLocation } from "../context/WeatherContent"
import "./Dropdown.css"
import axios from 'axios';

function Dropdown() {

  const { location , setLocation , selection, setSelection , key } = useLocation();

   const takeLocation = async(selection) => {

        try {
          const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=1&appid=${key}`);
          setLocation({lat:data[0].lat , lon:data[0].lon});
    
        } catch(e)  {
          console.log(e)
        }
      }
      
      useEffect(() => {
        takeLocation(selection);
      }, [selection])
 
  return (
    <div className='dropdownContainer'>
        <select placeholder='Choose a option' name="selectList" id="selectList" onChange={(e) => setSelection(e.target.value)}>
            <option value="istanbul">İstanbul</option>
            <option value="ankara" >Ankara </option>
            <option value="izmir"> İzmir </option>
            <option value="antalya">Antalya</option>
        </select>
    </div>
  )
}

export default Dropdown