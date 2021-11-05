import React from 'react';

import './AccountButton.scss';
import img from '../../../../images/icon-main.svg';

const AccountButton = () => {
    return (
        <button className='account-button'>
            <img src={img} className='account-button__img' />
            <p className='account-button__text'>Аккаунт</p>
        </button>
    );
};

export default AccountButton;
