import * as APIUtil from '../utils/request_util';

export const SEND_REQUEST = "SEND_REQUEST";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const CLEAR_REQUESTS = "CLEAR_REQUESTS";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";
export const CLEAR_REQUEST_ERRORS = "CLEAR_REQUEST_ERRORS";

// action creators
const createFriendRequest = request => ({
    type: SEND_REQUEST,
    request
})

const receiveFriendRequests = requests => ({
    type: RECEIVE_REQUESTS,
    requests 
})

const removeFriendRequest = requestId => ({
    type: REMOVE_REQUEST,
    requestId
})

const receiveRequestErrors = errors => ({
    type: RECEIVE_REQUEST_ERRORS,
    errors 
})

export const clearFriendRequests = () => ({
    type: CLEAR_REQUESTS,
})

export const clearRequestErrors = () => ({
    type: CLEAR_REQUEST_ERRORS
})

//Thunk Action Creators

export const postFriendRequest = (requestor_id, receiver_id) => dispatch => 
    APIUtil.sendRequest(requestor_id,receiver_id).then(
        request =>dispatch(createFriendRequest(request)),
        err => dispatch(receiveRequestErrors(err.responseJSON))
    )



export const deleteFriendRequest = requestId => dispatch => 
    APIUtil.deleteRequest(requestId).then(
        () =>dispatch(removeFriendRequest(requestId)),
        err => dispatch(receiveRequestErrors(err.responseJSON))
    )

export const fetchUserFriendRequests = userId => dispatch => 
        APIUtil.fetchUserRequests(userId).then(
            requests => dispatch(receiveFriendRequests(requests)),
            err => dispatch(receiveRequestErrors(err.responseJSON))

        )