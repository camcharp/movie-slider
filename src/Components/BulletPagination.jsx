import React, { Component } from 'react';

export default class BulletPagination extends Component {
	render() {
		const bullets =
			this.props.id === null ? (
				<p>Loading</p>
			) : (
				this.props.movies.map((movie) => {
					// console.log('movie', movie.id, 'id',this.props.id)
					return (
						<p
							key={movie.id}
							className={
								this.props.index === movie.index ? 'bullet-points_bullet__active' : 'bullet-points_bullet'
							}
						>
							&#x2022;
						</p>
					);
				})
			);
		return <div className="bullet-points">{bullets}</div>;
	}
}
