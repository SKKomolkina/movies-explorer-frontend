import React from 'react';

import './AboutProject.scss';

import NavTab from '../NavTab/NavTab';

function AboutProject(props) {
    return (
        <div className='about'>
            <NavTab text='О проекте' />

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

            <div className='about__stroke'>
                <p className='about__week'></p>

            </div>
        </div>
    );
}

export default AboutProject;
