import React from 'react';

import './SavedMovies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

import movieApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';

const SavedMovies = ({ savedMovies }) => {
    return (
        <main className='saved-movies page-wrapper'>
            <SearchForm/>
            <MoviesCardList movies={savedMovies} />
        </main>
    );
};

export default SavedMovies;
