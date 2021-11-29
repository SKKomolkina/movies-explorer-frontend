import React from 'react';

import './AuthButton.scss';

function AuthButton({text, isValid}) {
    return (
        <button disabled={!isValid} className='auth-button'>{text}</button>
    );
}

export default AuthButton;
