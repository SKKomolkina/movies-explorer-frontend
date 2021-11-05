import React from 'react';

import './BlackButton.scss';

function BlackButton({ size, buttonText }) {
    return (
        <button className={`black-button black-button_${size}`}>
            {buttonText}
        </button>
    );
}

export default BlackButton;
