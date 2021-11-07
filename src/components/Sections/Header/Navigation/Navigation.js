import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import './Navigation.scss';

import BlackButton from '../../../Other/Buttons/BlackButton/BlackButton';
import BurgerNav from "../../BurgerNav/BurgerNav";

function Navigation() {
    const [isMenuActive, setIsMenuActive] = React.useState(false);

    return (
        <Switch>
            <Route exact path='/'>
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
            </Route>

            <Route path='/'>
                <nav className='navigation-main'>
                    <button
                        className='navigation-main__menu'
                        onClick={() => setIsMenuActive(!isMenuActive)}
                    />
                    <BurgerNav
                        active={isMenuActive}
                        setActive={setIsMenuActive}
                    />
                </nav>
            </Route>

        </Switch>
    );
}

export default Navigation;
