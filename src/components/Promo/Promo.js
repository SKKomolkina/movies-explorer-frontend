import React from 'react';

import './Promo.scss';
import landingImg from '../../images/landing-logo.svg';

import Header from '../Header/Header';

function Promo(props) {
    return (
        <section className='promo'>
            <Header />

            <div className='promo__flex'>
                <img src={landingImg} className='promo__image' alt='landing-logo' />

                <div className='promo__flex-text'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className='promo__button'>Узнать больше</button>
                </div>

            </div>
        </section>
    );
}

export default Promo;
