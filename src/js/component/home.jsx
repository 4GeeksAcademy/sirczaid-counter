import React from "react";
import { SecondCounter } from "./SecondCounter/SecondCounter";

const Home = ({ seconds }) => {
    return (
        <div className="text-center">
            <p>Tiempo</p>
            <SecondCounter seconds={seconds} type="hours" />
            :<SecondCounter seconds={seconds} type="minutes" />
            :<SecondCounter seconds={seconds} type="seconds" />
        </div>
    );	
};

export default Home;