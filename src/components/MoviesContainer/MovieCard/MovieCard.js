import React from "react";
import styles from './MovieCard.module.css'
import {Button} from "@mui/material";

const MovieCard = ({movie}) => {
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
                >
                    Show Details
                </Button>

            </div>
        </div>
    )
}

export default MovieCard
