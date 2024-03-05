import { useContext } from "react";
import FetchDataContext from "../../Store/FetchDataContext";
import { APIKEY } from "../../../ApiKey";

const MoreDetails=()=>{
     const{ forCastData}=useContext(FetchDataContext);
      console.log(forCastData);
    return <div className="more-details-list">
           
           <ul>
           {forCastData.map((day)=>(<li key={day.id}>
                
              <div>
              <h1>
                    {Math.round(day.temp)}°C
                </h1>
                <h4>
                    {day.description}
                </h4>
              </div>
                <img src={`${APIKEY.weatherIconURL}${day.icon}@2x.png`} alt='WeatherImg' />
            </li>))}
           </ul>
    </div>
};
export default MoreDetails;