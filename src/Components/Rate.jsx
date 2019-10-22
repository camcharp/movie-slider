import React from 'react';

export default function Rate(props) {
	const rate = Math.round(props.rate_data / 2);
	const stars = [];

	for (let i = 0; i < rate; i++) {
		stars.push(<img className="icon" src="star-solid.svg" alt="star" key={`star ${i}`} />);
	}
	for (let i = 0; i < 5 - rate; i++) {
		stars.push(<img className="icon" src="star-regular.svg" alt="star" key={`empty star ${i}`} />);
	}

	return <div className="container-row">{stars}</div>;
}
