import React from "react";
import { SecondCounter } from "./SecondCounter/SecondCounter";
import "./Home.css";

const Home = ({ seconds }) => {
    return (
        <div class="well">
		    <div class="counter" id="clockdiv">
		        <span class="title">Next Showing</span>
	            <SecondCounter seconds={seconds} type="hours" />
	            <SecondCounter seconds={seconds} type="minutes" />
	            <SecondCounter seconds={seconds} type="seconds" />
		   </div>
		</div>
    );	
};

export default Home;