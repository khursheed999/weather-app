import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import FetchDataContext from '../../Store/FetchDataContext';
import { APIKEY } from '../../../ApiKey';
import React, {useContext} from 'react';

const Header=()=>{
  const { data}= useContext(FetchDataContext);
  const {temp,weatherDescription,weatherIcon}=data;

    return <header className="header">
      
      {/* <LightModeSharpIcon className='sun-icon' /> */}
      <h1><LocationOnOutlinedIcon className='location-icon' /> </h1>
      <h1> {data.name} </h1>
    
   
      
       {/* <img src={rainy1} alt="weather_sunset" className='img'/>
       <img src={rainy2} alt="weather_sunset" className='img'/> */}
      {/* <img src={`${APIKEY.weatherIconURL}${weatherIcon}@2x.png`} alt="weatherImage" /> */}
      
      
      <div className='temp'>
      <div>
     <h1> {Math.round(temp)}°C</h1>
      <h6>{weatherDescription}</h6>
      </div>
      <img src={`${APIKEY.weatherIconURL}${weatherIcon}@2x.png`} alt="weatherImage" />

      </div>
     
  

    </header>
}
export default Header;