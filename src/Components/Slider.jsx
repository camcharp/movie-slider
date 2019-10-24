import React, { Component } from 'react';
import axios from 'axios';

// Components
import Movie from './Movie';
import BulletPagination from './BulletPagination';

export default class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [], // movies from the api call
			id: null, // id of the displayed movie
			index: 0 // index of the displayed movie
		};
	}

	// api call
	fetchData = () => {
		axios
			.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ed1e1b1b0894efa454d151c4afb39efa&page=1')
			.then((res) => {
				this.setState({ movies: res.data.results, id: res.data.results[0].id });
				this.addIndexes();
			})
			.catch((err) => console.warn(err));
	};

	// add index property to each movie
	addIndexes = () => {
		let moviesWithIndexes = [];
		if (this.state.movies)
			this.state.movies.forEach((movie, index) => {
				movie.index = index;
				moviesWithIndexes.push(movie);
			});
		this.setState({ movies: moviesWithIndexes });
	};

	// function called by clicking on the arrows
	callMovie = (operator) => {
		if (operator === '+') this.setState({ index: this.state.index + 1 });
		else if (operator === '-') this.setState({ index: this.state.index - 1 });
		this.setState({ id: this.state.movies[this.state.index].id });
	};

	// function called by clicking on the bullet points
	goToMovie = (movie_index, movie_id) => {
		this.setState({ index: movie_index, id: movie_id });
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const movies = this.state.movies.map((movie) => {
			return <Movie movie_data={movie} key={movie.id} />;
		});

		let selectedMovie = movies[this.state.index];

		// conditionnal rendering for the arrows at the beginning/end
		let arrowClassRight = this.state.index === 0 ? 'icon arrow hidden' : 'icon arrow';
		let arrowClassLeft = this.state.index === this.state.movies.length - 1 ? 'icon arrow hidden' : 'icon arrow';

		return (
			<div className="flex-container-column page-container">
				<div className="flex-container-row slider-container">
					<img
						src="./svg/arrow-circle-left-solid.svg"
						className={arrowClassRight}
						alt="arrow left"
						onClick={() => this.callMovie('-')}
					/>
					{selectedMovie}
					<img
						src="./svg/arrow-circle-right-solid.svg"
						className={arrowClassLeft}
						alt="arrow right"
						onClick={() => this.callMovie('+')}
					/>
				</div>
				<BulletPagination
					goToMovie={this.goToMovie}
					movies={this.state.movies}
					id={this.state.id}
					index={this.state.index}
				/>
			</div>
		);
	}
}
