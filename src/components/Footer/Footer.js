import React from 'react';

import './Footer.scss';

function Footer(props) {
    return (
        <footer className='footer'>
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>

            <nav className='footer__flex'>
                <ul className='footer__navigation-links'>
                    <li><a className='footer__link' href='https://vk.com/awdrg'>
                        Яндекс.Практикум
                    </a></li>
                    <li><a className='footer__link' href='https://vk.com/awdrg'>
                        Github
                    </a></li>
                    <li><a className='footer__link' href='https://vk.com/awdrg'>
                        Facebook
                    </a></li>
                </ul>

                <p className='footer__copyright'>
                    &copy; 2021. Киселева-Комолкина С. А.
                </p>
            </nav>
        </footer>
    );
}

export default Footer;
