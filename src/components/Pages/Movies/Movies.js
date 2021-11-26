import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';
import Header from "../../Sections/Header/Header";
import Footer from "../../Sections/Footer/Footer";

const Movies = ({
                    movies, setMovies, savedMovies, setSavedMovies, searchMovie, handleToggleCheckbox,
                    inputError, searchError, preloader, isLoggedIn
                }) => {

    React.useEffect(() => {
        const searchResult = localStorage.getItem('search');
        if (searchResult && searchResult !== 'undefined' && JSON.parse(searchResult).length > 0) {
            setMovies(JSON.parse(searchResult));
        }
    }, [setMovies]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>

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
                        setMovies={setMovies}

                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}
                    /> : null}
            </main>

            <Footer/>
        </>
    );
}

export default Movies;
