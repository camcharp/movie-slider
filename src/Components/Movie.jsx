import React, { Component } from 'react';
import Rate from './Rate';

export default class Movie extends Component {
	cutDescription = (input, separator=' ') => {
		// return input.length > 145 ? (`${input.substring(0, 145)}...`): input;
		return input.length > 145 ? (`${input.substr(0, input.lastIndexOf(separator, 145))}...`): input;
	};


	render() {
		return (
			<div className="movie-container">
				<img
					src={`https://image.tmdb.org/t/p/w500${this.props.movie_data.backdrop_path}`}
					className="movie-container_poster"
					alt="movie poster"
				/>
				<div className="movie-container_infos">
					<h1 className="movie-container_title">{this.props.movie_data.original_title}</h1>
					<Rate rate_data={this.props.movie_data.vote_average} />
					<p id="description">{this.cutDescription(this.props.movie_data.overview)}</p><a href={`https://api.themoviedb.org/3/movie/${this.props.movie_data.id}?api_key=ed1e1b1b0894efa454d151c4afb39efa`}>See more</a>
				</div>
			</div>
		);
	}
}
