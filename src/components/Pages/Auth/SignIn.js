import React from 'react';
import {Link} from 'react-router-dom';

import './Auth.scss';

import logo from '../../../images/logo.svg';
import AuthButton from "../../Other/Buttons/AuthButton/AuthButton";

function SignIn({ signIn }) {
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');

    const [showError, setShowError] = React.useState(false);

    const handleChangeEmail = (evt) => {
        setEmailValue(evt.target.value);
    }

    const handleChangePassword = (evt) => {
        setPasswordValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        signIn(emailValue, passwordValue);
    }

    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo' /></Link>
                <h1 className='auth__title'>Рады видеть!</h1>
            </header>

            <h2 className='auth__error'>Ошибка</h2>

            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth-input'>
                    <p className='auth-input__text'>E-mail</p>
                    <input
                        className='auth-input__input'
                        onChange={handleChangeEmail}
                        value={emailValue}
                        type='email' required
                    />

                    <span className='auth-input__span'>Что-то пошло не так...</span>
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>Password</p>
                    <input
                        className='auth-input__input'
                        onChange={handleChangePassword}
                        value={passwordValue}
                        type='password' required
                    />

                    <span className='auth-input__span'>Что-то пошло не так...</span>
                </div>

                <AuthButton text='Войти'/>
            </form>

            <Link to='/signup' className='auth__link'>Ещё не зарегистрированы?
                <span className='auth__link-span'>Регистрация</span>
            </Link>
        </main>
    );
}

export default SignIn;
