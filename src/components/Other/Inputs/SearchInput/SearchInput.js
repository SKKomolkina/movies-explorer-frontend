import React from 'react';

import './SearchInput.scss';

function SearchInput({ placeholder, onChange, inputValue }) {

    return (
        <>
            <input
                onChange={onChange}
                type='text'
                className='search-input'
                value={inputValue}
                placeholder={placeholder}
            />
        </>
    );
}

export default SearchInput;
