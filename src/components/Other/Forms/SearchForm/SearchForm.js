import React from 'react';

import './SearchForm.scss';

import BlackButton from '../../Buttons/BlackButton/BlackButton';
import SearchInput from '../../Inputs/SearchInput/SearchInput';
import FilterCheckbox from '../../Inputs/FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovie, inputError }) {
    const [inputValue, setInputValue] = React.useState('');

    const handleChangeInput = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleFilterSubmit = (evt) => {
        evt.preventDefault();
        searchMovie(inputValue);
    }

    return (
        <>
            <form className='search-form'>
                <SearchInput onChange={handleChangeInput} inputError={inputError} placeholder='Фильмы'/>
                <BlackButton onClick={handleFilterSubmit} size='search' type='button' buttonText='Найти'/>
            </form>

            <FilterCheckbox/>
        </>
    );
}

export default SearchForm;
