import React, { useState, useEffect } from "react";
import { SecondCounter } from "./SecondCounter/SecondCounter";
import "./Home.css";

const Home = () => {
	const [seconds, setSeconds] = useState(0);

 	useEffect(() => {
	 	setInterval(() => setSeconds(prevState => prevState + 1), 1000);
 	}, 1000);

    return (
        <div className="well">
		    <div className="counter" id="clockdiv">
		        <span className="title">Tiempo</span>
	            <SecondCounter seconds={seconds} type="hours" />
	            <SecondCounter seconds={seconds} type="minutes" />
	            <SecondCounter seconds={seconds} type="seconds" />
		   </div>
		</div>
    );	
};

export default Home;