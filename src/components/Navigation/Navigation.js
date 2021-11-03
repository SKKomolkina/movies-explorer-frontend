import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Navigation.scss';
import burger from '../../images/icon-main-burger.svg';

import BlackButton from '../Buttons/BlackButton/BlackButton';

function Navigation() {
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
                    <button className='navigation-main__menu'/>

                    
                </nav>
            </Route>

        </Switch>
    );
}

export default Navigation;
