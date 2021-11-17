import React from 'react';
import { useContext } from 'react';
import { pageContext } from '../../../contexts/pageContext';

import './Promo.scss';
import landingImg from '../../../images/landing-logo.svg';

function Promo({ ref }) {
    // const { aboutRef } = useContext(pageContext);

    // const scroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <section className='promo page-wrapper'>
            <div className='promo__flex'>
                <img src={landingImg} className='promo__image' alt='landing-logo' />

                <div className='promo__flex-text'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    {/*<button onClick={() => scroll(aboutRef)} className='promo__button'>*/}
                    <button>
                        Узнать больше
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Promo;
