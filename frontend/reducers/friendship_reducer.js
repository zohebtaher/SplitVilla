import {
    ACCEPT_FRIENDSHIP,
    RECEIVE_USER_FRIENDSHIPS,
    CLEAR_FRIENDSHIPS,
    REMOVE_FRIENDSHIP,

} from '../actions/friendship_actions';


const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case ACCEPT_FRIENDSHIP:
            return Object.assign({},state, action.friendship)
        case RECEIVE_USER_FRIENDSHIPS:
            return Object.assign({}, state, action.friendships)
        case REMOVE_FRIENDSHIP:
            let newState = Object.assign({}, state);
            delete newState[action.friendshipId]
            return newState;
        case CLEAR_FRIENDSHIPS:
            return {};
        default:
            return state
    }
}

export default friendshipReducer;