import React from 'react';
import Rate from './Rate';

export default function Movie(props) {
	return (
		<div id="movie-container">
			<img
				src={`https://image.tmdb.org/t/p/w500${props.movie_data.poster_path}`}
				className="movie-container_poster"
				alt="movie poster"
			/>
			<div className="movie-container_infos">
			<h1 className="movie-container_title">{props.movie_data.original_title}</h1>
			<Rate rate_data={props.movie_data.vote_average} />
			<p id="description">{props.movie_data.overview}</p>
			</div>
		</div>
	);
}
