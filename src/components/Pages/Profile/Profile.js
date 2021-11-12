import React from 'react';

import './Profile.scss';
import Header from "../../Sections/Header/Header";

import {currentUserContext} from "../../../contexts/currentUserContext";

const Profile = (props) => {
    const currentUser = React.useContext(currentUserContext);

    return (
        <main className='profile'>
            <Header/>

            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>

            <ul className='profile__about-list'>
                <li className='profile__about-item'>
                    <p className='profile__data'>
                        <span className='profile__data-span'>Имя</span>
                    </p>
                    <p className='profile__data'>{currentUser.name}</p>
                </li>

                <li className='profile__about-item'>
                    <p className='profile__data'>
                        <span className='profile__data-span'>E-mail</span>
                    </p>
                    <p className='profile__data'>{currentUser.email}</p>
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
