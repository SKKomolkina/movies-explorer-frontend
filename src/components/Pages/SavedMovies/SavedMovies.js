import React from 'react';

import './SavedMovies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

const SavedMovies = () => {
    return (
        <main className='saved-movies page-wrapper'>
            <SearchForm/>
            <MoviesCardList />
        </main>
    );
};

export default SavedMovies;
