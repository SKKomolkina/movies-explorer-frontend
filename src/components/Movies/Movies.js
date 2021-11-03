import React from 'react';

import './Movies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import GrayButton from '../Buttons/GrayButton/GrayButton';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <main className='movies'>
            <SearchForm/>
            <MoviesCardList/>

            <GrayButton text='Еще' />

            <Footer />
        </main>
    );
}

export default Movies;
