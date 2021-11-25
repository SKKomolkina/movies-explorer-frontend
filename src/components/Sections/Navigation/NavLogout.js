import React from 'react';

import {Link} from "react-router-dom";

import './Navigation.scss';

import BlackButton from "../../Other/Buttons/BlackButton/BlackButton";

const NavLogout = () => {
    return (
            <nav className='navigation'>
                <Link to='/signup'>
                    <p className='navigation__link'>
                        Регистрация
                    </p>
                </Link>
                <Link to='/signin'>
                    <BlackButton size='min' type='button' buttonText='Войти'/>
                </Link>
            </nav>
    );
};

export default NavLogout;
