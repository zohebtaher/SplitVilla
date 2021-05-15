import {
    RECEIVE_ALL_USERS,
    CLEAR_ALL_USERS
}from "../actions/user_actions"

const AllUsersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.users)
        case CLEAR_ALL_USERS:
            return {}
        default:
            return state;
    }
}

export default AllUsersReducer;