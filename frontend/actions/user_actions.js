import { fetchUsers } from '../utils/session_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const CLEAR_ALL_USERS = "CLEAR_ALL_USERS";
export const RECEIVE_ALL_USERS_ERRORS = "RECEIVE_ALL_USERS_ERRORS";
export const CLEAR_ALL_USERS_ERRORS = "CLEAR_ALL_USERS_ERRORS";

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const clearAllUsers = () => ({
    type: CLEAR_ALL_USERS
})

export const receiveAllUserErrors = errors => ({
    type: RECEIVE_ALL_USERS_ERRORS,
    errors
})

export const clearAllUserErrors = () => ({
    type: CLEAR_ALL_USERS_ERRORS
})

export const fetchAllUsers = () => dispatch => fetchUsers()
    .then(users =>dispatch(receiveAllUsers(users)),
    errors => dispatch(receiveAllUserErrors(errors.responseJSON)))