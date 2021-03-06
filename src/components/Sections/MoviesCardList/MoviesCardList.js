import React from 'react';
import {useHistory} from 'react-router-dom';

import './MoviesCardList.scss';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, setMovies, savedMovies, setSavedMovies, onMovieDelete}) {
    const [moviesCount, setMoviesCount] = React.useState(0);

    const windowWidth = document.documentElement.clientWidth;

    function renderMovies() {
        if (windowWidth >= 1000) {
            return setMoviesCount(12);
        }
        if (windowWidth >= 768) {
            return setMoviesCount(8);
        } else {
            setMoviesCount(5);
        }
        return setMoviesCount(5);
    }

    const resizeMovies = (evt) => {
        if (evt.target.innerWidth >= 768) {
            setMoviesCount(12);
        } else if (evt.target.innerWidth >= 568) {
            setMoviesCount(8);
        } else {
            setMoviesCount(5);
        }
    }

    const handleAddMovies = () => {
        if (windowWidth < 480) {
            setMoviesCount((moviesCount) + 1);
        } else if (windowWidth < 768) {
            setMoviesCount((moviesCount) + 2);
        } else if (windowWidth > 767) {
            setMoviesCount((moviesCount) + 3);
        }
    }

    React.useEffect(() => {
        renderMovies();
        window.addEventListener('resize', (evt) => resizeMovies(evt));
        return () => {
            window.removeEventListener('resize', resizeMovies);
        }
    }, []);

    return (
        <>
            <section className='card-list'>
                {(movies.slice(0, moviesCount).map(movie =>
                    <MoviesCard
                        movie={movie}
                        movies={movies}
                        setMovies={setMovies}
                        key={movie.id}

                        onMovieDelete={onMovieDelete}

                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}
                    />
                ))}

            </section>

            {
                (moviesCount >= movies.length) ? null :
                    <button className='card-list__button' type='button' onClick={handleAddMovies}>
                        ??????
                    </button>
            }
        </>
    );
}

export default MoviesCardList;
