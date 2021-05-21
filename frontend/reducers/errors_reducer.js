import { combineReducers } from "redux";

import sessionErrorReducer from "./session_errors_reducer";
import AllUsersErrorsReducer from "./all_users_errors_reducer";
import requestErrorsReducer from "./request_errors_reducer";
import friendshipErrorReducer from "./friendship_errors_reducer";
import billsErrorsReducer from "./bills_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
  allUsers: AllUsersErrorsReducer,
  requests: requestErrorsReducer,
  friendship: friendshipErrorReducer,
  bills: billsErrorsReducer,
});

export default errorsReducer;
