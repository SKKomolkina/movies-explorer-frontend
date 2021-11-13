import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
import Preloader from '../../Other/Preloader/Preloader';

import movieApi from '../../../utils/MoviesApi';

function Movies() {
    const [movies, setMovies] = React.useState([]);

    const [Preloader, setPreloader] = React.useState(false);

    const searchMovie = (text) => {
        setPreloader(true);
        movieApi.getMovies()
            .then((res) => {
                filterMovies(res, text);
            })
            .catch(err => console.log(err));
    }

    const filterMovies = (data, text) => {
        const searchList = data.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
                return movie;
            }
            return false;
        });
        setMovies(searchList);
    }

    React.useEffect(() => {
        movieApi.getMovies()
            .then((movies) => {
                setMovies(movies);
                // const moviesList = JSON.stringify(movies);
                // localStorage.setItem('all-movies', moviesList);
                // setMovies(JSON.parse(localStorage.getItem('all-movies')));
            })
            .catch((err) => console.log(err));
    });

    return (
        <main className='movies'>
            <SearchForm filterMovies={filterMovies} />
            {Preloader && <Preloader/>}

            <MoviesCardList movies={movies}/>
        </main>
    );
}

export default Movies;
