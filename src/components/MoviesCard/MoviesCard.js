import React from 'react';

import './MoviesCard.scss';
import disabledSaveIcon from '../../images/save-dis.svg';
import activeSaveIcon from '../../images/save-act.svg';

function MoviesCard({img}) {
    return (
        <article className='card'>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>33 слова о дизайне</h2>
                    <p className='card__subtitle'>1ч 47м</p>
                </div>
                <button className='card__button-save' onClick={() => {}} />
            </header>
            <img className='card__img' src={img} alt='film-name'/>
        </article>
    );
}

export default MoviesCard;
