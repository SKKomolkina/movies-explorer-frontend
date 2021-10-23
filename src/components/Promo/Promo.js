import React from 'react';

import './Promo.scss';
import landingImg from '../../images/landing-logo.svg';

import Header from '../Header/Header';

function Promo(props) {
    return (
        <div className='promo'>
            <Header />

            <div className='promo__grid'>
                <img src={landingImg} className='promo__image' alt='landing-logo' />
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>

                <button className='promo__button'>Узнать больше</button>
            </div>
        </div>
    );
}

export default Promo;
