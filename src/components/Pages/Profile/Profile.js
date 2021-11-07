import React from 'react';

import './Profile.scss';

const Profile = ({name, email}) => {
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {name}!</h1>

            <ul className='profile__about-list'>
                <li className='profile__about-item'>
                    <p className='profile__data'>
                        <span className='profile__data-span'>Имя</span>
                    </p>
                    <p className='profile__data'>{name}</p>
                </li>

                <li className='profile__about-item'>
                    <p className='profile__data'>
                        <span className='profile__data-span'>E-mail</span>
                    </p>
                    <p className='profile__data'>{email}</p>
                </li>
            </ul>

            <div className='profile__buttons'>
                <button className='profile__button'>Редактировать</button>
                <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
            </div>
        </main>
    );
};

export default Profile;
