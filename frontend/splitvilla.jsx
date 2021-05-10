import React from 'react'
import ReactDOM from 'react-dom'
import {signup,login, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root")

    // testing 
        window.login = login;
        window.signup = signup;
        window.logout = logout;

    ReactDOM.render( <h1>Test SplitVilla</h1>, root)
})