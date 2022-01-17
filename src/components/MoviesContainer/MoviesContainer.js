import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from './MoviesContainer.module.css'


/**
 * Container to hold a grid of movie card components
 * @param movies - List of movies, tv or books to display
 * @returns {JSX.Element} - MovieContainer component
 * @constructor
 */
const MoviesContainer = ({movies}) => {

    const handleButtonClick = (imdbID) => {
        //TODO: add functionality to button press. Should display selected movie card details
    }

    return (
        <div style={{alignItems: 'center'}}>
            <div className={styles.container}>
                {
                    movies.Search ? movies.Search.map((movie, index) => (
                            <MovieCard
                                key={index}
                                movie={movie}
                                handleButtonClick={handleButtonClick}
                            />
                        ))
                        :
                        null
                }
            </div>
        </div>
    )
}

export default MoviesContainer
