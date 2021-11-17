import React from 'react';

import './SavedMovies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

import movieApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';

const SavedMovies = ({ movies }) => {

    // React.useEffect(() => {
    //     mainApi.getMovies()
    //         .then((res) => {
    //
    //         })
    // }, []);

    return (
        <main className='saved-movies page-wrapper'>
            <SearchForm/>
            <MoviesCardList movies={movies} />
        </main>
    );
};

export default SavedMovies;
