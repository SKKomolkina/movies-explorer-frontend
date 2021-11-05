import React from 'react';
import { useHistory } from "react-router-dom";

import './Header.scss';
import logo from '../../../images/logo.svg';

import Navigation from './Navigation/Navigation';

function Header() {
    const [pink, setPink] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
            if (history.location.pathname === '/') {
                setPink(true);
            }
    }, [history]);


    return (
        <header className={pink ? 'header header_pink' : 'header'}>
            <img src={logo} alt='logo' className='header__logo' />

            <Navigation />
        </header>
    );
}

export default Header;
