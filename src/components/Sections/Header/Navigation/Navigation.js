import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Navigation.scss';
import burger from '../../../../images/icon-main-burger.svg';

import BlackButton from '../../../Other/Buttons/BlackButton/BlackButton';
import BurgerNav from "../../BurgerNav/BurgerNav";

function Navigation() {
    const [isMenuActive, setIsMenuActive] = React.useState(false);

    const links = [
        {title: 'Главная', path: '/'},
        {title: 'Фильмы', path: '/movies'},
        {title: 'Сохранённые фильмы', path: '/'},
    ]

    return (
        <Switch>
            <Route exact path='/'>
                <nav className='navigation'>
                    <p className='navigation__link'>
                        Регистрация
                    </p>
                    <BlackButton size='min' type='button' buttonText='Войти'/>
                </nav>
            </Route>

            <Route path='/'>
                <nav className='navigation-main'>
                    <button
                        className='navigation-main__menu'
                        onClick={() => setIsMenuActive(!isMenuActive)}
                    />
                    <BurgerNav
                        links={links}
                        active={isMenuActive}
                        setActive={setIsMenuActive}
                    />
                </nav>
            </Route>

        </Switch>
    );
}

export default Navigation;
