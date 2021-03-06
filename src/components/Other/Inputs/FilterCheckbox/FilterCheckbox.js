import React from 'react';

import './FilterCheckbox.scss';

function FilterCheckbox({handleToggleCheckBox}) {

    return (
        <>
            <label className='filter-checkbox'>
                <input className='filter-checkbox__input-invisible' type='checkbox'/>
                <span onClick={handleToggleCheckBox} className='filter-checkbox__input-visible'/>

                <span onClick={handleToggleCheckBox} className='filter-checkbox__label'>Короткометражки</span>
            </label>
        </>
    );
}

export default FilterCheckbox;
