import React from 'react';
import { useHistory, Link } from "react-router-dom";

import './Header.scss';
import logo from '../../../images/logo.svg';

import Navigation from './Navigation/Navigation';

function Header() {
    const history = useHistory();

    const [pinkHeader, setPinkHeader] = React.useState(false);

    const changeHeaderColor = () => {
        setPinkHeader((color) => !color);
    }

    React.useEffect(() => {
        if (history.location.pathname === '/') {
            changeHeaderColor();
            console.log(history.location);
        }
    }, [history.location]);

    return (
        <header className={pinkHeader ? 'header header_pink' : 'header'}>
            <Link to='/'>
                <img src={logo} alt='logo' className='header__logo' />
            </Link>

            <Navigation />
        </header>
    );
}

export default Header;
