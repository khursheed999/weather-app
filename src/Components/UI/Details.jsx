
import FetchDataContext from "../../Store/FetchDataContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import React, { useContext } from "react";
import { motion} from 'framer-motion'
const Cart = () => {
    const { data,time } = useContext(FetchDataContext);
    const { humidity,pressure,windSpeed} = data;
    const {sunrise,sunset}=time;
   
    return <>
    <div className="details">
        
         <motion.div>  
            <motion.span className="span"
          initial={{opacity:[0],y:[-50]}}
          animate={{opacity:[0,0.1,0.3,0.5,0.7,0.9,1],y:[100,50,30,10,0]}}
          transition={{repeat:Infinity,
              duration:10
              ,ease:'linear'
          }}
          exit={{
            scale: [1.001, 1, 0.5, 0],
            transition: { duration: 10, ease: [0.42, 0, 0.58, 1] } // Custom cubic bezier curve
          }}
            >
            <WbSunnyIcon className="sun-rise"/>

            </motion.span>
         <h4>{sunrise}</h4>
         <h3>Sun-rise</h3>

          </motion.div>
       <motion.div>  
        <motion.span
        initial={{opacity:[0,.3,.5,.7,.9,1],y:[10,7,5,3,2,1]}}
        animate={{opacity:[1,.8,.7,.6,.3,.1,0],y:[1,2,3,7,15,30,50,100]}}
        transition={{repeat:Infinity,
            duration:10
            ,ease:'linear'
        }}
        >
       <WbTwilightIcon className='sun-set'/>
        </motion.span>
       <h4>{sunset}</h4>
       <h3> Sun-set</h3>

           </motion.div>     
    </div>
     
          <div className="cart-details">
          <div>
          <h3>Humidity: </h3>
          <h3>  {humidity}%  </h3>
         
          </div>
           <div>
           <h3>Pressure:  </h3>
           <h3> {pressure} hpa  </h3>
  
           </div>

           <div>
           <h3>WindSpeed:     </h3>
           <h3>   {windSpeed}m/s</h3>

           </div>
          </div>
       
    </>
}
export default Cart;