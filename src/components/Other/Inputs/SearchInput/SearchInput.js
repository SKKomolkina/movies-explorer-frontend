import React from 'react';

import './SearchInput.scss';

function SearchInput({ placeholder, onChange }) {

    return (
        <>
            <input
                onChange={onChange}
                type='text'
                className='search-input'
                placeholder={placeholder}
            />
        </>
    );
}

export default SearchInput;
