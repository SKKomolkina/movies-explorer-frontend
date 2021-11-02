import React from 'react';

import './SearchForm.scss';

import BlackButton from '../Buttons/BlackButton/BlackButton';
import SearchInput from '../Inputs/SearchInput/SearchInput';
import FilterCheckbox from '../Inputs/FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <>
            <form className='search-form'>
                <SearchInput placeholder='Фильмы'/>
                <BlackButton size='search' type='button' buttonText='Найти'/>
            </form>

            <FilterCheckbox/>
        </>
    );
}

export default SearchForm;
