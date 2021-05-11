import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util'

const App = () => (
    <div>
        <header>
            <NavBarContainer/>
            <p>Hello App</p> 
        </header>
        <AuthRoute path='/signup' component={SignupContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
);

export default App;