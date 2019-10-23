import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import BulletPagination from './BulletPagination';

export default class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			id: null,
			index: 0
		};
	}
	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		axios
			.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ed1e1b1b0894efa454d151c4afb39efa&page=1')
			.then((res) => {
				this.setState({ movies: res.data.results, id: res.data.results[0].id });
				this.addIndexes();
			})
			.catch((err) => console.warn(err));
	};

	addIndexes = () => {
		let newMovies = [];
		if (this.state.movies)
			this.state.movies.forEach((element, index) => {
				element.index = index;
				newMovies.push(element);
			});
		this.setState({ movies: newMovies });
	};

	callPreviousMovie = () => {
		this.setState({ index: this.state.index - 1, id: this.state.movies[this.state.index].id });
	};

	callNextMovie = () => {
		this.setState({ index: this.state.index + 1, id: this.state.movies[this.state.index].id });
	};

	goToMovie = (movie_index, movie_id) => {
		this.setState({ index: movie_index, id: movie_id });
	};

	render() {
		const movies = this.state.movies.map((movie) => {
			return <Movie movie_data={movie} key={movie.id} />;
		});

		let selectedMovie = movies[this.state.index];
		let arrowClassRight = this.state.index === 0 ? 'icon arrow hidden' : 'icon arrow';
		let arrowClassLeft = this.state.index === 19 ? 'icon arrow hidden' : 'icon arrow';

		return (
			<div className="page-container">
				<div className="slider-container">
					<img
						src="./svg/arrow-circle-left-solid.svg"
						className={arrowClassRight}
						alt="arrow left"
						onClick={this.callPreviousMovie}
					/>
					{selectedMovie}
					<img
						src="./svg/arrow-circle-right-solid.svg"
						className={arrowClassLeft}
						alt="arrow right"
						onClick={this.callNextMovie}
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
