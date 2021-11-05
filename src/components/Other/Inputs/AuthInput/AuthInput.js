import React from 'react';

import './AuthInput.scss';

function AuthInput({title}) {
    return (
        <div className='auth-input'>
            <p className='auth-input__text'>{title}</p>
            <input className='auth-input__input'/>

            <span className='auth-input__span'>Что-то пошло не так...</span>
        </div>
    );
}

export default AuthInput;
