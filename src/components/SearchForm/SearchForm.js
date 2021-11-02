import React from 'react';

import './SearchForm.scss';

import BlackButton from '../Buttons/BlackButton/BlackButton';
import SearchInput from '../Inputs/SearchInput/SearchInput';

function SearchForm() {
    return (
        <form className='search-form'>
            <SearchInput placeholder='Фильмы' />
            <BlackButton size='search' type='button' buttonText='Найти' />
        </form>
    );
}

export default SearchForm;
