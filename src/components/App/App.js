import {Route, Switch} from 'react-router-dom';

import './App.css';

import Main from '../Pages/Main/Main';
import Movies from '../Pages/Movies/Movies';
import SignIn from '../Pages/Auth/SignIn';
import Signup from '../Pages/Auth/SignUp';
import Header from "../Sections/Header/Header";

function App() {
    return (
        <div className="root">
            <Header/>
            <Switch>
                <Route path='/signin'>
                    <SignIn/>
                </Route>

                <Route path='/signup'>
                    <Signup/>
                </Route>

                <Route exact path='/'>
                    <Main/>
                </Route>

                <Route path='/movies'>
                    <Movies/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
