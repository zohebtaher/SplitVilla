import { combineReducers } from 'redux';

import sessionErrorReducer from './session_errors_reducer';
import AllUsersErrorsReducer from './all_users_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    allUsers: AllUsersErrorsReducer
});

export default errorsReducer;
