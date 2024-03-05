
import FetchDataContext from "../../Store/FetchDataContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import React, { useContext } from "react";
const Cart = () => {
    const { data,time } = useContext(FetchDataContext);
    const { humidity,pressure,windSpeed} = data;
    const {sunrise,sunset}=time;
  
    return <>
    <div className="details">
        
         <div>  <WbSunnyIcon className="sun-rise"/> 
         <h4>{sunrise}</h4>
         <h3>Sun-rise</h3>

          </div>
       <div>  
       <WbTwilightIcon className='sun-set'/>
       <h4>{sunset}</h4>
       <h3> Sun-set</h3>

           </div>     
    </div>
     
          <div className="cart-details">
          <div>
          <h2>Humidity: </h2>
          <h2>  {humidity}%  </h2>
         
          </div>
           <div>
           <h2>Pressure:  </h2>
           <h2> {pressure} hpa  </h2>
  
           </div>

           <div>
           <h2>WindSpeed:     </h2>
           <h2>   {windSpeed}m/s</h2>

           </div>
          </div>
       
    </>
}
export default Cart;