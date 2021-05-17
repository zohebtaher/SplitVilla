import {
    RECEIVE_ALL_USERS,
    CLEAR_ALL_USERS,
    RECEIVE_USER,
    CLEAR_USER
}from "../actions/user_actions"

const AllUsersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.users)
        case RECEIVE_USER:
            return Object.assign({}, state, action.user)
        case CLEAR_ALL_USERS:
            return {}
        case CLEAR_USER:
            return {}
        default:
            return state;
    }
}

export default AllUsersReducer;