import React from 'react';
// import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation(props) {
    return (
        <nav className='navigation'>
            <p className='navigation__link'>
                Регистрация
            </p>
            <button className='navigation__link navigation__link_signin'>
                Войти
            </button>
        </nav>
    );
}

export default Navigation;
