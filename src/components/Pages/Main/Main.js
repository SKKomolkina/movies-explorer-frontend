import React from 'react';

import './Main.scss';

import Promo from '../../Sections/Promo/Promo';
import AboutProject from '../../Sections/AboutProject/AboutProject';
import Techs from '../../Sections/Techs/Techs';
import Portfolio from '../../Sections/Portfolio/Portfolio';

function Main() {
    return (
        <main className='main'>
            <Promo />

            <AboutProject />
            <Techs />
            <Portfolio />
        </main>
    );
}

export default Main;
