import React, { Component } from 'react';
import Rate from './Rate';

export default class Movie extends Component {
	cutDescription = (input) => (input.length > 100 ? `${input.substring(0, 100)}...` : input);

	render() {
		return (
			<div id="movie-container">
				<img
					src={`https://image.tmdb.org/t/p/w500${this.props.movie_data.poster_path}`}
					className="movie-container_poster"
					alt="movie poster"
				/>
				<div className="movie-container_infos">
					<h1 className="movie-container_title">{this.props.movie_data.original_title}</h1>
					<Rate rate_data={this.props.movie_data.vote_average} />
					<p id="description">{this.cutDescription(this.props.movie_data.overview)}</p>
				</div>
			</div>
		);
	}
}
