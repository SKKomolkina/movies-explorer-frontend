import React from 'react';

import './FilterCheckbox.scss';

function FilterCheckbox() {
    return (
        <>
            <label className='filter-checkbox'>
                <input className='filter-checkbox__input-invisible' type='checkbox'/>
                <span className='filter-checkbox__input-visible'></span>

                <span className='filter-checkbox__label'>Короткометражки</span>
            </label>
        </>
    );
}

export default FilterCheckbox;
