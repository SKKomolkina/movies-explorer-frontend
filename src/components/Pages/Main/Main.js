import React from 'react';

import './Main.scss';

import Promo from '../../Sections/Promo/Promo';
import AboutProject from '../../Sections/AboutProject/AboutProject';
import Techs from '../../Sections/Techs/Techs';
import Portfolio from '../../Sections/Portfolio/Portfolio';
import Header from "../../Sections/Header/Header";
import Footer from "../../Sections/Footer/Footer";

function Main({isLoggedIn}) {

    // React.useEffect(() => {
    //     if (isLoggedIn) {
    //
    //     }
    // })

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='main'>
                <Promo/>

                <AboutProject/>
                <Techs/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    );
}

export default Main;
