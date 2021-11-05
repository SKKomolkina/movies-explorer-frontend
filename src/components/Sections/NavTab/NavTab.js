import React from 'react';

import './NavTab.scss';

function NavTab({ text }) {
    return (
        <header className='nav-tab'>
            <h2 className='nav-tab__title'>{text}</h2>
        </header>
    );
}

export default NavTab;
