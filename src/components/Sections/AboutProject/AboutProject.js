import React from 'react';
import { useContext } from 'react';
import { pageContext } from '../../../contexts/pageContext';

import './AboutProject.scss';

import NavTab from '../NavTab/NavTab';

function AboutProject(props) {
    const { aboutRef } = useContext(pageContext);

    return (
        <section className='about' ref={aboutRef}>
            <NavTab text='О проекте'/>

            <div className='about__wrapper'>
                <article className='about__article'>
                    <h4 className='about__title'>Дипломный проект включал 5 этапов</h4>
                    <p className='about__text'>
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и
                        финальные доработки.
                    </p>
                </article>

                <article className='about__article'>
                    <h4 className='about__title'>На выполнение диплома ушло 5 недель</h4>
                    <p className='about__text'>
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </article>
            </div>

            <ul className='about__steps'>
                <li className='about__steps_week'>
                    <p className='about__steps_week-item'>1 неделя</p>
                    <p className='about__steps_week-item'>4 недели</p>
                </li>
                <li className='about__steps_tech'>
                    <p className='about__steps_tech-item'>Back-end</p>
                    <p className='about__steps_tech-item'>Front-end</p>
                </li>
            </ul>
        </section>
    );
}

export default AboutProject;
