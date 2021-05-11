import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { logInUser } from '../../actions/session_actions';
import LoginForm from './login_form'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        link: <Link to='/signup'>Sign up Instead</Link>
    };
};


const mDTP = dispatch => {
    return {
        login: user => dispatch(logInUser(user))
    };
};

export default connect(mSTP, mDTP)(LoginForm);
