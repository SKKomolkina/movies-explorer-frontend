import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';
import * as auth from "../../../utils/MainApi";

function Movies({movies, savedMovies, setSavedMovies, searchMovie, handleToggleCheckbox, inputError, searchError, preloader}) {

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

            {movies ?
                <MoviesCardList
                    movies={movies}

                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                /> : null}
        </main>
    );
}

export default Movies;
