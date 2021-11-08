import React from 'react';
import {useHistory} from 'react-router-dom';

import './MoviesCard.scss';
import img from '../../../../images/cards/card6.png';


function MoviesCard({ movie }) {
    const [page, setPage] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        if (history.location.pathname === '/saved-movies') {
            setPage(true)
        }
    }, [history])
    return (
        <article className='card'>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>{movie.name}</h2>
                    <p className='card__subtitle'>{movie.time}</p>
                </div>
                <button className={page ? 'card__button card__button-saved' : 'card__button card__button-save'} onClick={() => {}} />
            </header>
            <img className='card__img' src={img} alt='film-name'/>
        </article>
    );
}

export default MoviesCard;
