import React from 'react';
// import { Link } from 'react-router-dom';

import './Navigation.scss';

import BlackButton from '../Buttons/BlackButton/BlackButton';

function Navigation(props) {
    return (
        <nav className='navigation'>
            <p className='navigation__link'>
                Регистрация
            </p>
            <BlackButton size='min' type='button' buttonText='Войти' />
        </nav>
    );
}

export default Navigation;
