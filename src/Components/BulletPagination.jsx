import React, { Component } from 'react';

export default class BulletPagination extends Component {
	render() {
		const bullets =
			this.props.id === null ? (
				<p>Loading</p>
			) : (
				this.props.movies.map((movie) => {
					return (
						<p
							key={movie.id}
							className={
								this.props.index === movie.index ? (
									'bullet-points_bullet__active'
								) : (
									'bullet-points_bullet'
								)
							}
							onClick={() => this.props.goToMovie(movie.index, movie.id)}
						>
							&#x2022;
						</p>
					);
				})
			);
		return <div className="bullet-points">{bullets}</div>;
	}
}
