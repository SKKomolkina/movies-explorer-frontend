import React from 'react';

import './Footer.scss';

function Footer(props) {
    return (
        <footer className='footer page-wrapper'>
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>

            <nav className='footer__flex'>
                <ul className='footer__navigation-links'>
                    <li className='footer__navigation-item'>
                        <a className='footer__link' href='https://practicum.yandex.ru'>
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className='footer__navigation-item'>
                        <a className='footer__link' href='https://github.com/SKKomolkina'>
                            Github
                        </a>
                    </li>
                    <li className='footer__navigation-item'>
                        <a className='footer__link' href='https://vk.com/awdrg'>
                            Vk
                        </a>
                    </li>
                </ul>

                <p className='footer__copyright'>
                    &copy; 2021. Киселева-Комолкина С. А.
                </p>
            </nav>
        </footer>
    );
}

export default Footer;
