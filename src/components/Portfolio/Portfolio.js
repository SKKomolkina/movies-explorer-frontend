import React from 'react';

import './Portfolio.scss';
import photo from '../../images/portfolio.png';
import link from '../../images/link.svg';

import NavTab from '../NavTab/NavTab';

function Portfolio() {
    return (
        <section className='portfolio page-wrapper'>
            <NavTab text='Студент' />

            <article className='portfolio__flex'>
                <img src={photo} alt='Student' className='portfolio__photo' />

                <div className='portfolio__text-wrapper'>
                    <h3 className='portfolio__title'>Виталий</h3>

                    <p className='portfolio__subtitle'>Фронтенд-разработчик, 30 лет</p>
                    <p className='portfolio__about'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                        работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>

                    <ul className='portfolio__links'>
                        <li className='portfolio__links-item'><a href='https://vk.com/awdrg'>Vk</a></li>
                        <li className='portfolio__links-item'><a href='https://github.com/SKKomolkina'>Github</a></li>
                    </ul>
                </div>

                <ul className='portfolio__works'>
                    <h4 className='portfolio__works-title'>Портфолио</h4>
                    <li className='portfolio__works-item'>
                        <a className='portfolio__works-item_link' href='https://skkomolkina.github.io/how-to-learn/'>
                            Статичный сайт
                            <img className='portfolio__works-img' src={link} alt='Watch' />
                        </a>
                    </li>
                    <li className='portfolio__works-item'>
                        <a className='portfolio__works-item_link' href='https://skkomolkina.github.io/russian-travel/'>
                            Адаптивный сайт
                            <img className='portfolio__works-img' src={link} alt='Watch' />
                        </a>
                    </li>
                    <li className='portfolio__works-item'>
                        <a className='portfolio__works-item_link' href='https://skkomolkina.github.io/mesto-react/'>
                            Одностраничное приложение
                            <img className='portfolio__works-img' src={link} alt='Watch' />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Portfolio;
