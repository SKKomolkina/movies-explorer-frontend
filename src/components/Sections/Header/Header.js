import React from 'react';

import './Header.scss';
import logo from '../../../images/logo.svg';

import Navigation from './Navigation/Navigation';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo' />

            <Navigation />
        </header>
    );
}

export default Header;
