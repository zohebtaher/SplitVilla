import React from 'react';
import ReactDOM from 'react-dom';
import {signUp,logIn, logOut } from './utils/session_api_util';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", ()=>{
    // let store;
    // let preloadedState = undefined;
    // if (window.currentUser) {
    //     preloadedState = {
    //         session: { id: window.currentUser.id},
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser}
    //         }
    // }} else {
    //     preloadedState = {};
    // }
    

    // testing 
        // window.logIn = logIn;
        // window.signUp = signUp;
        // window.logOut = logOut;
        const store = configureStore();
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        

        
    const root = document.getElementById("root")
    ReactDOM.render( <Root store={store}/>, root)
})