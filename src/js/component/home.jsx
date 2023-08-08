import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = ({ seconds }) => {
	let minutes = 0;
	let hours = 0;

	let formatSeconds = seconds % 60;

	if (seconds >= 60) {
		minutes = Math.floor(seconds / 60);
	}

	if (minutes >= 60) {
		hours = Math.floor(minutes / 60);
	}
	
	seconds++;

    return (
        <div className="text-center">
            <p>Tiempo</p>
            <>
            	{ hours >= 10 
	            	? <span>{hours}</span>
					: <span>0{hours}</span>
            	}
			</>
            <>
				:{ minutes >= 10 
	            	? <span>{minutes}</span>
					: <span>0{minutes}</span>
            	}
			</>
			<>
				:{ formatSeconds >= 10 
	            	? <span>{formatSeconds}</span>
					: <span>0{formatSeconds}</span>
            	}
			</>
        </div>
    );
};


export default Home;

