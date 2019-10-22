import React from 'react';
import Rate from './Rate';

export default function Movie(props) {
	return (
		<div className="container-column" id="movie-container">
			<Rate rate_data={props.movie_data.vote_average} />
			<h1 id="title">{props.movie_data.original_title}</h1>
			<img
				src={`https://image.tmdb.org/t/p/w500${props.movie_data.poster_path}`}
				id="poster"
				alt="movie poster"
			/>
			<p id="rate">{props.movie_data.vote_average}</p>
			<p id="description">{props.movie_data.overview}</p>
		</div>
	);
}
