import React from 'react';

import './MoviesCardList.scss';

import MoviesCard from './MoviesCard/MoviesCard';

function MoviesCardList() {
    const movies = [
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
        {name: '33 слова о дизайне', time: '1ч 47м'},
    ];

    return (
        <section className='card-list'>
            {movies.map(movie =>
                <MoviesCard movie={movie} />
            )}
        </section>
    );
}

export default MoviesCardList;
