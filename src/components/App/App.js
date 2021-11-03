import {Route, Switch} from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';

function App() {
    return (
        <div className="root">
            <Header/>

            <Switch>
                <Route path='signin'>

                </Route>

                <Route exact path='/'>
                    <Main/>
                </Route>

                <Route path='/movies'>
                    <Movies />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
