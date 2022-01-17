import React, {useState} from "react";
import styles from './SearchScreen.module.css'
import {TextField, Typography} from '@mui/material'
import omdbApi from "../../api/omdbApi";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import Title from "../../components/Title/Title";


/**
 * The SearchScreen allows a user to enter a title and results will be shown based on the data available
 * @returns {JSX.Element} - Search Screen
 * @constructor
 */
const SearchScreen = () => {

    //The search term a user has entered
    const [searchTerm, setSearchTerm] = useState('')

    //The movies, tv-shows or books that are retrieved from the omdbAPI
    const [movies, setMovies] = useState({})

    //Is called when the search term is updated by the user
    const handleSearchTermChange = async (event) => {

        //text value from input
        const value = event.target.value

        //sets the search term to the new value
        setSearchTerm(value)

        //Holds the data collected from the api
        const result = await omdbApi.get(`/`, {params: {s: value}})

        //set data from the api in a state object
        setMovies(result.data)
    }

    return (
        <div className={styles.container}>
            <Title title={"Search Movies"}/>

            <TextField
                label="Search"
                variant="outlined"
                onChange={handleSearchTermChange}
            />

            <hr/>

            <div>
                {
                    //If movies object contains error property, show error.
                    //Otherwise show the movies container
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
