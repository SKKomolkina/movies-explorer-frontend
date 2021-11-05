import React from 'react';

import './Main.scss';

import Promo from '../../Sections/Promo/Promo';
import AboutProject from '../../Sections/AboutProject/AboutProject';
import Techs from '../../Sections/Techs/Techs';
import Portfolio from '../../Sections/Portfolio/Portfolio';
import Footer from '../../Sections/Footer/Footer';
import Header from "../../Sections/Header/Header";

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
