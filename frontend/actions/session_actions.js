import {signUp, logIn, logOut} from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

const receiveCurrentUser = user =>({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrrentUser = () =>({
    type: LOGOUT_CURRENT_USER,

});

export const createNewUser = formUser => dispatch => signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logInUser = formUser => dispatch => logIn(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logOutUser = () => dispatch => logOut()
    .then(() => dispatch(logoutCurrrentUser()));