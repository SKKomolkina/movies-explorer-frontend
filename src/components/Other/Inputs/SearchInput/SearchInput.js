import React from 'react';

import './SearchInput.scss';

function SearchInput({ placeholder }) {
    return (
        <>
            <input type='text' className='search-input' placeholder={placeholder} />
        </>
    );
}

export default SearchInput;
