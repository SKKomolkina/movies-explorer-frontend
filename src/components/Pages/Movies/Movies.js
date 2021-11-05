import React from 'react';

import './Movies.scss';

import SearchForm from '../../Other/Forms/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import GrayButton from '../../Other/Buttons/GrayButton/GrayButton';
import Footer from '../../Sections/Footer/Footer';
import Header from "../../Sections/Header/Header";

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
