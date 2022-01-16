import React, {useState} from "react";
import styles from './SearchScreen.module.css'
import {TextField, Typography} from '@mui/material'
import omdbApi from "../../api/omdbApi";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState({})

    const handleSearchTermChange = async (event) => {
        const value = event.target.value

        setSearchTerm(value)
        const result = await omdbApi.get(`/`, {params: {s: value}})

        setMovies(result.data)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Search Movies
            </div>

            <TextField
                label="Search"
                variant="outlined"
                onChange={handleSearchTermChange}
            />

            <hr/>

            <div>
                {
                    movies.Error ?
                        <Typography variant={"h5"}>
                            Couldn't find movies from the search term : {searchTerm}
                        </Typography>
                        :
                        <MoviesContainer movies={movies}/>
                }
            </div>


        </div>
    )
}


export default SearchScreen
