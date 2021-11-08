import React from 'react';
import { Link } from "react-router-dom";

import './AccountButton.scss';
import img from '../../../../images/icon-main.svg';

const AccountButton = () => {
    return (
        <Link to='/profile' className='account-button'>
                <img alt='Click' src={img} className='account-button__img'/>
                <p className='account-button__text'>Аккаунт</p>
        </Link>
    );
};

export default AccountButton;
