import React from 'react';
import {Link} from "react-router-dom";

import '../BurgerNav/BurgerNav.scss';
import './FullNav.scss';

import AccountButton from '../../Other/Buttons/AccountButton/AccountButton';

const FullNav = () => {
    return (
        <div className='full-navigation'>
            <ul className='full-navigation__list'>
                <li className='full-navigation__list-item'>
                    <Link className='burger-menu__link' to='/movies'>
                        Фильмы
                    </Link>
                </li>

                <li className='full-navigation__list-item'>
                    <Link className='burger-menu__link' to='/saved-movies'>
                        Сохраненные фильмы
                    </Link>
                </li>
            </ul>

            <Link className='full-navigation__button-account' to='/profile'><AccountButton/></Link>
        </div>
    );
};

export default FullNav;
