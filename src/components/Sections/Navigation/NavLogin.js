import React from 'react';
import {useHistory} from "react-router-dom";

import './Navigation.scss';

import BurgerNav from "../BurgerNav/BurgerNav";
import FullNav from "../FullNav/FullNav";

const NavLogin = () => {
    const [isMenuActive, setIsMenuActive] = React.useState(false);

    const [fullNav, setFullNav] = React.useState(false);
    const history = useHistory();
    const windowWidth = document.documentElement.clientWidth;

    const changeWidth = (evt) => {
        if (evt.target.innerWidth > 1000) {
            return setFullNav(true);
        } else {
            setFullNav(false);
        }
    }

    const renderNav = () => {
        if (windowWidth > 1000) {
            return setFullNav(true);
        }
        return setFullNav(false);
    }

    React.useEffect(() => {
        renderNav();
        window.addEventListener('resize', (evt) => changeWidth(evt));
        console.log(fullNav);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [window.innerWidth, history.action]);


    return (
        <nav className='navigation-main'>
            <button className='navigation-main__menu' onClick={() => setIsMenuActive(!isMenuActive)}/>

            {fullNav ?
                (<FullNav/>) :
                (<BurgerNav active={isMenuActive} setActive={setIsMenuActive}/>)
            }


        </nav>
    );
};

export default NavLogin;
