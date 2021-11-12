import React from 'react';
import {Link} from 'react-router-dom';

import './Auth.scss';
import logo from '../../../images/logo.svg';

import AuthButton from "../../Other/Buttons/AuthButton/AuthButton";

function SignUp({signUp}) {
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [nameValue, setNameValue] = React.useState('');

    const handleChangeEmail = (evt) => {
        setEmailValue(evt.target.value);
    }

    const handleChangePassword = (evt) => {
        setPasswordValue(evt.target.value);
    }

    const handleChangeName = (evt) => {
        setNameValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        signUp(emailValue, passwordValue, nameValue);
    }

    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo'/></Link>
                <h1 className='auth__title'>Добро пожаловать!</h1>
            </header>

            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth-input'>
                    <p className='auth-input__text'>Имя</p>
                    <input
                        onChange={handleChangeName}
                        value={nameValue}
                        className='auth-input__input'
                        type='text' required
                    />

                    <span className='auth-input__span'>Что-то пошло не так...</span>
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>E-mail</p>
                    <input
                        onChange={handleChangeEmail}
                        value={emailValue}
                        className='auth-input__input'
                        type='email' required
                    />

                    <span className='auth-input__span'>Что-то пошло не так...</span>
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>Пароль</p>
                    <input
                        onChange={handleChangePassword}
                        value={passwordValue}
                        className='auth-input__input'
                        type='password' required
                    />

                    <span className='auth-input__span'>Что-то пошло не так...</span>
                </div>

                <AuthButton text='Регистрация'/>
            </form>

            <Link to='/signin' className='auth__link'>Уже зарегистрированы?
                <span className='auth__link-span'>Войти</span>
            </Link>
        </main>
    );
}

export default SignUp;
