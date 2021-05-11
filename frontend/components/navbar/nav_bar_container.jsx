import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mSTP = (state) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    logOutUser: () => dispatch(logOutUser())
});

export default (mSTP, mDTP)(NavBar)