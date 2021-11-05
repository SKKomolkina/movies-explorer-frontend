import React from 'react';
import {Link} from "react-router-dom";

import './BurgerNav.scss';
import AccountButton from "../../Other/Buttons/AccountButton/AccountButton";

const BurgerNav = ({links, active, setActive}) => {
    return (
        <>
            <div className={active ? 'burger-menu__blur' : 'burger-menu__blur burger-menu__blur_disable'}/>
            <div className={active ? 'burger-menu' : 'burger-menu burger-menu_disable'}
                 onClick={() => setActive(!active)}>

                <div className='burger-menu__content' onClick={evt => evt.stopPropagation()}>
                    <button className='burger-menu__button' onClick={() => setActive(false)}/>

                    <ul className='burger-menu__list'>
                        {links.map(link =>
                            <li className='burger-menu__list_item'>
                                <Link
                                    className='burger-menu__link'
                                    path={link.path}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )}
                    </ul>

                    <AccountButton/>
                </div>
            </div>
        </>
    );
};

export default BurgerNav;
