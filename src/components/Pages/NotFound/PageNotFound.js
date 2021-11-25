import React from 'react';
import {Link, useHistory} from "react-router-dom";

import './PageNotFound.scss';

const PageNotFound = () => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <main className='not-found page-wrapper'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>

            <Link path='/' onClick={handleGoBack} className='not-found__back'>Назад</Link>
        </main>
    );
};

export default PageNotFound;
