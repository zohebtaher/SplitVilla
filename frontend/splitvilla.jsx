import React from 'react';
import ReactDOM from 'react-dom';
import {signUp,logIn, logOut } from './utils/session_api_util';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root")
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);

    // testing 
        // window.logIn = logIn;
        // window.signUp = signUp;
        // window.logOut = logOut;

       

    ReactDOM.render( <Root store={store}/>, root)
})