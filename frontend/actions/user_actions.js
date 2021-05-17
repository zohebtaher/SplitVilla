import { fetchUsers, fetchUser } from '../utils/session_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const CLEAR_ALL_USERS = "CLEAR_ALL_USERS";
export const RECEIVE_ALL_USERS_ERRORS = "RECEIVE_ALL_USERS_ERRORS";
export const CLEAR_ALL_USERS_ERRORS = "CLEAR_ALL_USERS_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER = "CLEAR_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const clearAllUsers = () => ({
    type: CLEAR_ALL_USERS
});

export const clearUser = () => ({
    type: CLEAR_USER
});

export const receiveAllUserErrors = errors => ({
    type: RECEIVE_ALL_USERS_ERRORS,
    errors
})

export const clearAllUserErrors = () => ({
    type: CLEAR_ALL_USERS_ERRORS
})

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const fetchAllUsers = () => dispatch => fetchUsers()
    .then(users =>dispatch(receiveAllUsers(users)),
    errors => dispatch(receiveAllUserErrors(errors.responseJSON)));

export const fetchTheUser = userId => dispatch => fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveAllUserErrors(errors.responseJSON)));

export const getCurrentUser = userId => dispatch => fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveAllUserErrors(errors.responseJSON)))