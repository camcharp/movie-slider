import React from 'react';

export default function Rate(props) {
	const rate = Math.round(props.rate_data / 2); // note sur 10 arrondie et ramenée sur 5
	let stars = [];

	for (let i = 0; i < rate; i++) {
		stars.push(<img className="icon" src="./svg/star-solid.svg" alt="star" key={`star ${i}`} />);
	}
	for (let i = 0; i < 5 - rate; i++) {
		stars.push(<img className="icon" src="./svg/star-regular.svg" alt="star" key={`empty star ${i}`} />);
	}

	return <div className="container-row">{stars}</div>;
}
