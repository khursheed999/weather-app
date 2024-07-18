import Header from "./UI/Header";
import React, { useContext, useEffect, useState } from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import LocationonIcon from '@mui/icons-material/LocationOnOutlined';
import { motion } from 'framer-motion';
import Details from "./UI/Details";
import MoreDetails from "./UI/MoreDetails";
import FetchDataContext from "../Store/FetchDataContext";


export default function Weather() {
    const { loading, error, } = useContext(FetchDataContext);
    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    
    useEffect(() => {
        setIsOnline(window.navigator.onLine);
    }, [isOnline]);

    function handleToggle() {
        setToggleMoreDetails(!toggleMoreDetails);
    }


    return (
        <div>
            {!isOnline ? 'Your Internet Connection is off!' :
                error === 1 ? 
                <p><h1>Enable your Location <br /> and Refresh the page!</h1><LocationonIcon className="location-on-icon" /></p> :
                loading ? 
                <p><h1>Please Wait <br /> Loading ...</h1></p> :
                <div>
                    <div className="weather">
                        <Header />
                        <Details />
                    </div>
                    <motion.div className="more-details">
                        <motion.button
                            onClick={handleToggle}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "blue",
                                transition:1 ,
                            }}
                            whileTap={{ scale: 0.9,
                                duration:2,
                             }}
                         whileFocus={{
                            boxShadow:1.2,
                            duration:1,
                            outline:'2px solid #ccc'
                        
                         }}
                         style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "#007BFF",
                            color: "#FFF",
                          }}
                       
                        >
                            More Details
                            <motion.p
                                className="nav-icon"
                                transition={{duration:0.8}}
                                animate={{rotate:toggleMoreDetails?180:0}}
                            >
                                <NavigationIcon />
                            </motion.p>
                        </motion.button>
                    </motion.div>
                    //displays if toggleMoreDetails is true
                    {toggleMoreDetails && <MoreDetails />}
                    //footer of this app
                    <motion.div
                    className="footer"
                    >
                        <motion.p>
                            CopyRights @2024 All rights reserved
                        </motion.p>
                        <motion.h5>
                          App Developed by Khursheed Ahmad Rah
                        </motion.h5>
                    </motion.div>
                </div>
            }
        </div>
    );
}
