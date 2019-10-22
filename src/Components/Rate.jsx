import React from 'react';

export default function Rate(props) {
	const rate = Math.round(props.rate_data);
	const stars = [];

	for (let i = 0; i < rate; i++) {
		stars.push(<img className="icon" src="star-solid.svg" alt="star" />);
	}
	for (let i = 0; i < 10 - rate; i++) {
		stars.push(<img className="icon" src="star-regular.svg" alt="star" />);
	}

	return (
		<div className="container-row">
			<h1>Rate: </h1>
			{rate}
			{stars}
		</div>
	);
}
