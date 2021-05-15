import {signUp, logIn, logOut} from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveCurrentUser = currentUser =>({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrrentUser = () =>({
    type: LOGOUT_CURRENT_USER,

});



export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

//Thunk Action Creators

export const createNewUser = formUser => dispatch => signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logInUser = formUser => dispatch => logIn(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logOutUser = () => dispatch => logOut()
    .then(() => dispatch(logoutCurrrentUser()),
           errors => dispatch(receiveSessionErrors(errors.responseJSON)));


