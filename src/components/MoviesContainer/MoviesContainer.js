import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from './MoviesContainer.module.css'

const MoviesContainer = ({movies}) => {


    return (
        <div style={{alignItems:'center'}}>
            <div className={styles.container}>
                {
                    movies.Search ? movies.Search.map((movie, index) => (
                        <MovieCard key={index} movie={movie}/>
                    )):null
                }
            </div>
        </div>
    )
}

export default MoviesContainer
