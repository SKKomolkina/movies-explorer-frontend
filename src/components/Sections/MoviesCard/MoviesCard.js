import React from 'react';
import {useHistory} from 'react-router-dom';

import './MoviesCard.scss';

import * as mainApi from '../../../utils/MainApi';

function MoviesCard({movie, movies, setMovies, savedMovies, setSavedMovies}) {
    const [isLiked, setIsLiked] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        savedMovies && savedMovies.some((card) => card.nameEN === movie.nameEN) ?
            setIsLiked(true) : setIsLiked(false);
    }, [savedMovies, movie.nameEN]);

    const movieDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        if (hours === 0) {
            return `${minutes} мин`;
        }
        if (minutes !== 0) {
            return `${hours} ч ${minutes} мин`;
        }
        return `${hours} ч`;
    }

    const handleSaveMovie = () => {
        const jwt = localStorage.getItem('jwt');

        if (!isLiked) {
            mainApi.saveMovie(jwt, movie)
                .then((res) => {
                    if (res._id) {
                        setSavedMovies([res, ...savedMovies]);
                        setIsLiked(true);
                    }
                })
                .catch(err => console.log(err));
        }

        if (isLiked) {
            const liked = savedMovies.find((card) => card.movieId === movie.id);
            mainApi.removeMovieFromSaved(liked._id, jwt)
                .then((res) => {
                    if (res) {
                        savedMovies(savedMovies.filter((card) => card !== liked));
                        setIsLiked(false);
                    }
                })
                .catch(err => console.log(err));
        }
    }

    const removeMovie = () => {
        const jwt = localStorage.getItem('jwt');
        mainApi.removeMovieFromSaved(movie._id, jwt)
            .then((res) => {
                if (res) {
                    setMovies(movies.filter((item) => item._id !== movie._id));
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <article className='card' id={movie._id}>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <p className='card__subtitle'>{`${movieDuration(movie.duration)}`}</p>
                </div>
                <button
                    onClick=
                        {
                            history.location.pathname !== '/saved-movies' ? handleSaveMovie : removeMovie
                        }
                    className=
                        {
                            history.location.pathname === '/saved-movies' ?
                                'card__button card__button-delete' : 'card__button card__button-save' +
                                (isLiked ? 'card__button card__button-delete' : 'card__button card__button-save')
                        }
                />
            </header>
            <img
                className='card__img'
                src=
                    {
                        history.location.pathname === '/saved-movies' ? `${movie.image}` :
                            `https://api.nomoreparties.co${movie.image.url}`
                    }
                alt='film-name'
            />
        </article>
    );
}

export default MoviesCard;
