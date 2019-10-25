import React from 'react';

export default function BulletPagination(props) {
	const bullets =
		!props.movies ? (
			<p>Loading</p>
		) : (
			props.movies.map((movie) => {
				return (
					<p
						key={`bullet ${movie.id}`}
						className={
							props.index === movie.index ? 'bullet-points_bullet__active' : 'bullet-points_bullet'
						}
						onClick={() => props.goToMovie(movie.index)}
					>
						&#x2022; {/* bullet point */}
					</p>
				);
			})
		);
	return <div className="flex-container-row bullet-points">{bullets}</div>;
}
