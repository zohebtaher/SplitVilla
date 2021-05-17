import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter} from 'react-router-dom';

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

const Auth =({component: Component, path, loggedIn, exact}) => (
    <Route
    path= {path}
    exact= {exact}
    render= {props => (
        loggedIn ? <Redirect to="/dashboard"/> : <Component {...props}/>
    )}
    />
)

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path = {path}
        exact = {exact}
        render = {props => (
            loggedIn ? <Component {...props} /> : <Redirect to='/signup'/>
        )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, undefined)(Protected));
