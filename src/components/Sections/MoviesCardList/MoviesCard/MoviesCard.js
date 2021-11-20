import React from 'react';
import {useHistory} from 'react-router-dom';

import './MoviesCard.scss';
import img from '../../../../images/cards/card6.png';

import * as mainApi from '../../../../utils/MainApi';

function MoviesCard({movie, movies, setMovies, savedMovies, setSavedMovies, onMovieDelete}) {
    const [savePage, setSavePage] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        if (history.location.pathname === '/saved-movies') {
            setSavePage(true);
            // setSavedMovies(JSON.parse(localStorage.getItem('saved')));
        }
    }, []);

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
            mainApi.addMovieToSaved(jwt, movie)
                .then((res) => {
                    const saved = JSON.stringify([res, ...savedMovies]);
                    localStorage.setItem('saved', saved);
                    console.log(res);

                    setSavedMovies([res, ...savedMovies]);
                    setIsLiked(true);
                })
                .catch(err => console.log(err));
        }
        if (isLiked) {
            const liked = savedMovies.find((card) => card._id === movie._id);
            mainApi.removeMovieFromSaved(liked._id, jwt)
                .then((res) => {
                    if (res) {
                        setSavedMovies(savedMovies.filter((card) => card !== liked));
                    }
                })
                .catch(err => console.log(err));
        }
        // const savedMoviesList = JSON.parse(localStorage.getItem('saved'));
        // return setSavedMovies(savedMoviesList);
    }

    function handleDelete() {
        onMovieDelete(movie);
    }


    return (
        <article className='card' id={movie._id}>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <p className='card__subtitle'>{`${movieDuration(movie.duration)}`}</p>
                </div>
                <button
                    onClick={history.location.pathname === '/saved-movies' ?  handleDelete : handleSaveMovie}
                    className={
                        history.location.pathname === '/saved-movies' ?
                            'card__button card__button-delete' : 'card__button card__button-save' +
                            (isLiked ? 'card__button card__button-delete' : 'card__button card__button-save')
                    }
                />
            </header>
            <img className='card__img' src={
                savePage ? `${movie.image}` : (`https://api.nomoreparties.co${movie.image.url}`)}
                 alt='film-name'/>
        </article>
    );
}

export default MoviesCard;
