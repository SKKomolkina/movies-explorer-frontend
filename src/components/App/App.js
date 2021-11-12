import React, { useRef } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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

import { pageContext } from '../../contexts/pageContext';
import { currentUserContext } from '../../contexts/currentUserContext';

import * as auth from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [currentUser, setCurrentUser] = React.useState(React.useContext(currentUserContext));

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const history = useHistory();

    const aboutRef = useRef();

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        if (jwt) {
            auth.getContent(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        history.push('/movies');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [history]);

    function signUp(email, password, name) {
        auth.register(email, password, name)
            .then(() => {
                console.log('yes');
                setTimeout(history.push, 2000, '/movies');
            })
            .catch(() => {
                console.log('no');
            })
    }

    function signIn(email, password) {
        auth.authorize(email, password)
            .then((res) => {
                const jwt = res.token;
                jwt && localStorage.setItem('jwt', jwt);

                setIsLoggedIn(true);
                history.push('/movies');
            })
            .catch(err => console.log(err));
    }

    return (
        <currentUserContext.Provider value={currentUser}>
            <pageContext.Provider value={{aboutRef}}>
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
                            component={Profile}
                        />

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
        </currentUserContext.Provider>
    );
}

export default App;
