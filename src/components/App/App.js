import React, {useRef} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';

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

// import { pageContext } from '../../contexts/pageContext';
import {currentUserContext} from '../../contexts/currentUserContext';

import * as auth from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import movieApi from "../../utils/MoviesApi";

function App() {

    // signin-signup
    const [currentUser, setCurrentUser] = React.useState(React.useContext(currentUserContext));
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const history = useHistory();
    const aboutRef = useRef();

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        if (jwt) {
            auth.checkToken(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        setCurrentUser({
                            email: res.email,
                            name: res.name
                        });
                        history.push('/movies');
                    }
                })
        }
    }, []);

    function signUp(email, password, name) {
        auth.register(email, password, name)
            .then((res) => {
                if (res.ok) {
                    signIn(email, password);
                }
                console.log('yes');
                setTimeout(history.push, 2000, '/signin');
            })
            .catch(() => {
                console.log('no');
            })
    }

    function signIn(email, password) {
        auth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    auth.checkToken(res.token)
                        .then((data) => {
                            setCurrentUser({email: data.email, name: data.name})
                        })
                        .catch(err => console.log(err));
                }
                setIsLoggedIn(true);
                history.push('/movies');
            })
            .catch(err => console.log(err));
    }

    // movies
    const [savedMovies, setSavedMovies] = React.useState([]);

    // if (!localStorage.getItem('saved')) {
    //     auth.getMovies(localStorage.getItem('jwt'))
    //         .then((res) => {
    //             console.log(res);
    //             const savedMovies = JSON.stringify(res);
    //             localStorage.setItem('saved-movies', savedMovies);
    //
    //             setMovies(filterMovies(res, text));
    //         })
    //         .catch(err => console.log(err))
    // }

    // const addMovieToSavedList = (movie) => {
    //     return auth.addMovieToSaved(localStorage.getItem('jwt'), movie)
    //         .then((res) => {
    //             const savedMovies = JSON.stringify(res);
    //             localStorage.setItem('saved-movies', savedMovies);
    //
    //             setSavedMovies(movie);
    //         })
    //         .catch(err => console.log(err));
    // }


    return (
        <currentUserContext.Provider value={currentUser}>
            <div className="root">
                <Switch>
                    <Route path='/signin'>
                        <SignIn signIn={signIn}/>
                    </Route>

                    <Route path='/signup'>
                        <Signup signUp={signUp}/>
                    </Route>

                    <ProtectedRoute
                        exact path='/profile'
                        isLoggedIn={isLoggedIn}
                        component={Profile}
                    />

                    <Route exact path='/'>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>

                    <Route path='/movies'>
                        <Header/>
                        <Movies
                        />
                        <Footer/>
                    </Route>

                    <Route path='/saved-movies'>
                        <Header/>
                        <SavedMovies
                        />
                        <Footer/>
                    </Route>

                    <Route path='*'>
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </currentUserContext.Provider>
    );
}

export default App;
