import Header from "./UI/Header";
import React, {useContext, useEffect, useState} from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import LocationOffIcon from '@mui/icons-material/LocationOff';

import Details from "./UI/Details";
import MoreDetails from "./UI/MoreDetails";
import FetchDataContext from "../Store/FetchDataContext";
export default function Weather(){
    const {loading ,error}=useContext(FetchDataContext);
    const [toggleMoreDetails,setToggleMoreDetails]=useState(false);
    const [isOnline,setIsOnline]=useState(window.navigator.onLine);
    // useEffect(()=>{
    //     setIsOnline(window.navigator.onLine);
    // },[])
     console.log(error);
    function handleToggle(){
        setToggleMoreDetails(!toggleMoreDetails);
    }
    return <div>
        {error===1
        ?<p><h1> Enable your Location!</h1><LocationOffIcon className="location-off-icon"/></p>  
        :loading
        ?<p><h1> Loading...</h1></p>
        :<div >
        <div className="weather">
        <Header/>
    <Details/>

    </div>
    <div className="more-details">
    <button onClick={handleToggle}>
         More Details 
         <NavigationIcon/>
         </button>
    </div>
    {toggleMoreDetails&& <MoreDetails/>}  
    
    </div>}
    </div>
}
