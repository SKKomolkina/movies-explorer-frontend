import React from 'react';
import { Link } from 'react-router-dom';

import './Auth.scss';
import logo from '../../../images/logo.svg';
import AuthInput from '../../Other/Inputs/AuthInput/AuthInput';
import AuthButton from "../../Other/Buttons/AuthButton/AuthButton";

function SignIn() {
    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo' /></Link>
                <h1 className='auth__title'>Рады видеть!</h1>
            </header>

            <form className='auth__form'>
                <AuthInput title='Email'/>
                <AuthInput title='Пароль'/>

                <AuthButton text='Войти'/>
            </form>

            <Link to='/signup' className='auth__link'>Ещё не зарегистрированы?
                <span className='auth__link-span'>Регистрация</span>
            </Link>
        </main>
    );
}

export default SignIn;
