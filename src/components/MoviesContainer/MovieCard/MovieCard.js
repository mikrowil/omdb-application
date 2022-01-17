import React from "react";
import styles from './MovieCard.module.css'
import {Button} from "@mui/material";


/**
 *  The MovieCard component is used to display the data of a movie, tv show or book
 * @param movie - Movie, tv show or book to be displayed
 * @param handleButtonClick - Shows more details about the selected card
 * @returns {JSX.Element} - MovieCard component
 * @constructor
 */
const MovieCard = ({movie, handleButtonClick}) => {
    return (
        <div className={styles.movieCard}>
            <div className={styles.movieCardImage} style={{backgroundImage: `url(${movie.Poster})`}}/>
            <div className={styles.movieCardDetails}>
                <div className={styles.movieCardTitle}>
                    {movie.Title}
                </div>
                <div className={styles.movieCardYear}>
                    {movie.Year}
                </div>
                <Button
                    className={styles.movieCardButton}
                    variant={"contained"}
                    onClick={() => {
                        handleButtonClick(movie.imdbID)
                    }}
                >
                    Show Details
                </Button>

            </div>
        </div>
    )
}

export default MovieCard
