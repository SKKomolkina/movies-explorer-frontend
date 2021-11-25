import React from 'react';
import {useHistory} from "react-router-dom";

import './Profile.scss';
import Header from "../../Sections/Header/Header";

import {currentUserContext} from "../../../contexts/currentUserContext";
import {useValidation} from "../../../utils/useValidation";
import * as mainApi from '../../../utils/MainApi';

const Profile = ({signOut, isLoggedIn}) => {
    const [disabledInput, setDisabledInput] = React.useState(true);
    // const [showButton, setShowButton] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [rightMessage, setRightMessage] = React.useState('');

    const {currentUser, setCurrentUser} = React.useContext(currentUserContext);
    const history = useHistory();

    const {
        values,
        setValues,
        setIsValid,
        isValid,
        handleChange
    } = useValidation(setErrorMessage, currentUser);

    React.useEffect(() => {
        setValues({name: currentUser.name, email: currentUser.email});
    }, [history, currentUser, setValues]);

    const handleOpenEdit = () => {
        setDisabledInput(false);
    }

    const clearMessages = () => {
        setRightMessage('');
        setErrorMessage('');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsValid(false);

        mainApi.updateProfile(localStorage.getItem('jwt'), {name: values.name, email: values.email})
            .then((res) => {
                setDisabledInput(false);
                return setCurrentUser({name: res.name, email: res.email});
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                clearMessages();
            })
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>

                <form onSubmit={handleSubmit}>
                    <ul className='profile__about-list'>
                        <li className='profile__about-item'>
                            <p className='profile__data'>
                                <span className='profile__data-span'>Имя</span>
                            </p>
                            <input
                                id='name'
                                name='name'
                                className='profile__data'
                                value={values.name}
                                autoComplete='off'

                                onChange={handleChange}
                                disabled={disabledInput}

                                minLength='3'
                                maxLength='30'
                                type='text'
                                required
                            />
                        </li>

                        <li className='profile__about-item'>
                            <p className='profile__data'>
                                <span className='profile__data-span'>E-mail</span>
                            </p>
                            <input
                                id='email'
                                name='email'
                                className='profile__data'
                                value={values.email}
                                autoComplete='off'

                                onChange={handleChange}
                                disabled={disabledInput}

                                minLength='3'
                                maxLength='30'
                                type='email'
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                                required
                            />
                        </li>
                    </ul>

                    <div className='profile__message'>
                        {
                            !isValid ?
                                (<p className='profile__message-item'>{errorMessage}</p>)
                                :
                                (<p className='profile__message-item'>{rightMessage}</p>)
                        }
                    </div>

                    <div className='profile__buttons'>
                        {disabledInput &&
                        <button type='button' onClick={handleOpenEdit} className='profile__button'>
                            Редактировать
                        </button>}

                        {!disabledInput &&
                        (<button type='submit' className='profile__button' disabled={!isValid}>
                            Сохранить
                        </button>)}

                        <button onClick={signOut} className='profile__button profile__button_exit'>
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Profile;
