import {
    RECEIVE_FRIENDSHIP_ERRORS,
    CLEAR_FRIENDSHIP_ERRORS
} from '../actions/friendship_actions';


const friendshipErrorReducer = (state = [], action)=> {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_FRIENDSHIP_ERRORS:
            return action.errors;
        case CLEAR_FRIENDSHIP_ERRORS:
            return [];
        default:
            return state;
    }
}


export default friendshipErrorReducer;