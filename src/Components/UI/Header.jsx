import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import FetchDataContext from '../../Store/FetchDataContext';
import { APIKEY } from '../../../ApiKey';
import React, {useContext} from 'react';
import { motion } from 'framer-motion';

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
     <motion.h2
     initial={{scale:0}}
     animate={{
      scale:[0,0.3,0.5,0.7,0.9,1,1.001,1.01,1.1],
      
     }}
     transition={{repeat:Infinity,duration:5,ease:'linear'}}
     exit={{
      scale: [1.001, 1, 0.5, 0],
      transition: { duration: 5, ease: [0.42, 0, 0.58, 1] } // Custom cubic bezier curve
    }}
     > {Math.round(temp)}°C</motion.h2>
      <h6>{weatherDescription}</h6>
      </div>
      <motion.img
       initial={{scale:0}}
       animate={{
        scale:[0,0.3,0.5,0.7,0.9,1,1.001,1.01,1.1],
        
       }}
       transition={{repeat:Infinity,duration:5,ease:'linear'}}
       exit={{
        scale: [1.001, 1, 0.5, 0],
        transition: { duration: 5, ease: [0.42, 0, 0.58, 1] } // Custom cubic bezier curve
      }}
       src={`${APIKEY.weatherIconURL}${weatherIcon}@2x.png`} alt="weatherImg" />

      </div>
     
  

    </header>
}
export default Header;