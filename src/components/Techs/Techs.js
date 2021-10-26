import React from 'react';

import './Techs.scss';

import NavTab from '../NavTab/NavTab';

function Techs(props) {
    return (
        <section className='techs'>
            <NavTab text='Технологии' />

            <h3 className='techs__title'>7 технологий</h3>
            <p className='techs__text'>
                На курсе веб-разработки мы освоили технологии,
                которые применили в дипломном проекте.
            </p>

            <ul className='techs__list'>
                <li className='techs__list-item'>HTML</li>
                <li className='techs__list-item'>CSS</li>
                <li className='techs__list-item'>JS</li>
                <li className='techs__list-item'>React</li>
                <li className='techs__list-item'>Git</li>
                <li className='techs__list-item'>Express.js</li>
                <li className='techs__list-item'>MongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;
