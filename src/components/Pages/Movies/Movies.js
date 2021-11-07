import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import GrayButton from '../../Other/Buttons/GrayButton/GrayButton';

function Movies() {
    return (
        <main className='movies'>
            <SearchForm/>
            <MoviesCardList/>

            <GrayButton text='Еще'/>
        </main>
    );
}

export default Movies;
