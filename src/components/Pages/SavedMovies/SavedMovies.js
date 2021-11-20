import React from 'react';

import './SavedMovies.scss';
import '../Movies/Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

import Preloader from "../../Other/Preloader/Preloader";

const SavedMovies = ({
                         savedMovies, handleToggleCheckbox, searchMovie,
                         inputError, preloader, searchError, onMovieDelete
                     }) => {

    return (
        <main className='saved-movies page-wrapper'>
            <SearchForm
                searchMovie={searchMovie}
                inputError={inputError}
                handleToggleCheckbox={handleToggleCheckbox}
            />
            {preloader && <Preloader/>}

            <h2 className={searchError ? 'movies__search-error' : 'movies__search-error movies__search-error-hidden'}>
                Ничего не найдено!
            </h2>

            <MoviesCardList movies={savedMovies} onMovieDelete={onMovieDelete}/>
        </main>
    );
};

export default SavedMovies;
