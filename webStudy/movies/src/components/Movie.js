import React from 'react';
import './Movie.css';

const Movie = ({ title, image, summary, rating, runtime, genres }) => {
  return (
    <div className="movies">
      <img className="movies__image" src={image} alt={title} />
      <div className="movies__textBox">
        <h2 className="movies__title" title={title}>{title}</h2>
        <span className="movies__rating">★ {rating}</span>
        <span className="movies__runtime">{runtime}min</span>
        <span className="movies__genres">{genres[0]}</span>
        <p className="movies__summary">{summary}</p>
      </div>
    </div>
  );
};

export default Movie;