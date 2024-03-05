import { createContext,useEffect, useState } from "react";
import {APIKEY} from "../../ApiKey";
const FetchDataContext=createContext({
    data:{},
    time:{},
    forCastData:[],
    loading:Boolean,
    
});
export function FetchDataProvider({children}){
    const [data,setData]=useState({});
    const [time,setTime]=useState({});
    const[error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [forCastData,setForCastData]=useState([]);
    function fetchLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onSuccess,onFail);
        }
        else{
            console.log('GeoLocation is not available');
        }
      function onSuccess(position){
            const {latitude,longitude}= position.coords;
                fetchData(latitude,longitude,APIKEY.base,APIKEY.key);
                fetchMoreData(latitude,longitude,APIKEY.forcastHourly,APIKEY.key)
            
        
        }
         function onFail(err){
            if(err.code===1){
                console.log('user denied excess!');
           setError(1);

            }
            else if(err.code===2) {
                console.log('Location is unvailable');
                setError(2);
                console.log(err.code)
            }
            else  console.log('Error in fetching data!');
            
        }
    
    }

   async function fetchData(latitude,longitude,base,key){
    const url=`${base}?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
   try{
    setLoading(true);
    const res=await fetch(url);
    if(!res.ok){
        throw new Error('Error in fetching data ');
    }
    const weatherData=await res.json();
        setData({
            name:weatherData.name,
            temp:weatherData.main.temp,
            humidity:weatherData.main.humidity,
            pressure:weatherData.main.pressure,
            windSpeed:weatherData.wind.speed,
            weather:weatherData.weather[0].main,
            weatherDescription:weatherData.weather[0].description,
            weatherIcon:weatherData.weather[0].icon,
            sunrise:weatherData.sys.sunrise,
            sunset:weatherData.sys.sunset,
        });
        const sunrise= Clock(weatherData.sys.sunrise);
        const sunset= Clock(weatherData.sys.sunset);
      
        setTime({
            sunrise,
            sunset,
        });
       setLoading(false);
    }
   catch(err){
    console.log(err.message);
    setLoading(false);
   }
    
    }
   async function fetchMoreData(latitude,longitude,base,key){
        const url=`${base}?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
        console.log(url);
   try{
    const res=await fetch(url);
    if(!res.ok){
        throw new Error('Error in fetching data ');
    }
    const forcastData=await res.json();
      setForCastData([
        {
            id:0,
            temp:forcastData.list[0].main.temp,
            description:forcastData.list[0].weather[0].description,
            icon:forcastData.list[0].weather[0].icon,
        
        },
        {
            id:1,
            temp:forcastData.list[1].main.temp,
            description:forcastData.list[1].weather[0].description,
            icon:forcastData.list[1].weather[0].icon,
        
        },
        {
            id:2,
            temp:forcastData.list[2].main.temp,
            description:forcastData.list[2].weather[0].description,
            icon:forcastData.list[2].weather[0].icon,
        
        },
        {
            id:3,
            temp:forcastData.list[3].main.temp,
            description:forcastData.list[3].weather[0].description,
            icon:forcastData.list[3].weather[0].icon,
        
        },
        {
            id:4,
            temp:forcastData.list[4].main.temp,
            description:forcastData.list[4].weather[0].description,
            icon:forcastData.list[4].weather[0].icon,
        
        },
        
    ])

    }
   catch(error){
    console.log(error.message);
   }
    }

    function Clock(sunTime){
        const currentTime=new Date(sunTime*1000);
        const h=currentTime.getHours();
        const m=currentTime.getMinutes();
        const s=currentTime.getSeconds();
        const ampm=h>12?'pm':'am';
        const hh=h>12?h-12:h;
        // console.log(`${hh}:${m}:${s}:${ampm}`); 

        return `${hh}:${m}:${s}:${ampm} `
    }

    useEffect(()=>{
        fetchLocation();
    },[]);
    const contextValue={
        data,
        time,
        forCastData,
        loading,
       error,
    }

    return <FetchDataContext.Provider value={contextValue}>
        {children}
    </FetchDataContext.Provider>
}
export default FetchDataContext;