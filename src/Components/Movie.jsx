import React from 'react';

export default function Movie(props) {
	return (
		<div className="movie">
			<div>
				<h1>{props.movie_data.original_title}</h1>
				<img src={`https://image.tmdb.org/t/p/w500${props.movie_data.poster_path}`} alt="movie poster" />
				<p className="rate">{props.movie_data.vote_average}</p>
			</div>
		</div>
	);
}
