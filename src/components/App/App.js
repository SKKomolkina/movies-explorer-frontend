import React, {useRef} from 'react';
import {Route, Switch,} from 'react-router-dom';

import './App.css';

import Header from '../Sections/Header/Header';
import SignIn from '../Pages/Auth/SignIn';
import Signup from '../Pages/Auth/SignUp';
import Profile from '../Pages/Profile/Profile';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import Footer from '../Sections/Footer/Footer';
import PageNotFound from '../Pages/NotFound/PageNotFound';

import {pageContext} from '../../contexts/pageContext';


function App() {
    const aboutRef = useRef();

    return (
        <pageContext.Provider value={{ aboutRef }}>
            <div className="root">
                <Switch>
                    <Route path='/signin'>
                        <SignIn/>
                    </Route>

                    <Route path='/signup'>
                        <Signup/>
                    </Route>

                    <Route path='/profile'>
                        <Header/>
                        <Profile name={'Виталий'} email={'pochta@yandex.ru'} />
                    </Route>

                    <Route exact path='/'>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>

                    <Route path='/movies'>
                        <Header/>
                        <Movies/>
                        <Footer/>
                    </Route>

                    <Route path='/saved-movies'>
                        <Header/>
                        <SavedMovies/>
                        <Footer/>
                    </Route>

                    <Route path='*'>
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </pageContext.Provider>
    );
}

export default App;
