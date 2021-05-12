import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <h1>This is from APP</h1>
       <GreetingContainer/>
      
        <AuthRoute path='/signup' component={SignupContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
);



export default App;