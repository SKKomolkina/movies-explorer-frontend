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
        handleChange,
        clearForm,
        validatorErrors
    } = useValidation(setErrorMessage, currentUser);

    React.useEffect(() => {
        setValues({name: currentUser.name, email: currentUser.email});
    }, [history, currentUser, setValues]);

    const handleOpenEdit = () => {
        setDisabledInput(false);
    }

    const clearEdit = () => {
        setErrorMessage('');
        setRightMessage('');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsValid(false);

        mainApi.updateProfile(localStorage.getItem('jwt'), {name: values.name, email: values.email})
            .then((res) => {
                setDisabledInput(true);
                setRightMessage('Данные успешно изменены!')
                return setCurrentUser({name: res.name, email: res.email});
            })
            .catch(() => {
                if (values.email === currentUser.email) {
                    setErrorMessage('Данная почта уже используется!');
                }
            })
            .finally(() => {
                setTimeout(() => {
                    clearForm();
                    clearEdit();
                }, 2500);
            })
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>

                <form className='profile__form' onSubmit={handleSubmit}>
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
                        {validatorErrors &&
                        Object.values(validatorErrors).filter((item) => item !== "").length > 0 ?
                            Object.entries(validatorErrors).map((item, ind) => {
                                if (item[1] === "") item[0] = '';
                                if (item[0] === "email") item[0] = 'Email:';
                                if (item[0] === "name") item[0] = 'Имя:';
                                return (
                                    <p key={ind} className='profile__message-text'>
                                        {`${item[0]} ${item[1]}`}
                                    </p>
                                );
                            })
                            : ""}

                        {
                            errorMessage ?
                                (<p className='profile__message-text profile__message-text-error'>{errorMessage}</p>) :
                                ''
                        }
                        {
                            rightMessage ?
                                (<p className='profile__message-text profile__message-text-right'>{rightMessage}</p>) :
                                ''
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
