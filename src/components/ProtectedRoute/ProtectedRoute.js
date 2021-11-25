import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute({component: Component, ...props}) {
    return (
        <Route>
            {
                localStorage.getItem('jwt') ? <Component {...props}/> :
                    props.isLoggedIn ? <Component {...props}/> :
                        <Redirect to='/signup'/>
            }
        </Route>
    )
}

export default ProtectedRoute;
