import React from 'react';

import './Main.scss';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <main className='main'>
            <Promo />

            <AboutProject />
            <Techs />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Main;
