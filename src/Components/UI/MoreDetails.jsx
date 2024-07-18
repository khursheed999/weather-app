import { useContext } from "react";
import FetchDataContext from "../../Store/FetchDataContext";
import { APIKEY } from "../../../ApiKey";
import { motion, MotionConfig } from "framer-motion";
const MoreDetails=()=>{
     const{ forCastData}=useContext(FetchDataContext);
  console.log(forCastData);
 
  const daysOfWeek=new Date().getDay();
  const nextFiveDays= Generates(daysOfWeek);
  function Generates(current){
      
    // const s = ["Sun", "Mon"," Tues", "Wednes", "Thurs", "Fri", "Satur"];
    // const Name=s[sOfWeek];
   switch(current){
    case 0:
        return ['Mon','Tue','Wed','Thur','Fri'];
        break;
    case 1:
        return ['Tue','Wed','Thur','Fri','Sat'];
        break;
    case 2:
        return ['Wed','Thur','Fri','Sat','Sun'];
        break;
    case 3:
        return ['Thur','Fri','Sat','Sun','Mon'];
        break;
    case 4:
        return ['Fri','Sat','Sun','Mon','Tue'];
        break;
    case 5:
        return ['Sat','Sun','Mon','Tue','Wed'];
        break;
    case 6:
        return ['Sun','Mon','Tue','Wed','Thur'];
        break;
    default:
        break;
   }
}

    return <div className="more-details-list">
           <h3>Weather For Next Five days</h3>
           <ul>
           {forCastData.map((weather)=>(<li key={weather.id}>
                <p>{nextFiveDays[weather.id]}</p>
              <div>
              <h3>
                    {Math.round(weather.temp)}°C
                </h3>
              
                <h4>
                    {weather.description}
                </h4>
              </div>
            
                <motion.img
                initial={{scale:0}}
                animate={{scale:[0,1,1.001]}}
                exit={{
                    scale: [1.001, 1, 0.5, 0],
                    transition: { duration: 10, ease: [0.42, 0, 0.58, 1] } // Custom cubic bezier curve
                  }}
                transition={{repeat:Infinity,duration:10,ease:'linear'}}
                 src={`${APIKEY.weatherIconURL}${weather.icon}@2x.png`} alt='WeatherImg'
                height={70}
             />
             
            </li>
          ))}
           </ul>
    </div>
};
export default MoreDetails;