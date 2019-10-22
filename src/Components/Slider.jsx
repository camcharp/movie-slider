import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie'

export default class Slider extends Component {
	state = {
		movies: []
	};

	componentDidMount() {
		axios
			.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ed1e1b1b0894efa454d151c4afb39efa')
			.then((res) => {
				this.setState({ movies: res.data.results });
			})
			.catch((err) => console.log(err));
	}

	render() {
		console.table(this.state.movies);
		const movies = this.state.movies.map((movie) => {
			return (
                <Movie movie_data = {movie} key={movie.id}/>
			);
		});
		return (
			<div>
				<h1>Movies coming this week</h1>
				{movies}
			</div>
		);
	}
}
