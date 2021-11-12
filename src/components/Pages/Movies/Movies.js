import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';

function Movies() {
    const [movies, setMovies] = React.useState([]);

    const [showPreloader, setShowPreloader] = React.useState(false);

    // const searchMovie = (text) => {
    //     setShowPreloader(true);
    //     movieApi.getMovies()
    //         .then((res) => {
    //             filterMovies(res, text);
    //         })
    //         .catch(err => console.log(err));
    // }

    // const filterMovies = (data, text) => {
    //     const searchList = data.filter((movie) => {
    //         if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
    //             return movie;
    //         }
    //         return false;
    //     });
    //     setMovies(searchList);
    // }

    React.useEffect(() => {
        movieApi.getMovies()
            .then((movies) => {
                setMovies(movies);
            })
            .catch((err) => console.log(err));
    });

    return (
        <main className='movies'>
            <SearchForm  />
            <Preloader/>

            <MoviesCardList movies={movies}/>
        </main>
    );
}

export default Movies;
