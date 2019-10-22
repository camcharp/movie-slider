import React from 'react';

export default function Movie(props) {
	return (
		<div className="movie">
			<h1 id="title">{props.movie_data.original_title}</h1>
			<img src={`https://image.tmdb.org/t/p/w500${props.movie_data.poster_path}`} alt="movie poster" />
			<p id="rate">{props.movie_data.vote_average}</p>
		</div>
	);
}
