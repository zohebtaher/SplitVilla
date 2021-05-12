import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './navbar/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash_folder/splash'
const App = () => (
    <div className ="main-div">
        {/* <h1>This is from APP</h1> */}
        <header>
        <GreetingContainer/>
        </header>
        <AuthRoute  exact path='/' component={Splash} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupContainer} />
    </div>
);



export default App;