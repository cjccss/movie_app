import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

export default function Movie({id, year, title, summary, poster, genres}){
    return(
        <div className="moive">
            <img src={poster} alt={title}/>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary.slice(0,140)}...</p>   
        </div>
    );  
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}