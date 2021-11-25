import React from 'react';

import './Navigation.scss';

import BurgerNav from "../BurgerNav/BurgerNav";

const NavLogin = () => {
    const [isMenuActive, setIsMenuActive] = React.useState(false);

    return (
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
    );
};

export default NavLogin;
