import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import AllUsersReducer from './all_users_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    allUsers: AllUsersReducer
})

export default entitiesReducer;