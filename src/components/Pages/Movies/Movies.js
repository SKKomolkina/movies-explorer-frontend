import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';
import * as auth from "../../../utils/MainApi";

function Movies({}) {
    const [movies, setMovies] = React.useState([]);
    const [shortMovie, setShortMovie] = React.useState([])

    const [preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);
    const [inputError, setInputError] = React.useState(false);


    const searchMovie = (text) => {
        if (!localStorage.getItem('all-movies')) {
            movieApi.getMovies()
                .then((data) => {
                    console.log(data);
                    const allMovies = JSON.stringify(data);
                    localStorage.setItem('all-movies', allMovies);

                    setMovies(filterMovies(data, text));
                })
                .catch((err) => {
                    setInputError(true);
                })
                .finally(() => setPreloader(false));
        }
        const moviesList = JSON.parse(localStorage.getItem('all-movies'));
        if (filterMovies(moviesList, text) === 0) {
            return setSearchError(true);
        }
        setSearchError(false);
        return setMovies(filterMovies(moviesList, text));
    }

    const filterMovies = (data, text) => {
        const searchList = data.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
                if (movie.duration <= 40) {
                    console.log(movie.duration);
                    setShortMovie(movie);
                    return false;
                }
                return movie;
            }
            return false;
        });
        if (searchList.length === 0) {
            setSearchError(true);
        }
        return searchList;
    };

    const filterShortMovies = (movies) => {
        if (movies.duration <= 40) {
            console.log(shortMovie);
            return shortMovie;
        }
    }
    // const movieDuration = (duration) => {
    //     const hours = Math.floor(duration / 60);
    //     const minutes = duration % 60;
    //     if (minutes !== 0) {
    //         return `${hours} ч ${minutes} мин`;
    //     }
    //     return `${hours} ч`;
    // }

    return (
        <main className='movies'>
            <SearchForm searchMovie={searchMovie} inputError={inputError}/>
            {preloader && (<Preloader/>)}

            <h2 className={searchError ? 'movies__search-error' : 'movies__search-error movies__search-error-hidden'}>
                Ничего не найдено!
            </h2>

            {movies ?
                <MoviesCardList
                    movies={movies}
                /> : null}
        </main>
    );
}

export default Movies;
