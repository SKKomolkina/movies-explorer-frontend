import React from 'react';

import './MoviesCardList.scss';

import MoviesCard from './MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
    const [moviesCount, setMoviesCount] = React.useState(0);
    const windowWidth = document.documentElement.clientWidth;

    React.useEffect(() => {
        renderMovies();
        window.addEventListener('resize', (evt) => resizeMovies(evt));
        return () => {
            window.removeEventListener('resize', resizeMovies);
        }
    }, []);

    const renderMovies = () => {
        if (windowWidth >= 1000) {
            setMoviesCount(12);
        } else if (windowWidth >= 768) {
            setMoviesCount(8);
        } else {
            setMoviesCount(5);
        }
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

    return (
        <>
            <section className='card-list'>
                {movies.slice(0, moviesCount).map(movie =>
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </section>

            <button className='card-list__button' type='button' onClick={handleAddMovies}>
                Еще
            </button>
        </>
    );
}

export default MoviesCardList;
