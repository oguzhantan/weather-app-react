import {createContext, useState , useContext , useEffect} from "react";
const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [location, setLocation] = useState({lat:"" , lon: ""});
    const [selection, setSelection] = useState("istanbul");
    const [weather, setWeather] = useState([]);
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    
    const values = { location, setLocation ,selection, setSelection, weather, setWeather , key }

    return (
       <LocationContext.Provider value={values}>{children}</LocationContext.Provider> 
       )
}

export const useLocation = () => useContext(LocationContext);