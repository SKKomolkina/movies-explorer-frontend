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
    const [shortMovies, setShortMovies] = React.useState([]);

    const [preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);
    const [inputError, setInputError] = React.useState(false);

    const [isCheckBoxOpen, setIsCheckBoxOpen] = React.useState(false);

    //search by input
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
                if ((movie.duration <= 40) && (isCheckBoxOpen)) {
                    console.log(movie);
                    return movie;
                }
                if ((movie.duration >= 40) && (!isCheckBoxOpen)) {
                    return movie;
                }
                return false;
            }
            return false;
        });
        if (searchList.length === 0) {
            setSearchError(true);
        }
        return searchList;
    };

    // search by checkbox
    const handleToggleCheckbox = () => {
        setIsCheckBoxOpen(!isCheckBoxOpen);
    }

    return (
        <main className='movies'>
            <SearchForm
                searchMovie={searchMovie}
                inputError={inputError}
                handleToggleCheckbox={handleToggleCheckbox}
            />
            {preloader && (<Preloader/>)}

            <h2 className={searchError ? 'movies__search-error' : 'movies__search-error movies__search-error-hidden'}>
                Ничего не найдено!
            </h2>

            {movies ? <MoviesCardList movies={movies}/> : null}
        </main>
    );
}

export default Movies;
