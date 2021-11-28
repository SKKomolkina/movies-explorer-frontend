import React from 'react';

import './SavedMovies.scss';
import '../Movies/Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from "../../Other/Preloader/Preloader";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Sections/Header/Header";

import * as mainApi from '../../../utils/MainApi';

const SavedMovies = ({
                         setSavedMovies, savedMovies, handleToggleCheckbox, searchMovie,
                         inputError, preloader, searchError, onMovieDelete, isLoggedIn
                     }) => {

    React.useEffect(() => {
        mainApi.getSavedMovies(localStorage.getItem('jwt'))
            .then((res) => {
                setSavedMovies(res);
            })
    }, []);

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>

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

                <MoviesCardList setMovies={setSavedMovies} movies={savedMovies} onMovieDelete={onMovieDelete}/>
            </main>

            <Footer/>
        </>
    );
};

export default SavedMovies;
