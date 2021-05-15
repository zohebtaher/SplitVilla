import {
    RECEIVE_ALL_USERS_ERRORS,
    CLEAR_ALL_USERS_ERRORS
} from "../actions/user_actions"
import AllUsersReducer from "./all_users_reducer";

const AllUsersErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_USERS_ERRORS:
            return action.errors;
        case CLEAR_ALL_USERS_ERRORS:
            return [];
        default:
            return state;
    }
};

export default AllUsersErrorsReducer;