import React from 'react';
const Movie = ({ title, image, summary }) => {
    //console.log(title, image);
    return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{summary}</p>
    </div>
    );
};

export default Movie;