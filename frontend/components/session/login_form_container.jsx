import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { logInUser, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        link: <Link to='/login'>Log in</Link>
    };
};


const mDTP = dispatch => {
    return {
        login: user => dispatch(logInUser(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);
