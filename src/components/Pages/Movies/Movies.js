import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';

function Movies() {
    const [movies, setMovies] = React.useState([]);

    const [Preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);


    const searchMovie = (text) => {
        movieApi.getMovies()
            .then((res) => {
                filterMovies(res, text);
            })
            .catch(err => {
                console.log(err)
            });
    };

    const filterMovies = (data, text) => {
        const searchList = data.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
                return movie;
            }
            if (!movie) {
                setSearchError(true);
            }
            return false;
        });
        return setMovies(searchList);
    };

    //
    // const notFoundMovieError = () => {
    //     if (searchError) {
    //         return (
    //             <h2>Ничего не найдено!</h2>
    //         );
    //     }
    // };

    return (
        <main className='movies'>
            <SearchForm searchMovie={searchMovie}/>
            {Preloader ? <Preloader/> : null}

            <h2 className={`${setSearchError ? 'movies__search-error movies__search-error_active' :
                'movies__search-error movies__search-error_disabled'}`}>
                Ничего
                не найдено!</h2>

            {movies ? <MoviesCardList movies={movies}/> : ''}
        </main>
    );
}

export default Movies;
