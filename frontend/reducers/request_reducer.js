import {
    SEND_REQUEST,
    RECEIVE_REQUESTS,
    REMOVE_REQUEST,
    CLEAR_REQUESTS
} from '../actions/request_actions'

const requestReducer=(state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEND_REQUEST:
            return Object.assign({}, state, action.request)
        case RECEIVE_REQUESTS:
            return Object.assign({}, state, action.requests)
        case REMOVE_REQUEST:
            let newState = Object.assign({}, state)
            delete newState[action.requesId]
            return newState;
        case CLEAR_REQUESTS:
            return {}
        default:
            return state;
    }
}

export default requestReducer;