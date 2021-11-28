import React from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';

import './App.css';

import SignIn from '../Pages/Auth/SignIn';
import Signup from '../Pages/Auth/SignUp';
import Profile from '../Pages/Profile/Profile';
import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SavedMovies from '../Pages/SavedMovies/SavedMovies';
import PageNotFound from '../Pages/NotFound/PageNotFound';

import {currentUserContext} from '../../contexts/currentUserContext';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import movieApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";

function App() {

    // signin-signup
    const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        if (jwt) {
            mainApi.checkToken(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        setCurrentUser({
                            email: res.email,
                            name: res.name
                        });
                    }
                })
        }
    }, [isLoggedIn]);

    function signUp(email, password, name) {
        mainApi.register(email, password, name)
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
        mainApi.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    mainApi.checkToken(res.token)
                        .then((data) => {
                            setCurrentUser({email: data.email, name: data.name})
                        })
                        .catch(err => console.log(err));
                }
                setIsLoggedIn(true);
                setTimeout(history.push, 2000, '/movies');
            })
            .catch(err => console.log(err));
    }

    const signOut = () => {
        localStorage.clear();
        localStorage.removeItem('saved');
        setSavedMovies([]);
        setMovies([]);
        setIsLoggedIn(false);
        history.push('/');
    }


    // movies
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [movies, setMovies] = React.useState([]);

    const [preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);
    const [inputError, setInputError] = React.useState(false);
    const [isCheckBoxOpen, setIsCheckBoxOpen] = React.useState(false);

    //search by input
    const searchMovie = (text) => {
        if (isLoggedIn) {
            const jwt = localStorage.getItem('jwt');

            if (history.location.pathname === '/movies') {

                if (!localStorage.getItem('all-movies')) {
                    setPreloader(true);

                    movieApi.getMovies()
                        .then((data) => {
                            console.log(data);
                            setMovies(filterMovies(data, text));

                            const allMovies = JSON.stringify(data);
                            localStorage.setItem('all-movies', allMovies);
                        })
                        .catch(() => setInputError(true))
                        .finally(() => setPreloader(false));

                } else {
                    const searchList = JSON.parse(localStorage.getItem('all-movies'));
                    setMovies(filterMovies(searchList, text));
                }
            }

            if (history.location.pathname === '/saved-movies') {
                setPreloader(true);
                mainApi.getSavedMovies(jwt)
                    .then((res) => {
                        setSavedMovies(filterMovies(res, text));
                        // console.log(res);

                        const saved = JSON.parse(res);
                        localStorage.setItem('saved', saved);
                    })
                    .catch(() => setSearchError(true))
                    .finally(() => setPreloader(false));
            }
            // setSearchError(false);
        }
    }

    const filterMovies = (data, text) => {
        const searchList = data.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
                if ((movie.duration <= 40) && (isCheckBoxOpen)) {
                    console.log(movie);
                    return movie;
                }
                if ((movie.duration >= 40) && (!isCheckBoxOpen)) {
                    return movie;
                }
                return false;
            }
            return false;
        });

        console.log(searchList);

        if (searchList.length === 0) {
            console.log(searchList.length);
            setSearchError(true);
            console.log(searchError);
        } else {
            setSearchError(false);
            console.log(searchError);
        }

        const searchResult = JSON.stringify(searchList);
        localStorage.setItem('search', searchResult);

        return searchList;
    };

    React.useEffect(() => {
        // const saved = localStorage.getItem('saved');
        if (localStorage.getItem('saved')) {
            setSavedMovies(JSON.parse(localStorage.getItem('saved')));
        }
    }, [history]);

    React.useEffect(() => {
        if (isLoggedIn) {
            if (!localStorage.getItem('saved')) {
                mainApi.getSavedMovies(localStorage.getItem('jwt'))
                    .then((res) => {
                        setSavedMovies(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    }, [savedMovies, history]);

    React.useEffect(() => {
        if (savedMovies) {
            localStorage.setItem('saved', JSON.stringify(savedMovies));
        }
    }, [savedMovies]);


// search by checkbox
    const handleToggleCheckbox = () => {
        setIsCheckBoxOpen(!isCheckBoxOpen);
    }

    return (
        <currentUserContext.Provider value={{currentUser, setCurrentUser}}>
            <div className="root">
                <Switch>
                    <Route exact path='/'>
                        <Main
                            isLoggedIn={isLoggedIn}
                        />
                    </Route>

                    <Route path='/signin'>
                        {isLoggedIn ? <SignIn signIn={signIn}/> : <Redirect to='/'/>}
                    </Route>

                    <Route path='/signup'>
                        {isLoggedIn ? <Signup signUp={signUp}/> : <Redirect to='/'/>}
                    </Route>

                    <ProtectedRoute
                        exact path='/profile'
                        component={Profile}

                        isLoggedIn={isLoggedIn}
                        signOut={signOut}
                    />

                    <ProtectedRoute
                        path='/movies'
                        isLoggedIn={isLoggedIn}

                        component={Movies}

                        movies={movies}
                        setMovies={setMovies}
                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}

                        searchMovie={searchMovie}
                        handleToggleCheckbox={handleToggleCheckbox}

                        searchError={searchError}
                        setSearchError={setSearchError}
                        inputError={inputError}
                        isCheckboxOpen={isCheckBoxOpen}
                        preloader={preloader}
                    />

                    <ProtectedRoute
                        path='/saved-movies'
                        isLoggedIn={isLoggedIn}

                        component={SavedMovies}

                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}
                        movies={movies}
                        setMovies={setMovies}

                        searchMovie={searchMovie}
                        handleToggleCheckbox={handleToggleCheckbox}

                        searchError={searchError}
                        inputError={inputError}
                        isCheckboxOpen={isCheckBoxOpen}
                        preloader={preloader}
                    />

                    <Route path='*'>
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </currentUserContext.Provider>
    );
}

export default App;
