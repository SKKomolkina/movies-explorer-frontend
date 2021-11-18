import React from 'react';
import {useHistory} from 'react-router-dom';

import './MoviesCard.scss';
import img from '../../../../images/cards/card6.png';

import * as mainApi from '../../../../utils/MainApi';

function MoviesCard({movie, savedMovies, setSavedMovies}) {
    const [page, setPage] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        if (history.location.pathname === '/saved-movies') {
            setPage(true)
        }
    }, [history]);

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
                    console.log(res);

                    setSavedMovies([res, ...savedMovies]);
                    setIsLiked(true);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <article className='card' id={movie.id}>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <p className='card__subtitle'>{`${movieDuration(movie.duration)}`}</p>
                </div>
                <button
                    onClick={handleSaveMovie}
                    className={isLiked ? 'card__button card__button-saved' : 'card__button card__button-save'}
                />
            </header>
            <img className='card__img' src={`https://api.nomoreparties.co${movie.image.url}`} alt='film-name'/>
        </article>
    );
}

export default MoviesCard;
