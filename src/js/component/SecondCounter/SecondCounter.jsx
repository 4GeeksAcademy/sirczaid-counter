import React from 'react';

export const SecondCounter = ({ seconds, type }) => {
	let timeFormat = 0;

	if (type === "seconds") timeFormat = seconds % 60;
	if (type === "minutes" && seconds >= 60) timeFormat = Math.floor(seconds / 60);
	if (type === "hours" && seconds >= 3600) timeFormat = Math.floor((seconds / 60) / 60);

	return (
		<div class="sq">
			{ timeFormat >= 10 
				? <span class="days bord">{timeFormat}</span> 
				: <span class="days bord">0{timeFormat}</span>
			}
	    </div>
	);
}