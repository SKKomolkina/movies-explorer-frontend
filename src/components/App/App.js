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
import * as mainApi from "../../utils/MainApi";

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
                        console.log(savedMovies);
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

    const [movies, setMovies] = React.useState([]);
    const [shortMovies, setShortMovies] = React.useState([]);

    const [preloader, setPreloader] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);
    const [inputError, setInputError] = React.useState(false);

    const [isCheckBoxOpen, setIsCheckBoxOpen] = React.useState(false);

    //search by input
    const searchMovie = (text) => {
        if (!localStorage.getItem('all-movies')) {
            movieApi.getMovies()
                .then((data) => {
                    console.log(data);
                    const allMovies = JSON.stringify(data);
                    localStorage.setItem('all-movies', allMovies);

                    setMovies(filterMovies(data, text));
                })
                .catch((err) => {
                    setInputError(true);
                })
                .finally(() => setPreloader(false));
        }
        const moviesList = JSON.parse(localStorage.getItem('all-movies'));
        if (filterMovies(moviesList, text) === 0) {
            return setSearchError(true);
        }
        setSearchError(false);
        return setMovies(filterMovies(moviesList, text));
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
        if (searchList.length === 0) {
            setSearchError(true);
        }
        return searchList;
    };

    // search by checkbox
    const handleToggleCheckbox = () => {
        setIsCheckBoxOpen(!isCheckBoxOpen);
    }

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
                            movies={movies}
                            savedMovies={savedMovies}
                            setSavedMovies={setSavedMovies}

                            searchMovie={searchMovie}
                            handleToggleCheckbox={handleToggleCheckbox}

                            searchError={searchError}
                            inputError={inputError}
                            isCheckboxOpen={isCheckBoxOpen}
                            preloader={preloader}
                        />
                        <Footer/>
                    </Route>

                    <Route path='/saved-movies'>
                        <Header/>
                        <SavedMovies
                            savedMovies={savedMovies}
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
