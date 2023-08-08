//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;

function tiempo() {
	ReactDOM.render(<Home seconds={seconds} />, document.querySelector("#app"));
	seconds++;
}

setInterval(tiempo, 1000);