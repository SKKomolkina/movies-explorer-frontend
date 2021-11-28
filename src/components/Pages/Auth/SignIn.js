import React from 'react';
import {Link} from 'react-router-dom';

import './Auth.scss';
import '../Profile/Profile.scss';

import logo from '../../../images/logo.svg';
import AuthButton from "../../Other/Buttons/AuthButton/AuthButton";

import {useValidation} from '../../../utils/useValidation';

function SignIn({signIn, loginError, setLoginError, disabledInput}) {
    const [errorMessage, setErrorMessage] = React.useState(false);

    const {
        values,
        handleChange,
        validatorErrors,
        setValidatorErrors,
        isValid,
        setIsValid
    } = useValidation(setErrorMessage);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsValid(false);

        if (!values.email || !values.password) {
            return false;
        }
        signIn(values.email, values.password);
    }

    React.useEffect(() => {
        setLoginError('');
    }, []);

    return (
        <main className='auth'>
            <header className='auth__header'>
                <Link to='/'><img src={logo} alt='logo' className='auth__logo'/></Link>
                <h1 className='auth__title'>Рады видеть!</h1>
            </header>

            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth-input'>
                    <p className='auth-input__text'>E-mail</p>
                    <input
                        id='email'
                        name='email'
                        className='auth-input__input'

                        onChange={handleChange}
                        disabled={disabledInput}
                        value={values.email}

                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        type='email' required
                    />

                    {/*<span className='auth-input__span'>Что-то пошло не так...</span>*/}
                </div>

                <div className='auth-input'>
                    <p className='auth-input__text'>Password</p>
                    <input
                        id='password'
                        name='password'
                        className='auth-input__input'

                        onChange={handleChange}
                        disabled={disabledInput}
                        value={values.password}

                        minLength='3'
                        maxLength='30'
                        type='password' required
                    />

                    {/*<span className='auth-input__span'>Что-то пошло не так...</span>*/}
                </div>

                <div className='profile__message'>
                    {validatorErrors &&
                    Object.values(validatorErrors).filter((item) => item !== "").length > 0 ?
                        Object.entries(validatorErrors).map((item, ind) => {
                            if (item[1] === '') item[0] = '';
                            if (item[0] === 'email') item[0] = 'Email:';
                            if (item[0] === 'password') item[0] = 'Пароль:';
                            return (
                                <p key={ind} className='profile__message-text profile__message-text-error'>
                                    {`${item[0]} ${item[1]}`}
                                </p>
                            );
                        })
                        : ""}


                    {
                        loginError ?
                            (<p className='profile__message-text profile__message-text-error'>{loginError}</p>) : ''
                    }
                </div>

                <AuthButton isValid={isValid} text='Войти'/>
            </form>

            <Link to='/signup' className='auth__link'>Ещё не зарегистрированы?
                <span className='auth__link-span'>Регистрация</span>
            </Link>
        </main>
    );
}

export default SignIn;
