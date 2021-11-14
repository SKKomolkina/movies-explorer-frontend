import React from 'react';

import './BlackButton.scss';

function BlackButton({ size, buttonText, onClick }) {
    return (
        <button onClick={onClick} className={`black-button black-button_${size}`}>
            {buttonText}
        </button>
    );
}

export default BlackButton;
