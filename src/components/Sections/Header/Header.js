import React from 'react';
import {useHistory, Link} from "react-router-dom";

import './Header.scss';
import logo from '../../../images/logo.svg';

import NavLogin from "../Navigation/NavLogin";
import NavLogout from "../Navigation/NavLogout";

function Header({isLoggedIn}) {
    const history = useHistory();

    const [pinkHeader, setPinkHeader] = React.useState(false);

    const changeHeaderColor = () => {
        setPinkHeader((color) => !color);
    }

    React.useEffect(() => {
        if (history.location.pathname === '/') {
            changeHeaderColor();
        }
    }, []);

    return (
        <header className={pinkHeader ? 'header header_pink' : 'header'}>
            <Link to='/'>
                <img src={logo} alt='logo' className='header__logo'/>
            </Link>

            {isLoggedIn ? <NavLogin/> : <NavLogout/>}
        </header>
    );
}

export default Header;
