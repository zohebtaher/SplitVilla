import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import AllUsersReducer from './all_users_reducer';
import requestReducer from './request_reducer';
import friendshipReducer from './friendship_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    allUsers: AllUsersReducer,
    requests: requestReducer,
    friendships: friendshipReducer,
})

export default entitiesReducer;