import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';

function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [storageMovies, setStorageMovies] = React.useState([]);

    const [preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        mainApi.getMovies(jwt)
            .then((res) => {
                setStorageMovies(res);
            })
            .catch(err => console.log(err));
    }, []);

    const searchMovie = (text) => {
        setSearchError(false);
        setPreloader(true);

        if (!storageMovies) {
            movieApi.getMovies()
                .then((res) => {
                    const allMovies = JSON.stringify(res);
                    localStorage.setItem('storage-movies', allMovies);
                })
                .catch(() => {
                    setSearchError(true)
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
    };

    const filterMovies = (data, text) => {
        const searchList = data.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
                return movie;
            }
            return false;
        });
        if (searchList.length === 0) {
            setSearchError(true);
        }
        setMovies(searchList);
    };


    return (
        <main className='movies'>
            <SearchForm searchMovie={searchMovie}/>
            {preloader && (<Preloader/>)}

            <h2 className=
                    {
                        searchError ? 'movies__search-error' : 'movies__search-error movies__search-error-hidden'
                    }
            >
                Ничего не найдено!
            </h2>

            {movies ? <MoviesCardList movies={movies}/> : ''}
        </main>
    );
}

export default Movies;
