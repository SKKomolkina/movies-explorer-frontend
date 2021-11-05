import React from 'react';

import './AuthButton.scss';

function AuthButton({text}) {
    return (
        <button className='auth-button'>{text}</button>
    );
}

export default AuthButton;
