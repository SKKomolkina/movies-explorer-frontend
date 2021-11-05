import React from 'react';

import './GrayButton.scss';

function GrayButton({ text }) {
    return (
        <button className='gray-button'>{text}</button>
    );
}

export default GrayButton;
